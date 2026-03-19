import type { MetadataRoute } from 'next'
import { getAllStates, getStateBySlug } from '@/lib/cities'
import { getAllServiceSlugs } from '@/lib/services'
import { getBaseUrl } from '@/lib/seo'
import { ENABLED_STATES } from '@/lib/config'

/**
 * Sitemap Index — generates multiple sitemaps:
 *   /sitemap/0.xml  → static + service pages
 *   /sitemap/1.xml  → state: california (cities + service+city)
 *   /sitemap/2.xml  → state: new-york
 *   /sitemap/3.xml  → state: florida
 *   ... one per enabled state
 */

export function generateSitemaps() {
  // id 0 = static/services, then 1..N = one per enabled state
  const ids = [{ id: 0 }]
  ENABLED_STATES.forEach((_, i) => {
    ids.push({ id: i + 1 })
  })
  return ids
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const serviceSlugs = getAllServiceSlugs()

  // id 0 → static pages + service category pages + state index pages
  if (id === 0) {
    const entries: MetadataRoute.Sitemap = []

    // Static pages
    entries.push(
      { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
      { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
      { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
      { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    )

    // Service category pages
    for (const slug of serviceSlugs) {
      entries.push({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }

    // All enabled state pages
    for (const stateSlug of ENABLED_STATES) {
      entries.push({
        url: `${baseUrl}/${stateSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }

    return entries
  }

  // id 1..N → one sitemap per enabled state with ALL cities + service+city combos
  const stateIndex = id - 1
  const stateSlug = ENABLED_STATES[stateIndex]
  if (!stateSlug) return []

  const stateData = getStateBySlug(stateSlug)
  if (!stateData) return []

  const entries: MetadataRoute.Sitemap = []

  for (const city of stateData.cities) {
    // City page
    entries.push({
      url: `${baseUrl}/${stateSlug}/${city.citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })

    // Service+City pages (money pages)
    for (const serviceSlug of serviceSlugs) {
      entries.push({
        url: `${baseUrl}/${stateSlug}/${city.citySlug}/${serviceSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  return entries
}
