import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { parse } from 'csv-parse/sync'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CSV_PATH = join(__dirname, '../../uszips.csv')
const OUTPUT_PATH = join(__dirname, '../src/data/cities.json')

// US states only (exclude territories)
const US_STATES = new Set([
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
  'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC'
])

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function run() {
  console.log('Reading CSV...')
  const raw = readFileSync(CSV_PATH, 'utf-8')
  const records = parse(raw, { columns: true, skip_empty_lines: true })

  console.log(`Parsed ${records.length} zip code records`)

  // Group by state + city, aggregate population and zip codes
  const cityMap = new Map()

  for (const row of records) {
    const stateId = row.state_id
    const stateName = row.state_name
    const city = row.city
    const zip = row.zip
    const population = parseInt(row.population) || 0
    const lat = parseFloat(row.lat) || 0
    const lng = parseFloat(row.lng) || 0
    const countyName = row.county_name

    // Skip non-US states, military zips
    if (!US_STATES.has(stateId)) continue
    if (row.military === 'TRUE') continue

    const key = `${stateId}|${city}`

    if (!cityMap.has(key)) {
      cityMap.set(key, {
        city,
        citySlug: slugify(city),
        stateId,
        stateName,
        stateSlug: slugify(stateName),
        population: 0,
        zips: [],
        lat: 0,
        lng: 0,
        county: countyName,
        zipCount: 0,
      })
    }

    const entry = cityMap.get(key)
    entry.population += population
    entry.zips.push(zip)
    entry.zipCount++
    // Weighted average for coordinates
    entry.lat = (entry.lat * (entry.zipCount - 1) + lat) / entry.zipCount
    entry.lng = (entry.lng * (entry.zipCount - 1) + lng) / entry.zipCount
    // Use county from most populous zip
    if (population > 0) {
      entry.county = countyName
    }
  }

  const cities = Array.from(cityMap.values())
    .filter(c => c.population > 0) // Only cities with population
    .sort((a, b) => b.population - a.population)

  // Build state index
  const states = {}
  for (const city of cities) {
    if (!states[city.stateSlug]) {
      states[city.stateSlug] = {
        stateId: city.stateId,
        stateName: city.stateName,
        stateSlug: city.stateSlug,
        cities: [],
        totalPopulation: 0,
      }
    }
    states[city.stateSlug].cities.push({
      city: city.city,
      citySlug: city.citySlug,
      population: city.population,
      county: city.county,
      zips: city.zips,
      lat: Math.round(city.lat * 10000) / 10000,
      lng: Math.round(city.lng * 10000) / 10000,
    })
    states[city.stateSlug].totalPopulation += city.population
  }

  // Sort cities within each state by population
  for (const state of Object.values(states)) {
    state.cities.sort((a, b) => b.population - a.population)
  }

  // Check for duplicate slugs within same state and disambiguate
  for (const state of Object.values(states)) {
    const slugCount = {}
    for (const city of state.cities) {
      const slug = city.citySlug
      if (!slugCount[slug]) slugCount[slug] = []
      slugCount[slug].push(city)
    }
    for (const [slug, dupes] of Object.entries(slugCount)) {
      if (dupes.length > 1) {
        // Disambiguate by appending county
        for (const city of dupes) {
          city.citySlug = `${slug}-${slugify(city.county)}`
        }
      }
    }
  }

  const output = {
    generatedAt: new Date().toISOString(),
    totalCities: cities.length,
    totalStates: Object.keys(states).length,
    states,
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true })
  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 0))

  console.log(`Generated ${cities.length} cities across ${Object.keys(states).length} states`)
  console.log(`Output: ${OUTPUT_PATH}`)

  // Also generate a lightweight states-only index
  const statesIndex = Object.values(states).map(s => ({
    stateId: s.stateId,
    stateName: s.stateName,
    stateSlug: s.stateSlug,
    cityCount: s.cities.length,
    totalPopulation: s.totalPopulation,
    topCities: s.cities.slice(0, 10).map(c => ({ city: c.city, citySlug: c.citySlug, population: c.population })),
  })).sort((a, b) => b.totalPopulation - a.totalPopulation)

  writeFileSync(
    join(__dirname, '../src/data/states-index.json'),
    JSON.stringify(statesIndex, null, 0)
  )
  console.log('Generated states index')
}

run()
