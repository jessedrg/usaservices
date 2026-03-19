import citiesData from '@/data/cities.json'
import statesIndex from '@/data/states-index.json'
import { ENABLED_STATES } from '@/lib/config'

export interface CityData {
  city: string
  citySlug: string
  population: number
  county: string
  zips: string[]
  lat: number
  lng: number
}

export interface StateData {
  stateId: string
  stateName: string
  stateSlug: string
  cities: CityData[]
  totalPopulation: number
}

export interface StateIndexEntry {
  stateId: string
  stateName: string
  stateSlug: string
  cityCount: number
  totalPopulation: number
  topCities: { city: string; citySlug: string; population: number }[]
}

const data = citiesData as {
  states: Record<string, StateData>
}

export function getAllStates(): StateIndexEntry[] {
  return statesIndex as StateIndexEntry[]
}

export function getStateBySlug(slug: string): StateData | undefined {
  return data.states[slug]
}

export function getCityBySlug(
  stateSlug: string,
  citySlug: string
): { state: StateData; city: CityData } | undefined {
  const state = data.states[stateSlug]
  if (!state) return undefined
  const city = state.cities.find((c) => c.citySlug === citySlug)
  if (!city) return undefined
  return { state, city }
}

export function getAllStateSlugs(): string[] {
  return Object.keys(data.states).filter((s) => ENABLED_STATES.includes(s))
}

export function getAllStateSlugsUnfiltered(): string[] {
  return Object.keys(data.states)
}

export function getAllCityPaths(): { stateSlug: string; citySlug: string }[] {
  const paths: { stateSlug: string; citySlug: string }[] = []
  for (const [stateSlug, state] of Object.entries(data.states)) {
    if (!ENABLED_STATES.includes(stateSlug)) continue
    for (const city of state.cities) {
      paths.push({ stateSlug, citySlug: city.citySlug })
    }
  }
  return paths
}

export function getNearbyCities(
  stateSlug: string,
  citySlug: string,
  limit = 6
): CityData[] {
  const result = getCityBySlug(stateSlug, citySlug)
  if (!result) return []
  const { state, city } = result

  return state.cities
    .filter((c) => c.citySlug !== citySlug)
    .map((c) => ({
      ...c,
      distance: Math.sqrt(
        Math.pow(c.lat - city.lat, 2) + Math.pow(c.lng - city.lng, 2)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
}
