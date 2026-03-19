import type { MetadataRoute } from 'next'
import { getAllStates, getStateBySlug } from '@/lib/cities'
import { getAllServiceSlugs } from '@/lib/services'
import { getBaseUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const states = getAllStates()
  const serviceSlugs = getAllServiceSlugs()

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

  // Service pages
  for (const slug of serviceSlugs) {
    entries.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  // State pages
  for (const state of states) {
    entries.push({
      url: `${baseUrl}/${state.stateSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })

    // City pages (top 100 per state for sitemap size management)
    const stateData = getStateBySlug(state.stateSlug)
    if (stateData) {
      const topCities = stateData.cities.slice(0, 100)
      for (const city of topCities) {
        entries.push({
          url: `${baseUrl}/${state.stateSlug}/${city.citySlug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        })

        // Service+city pages (money pages)
        for (const serviceSlug of serviceSlugs) {
          entries.push({
            url: `${baseUrl}/${state.stateSlug}/${city.citySlug}/${serviceSlug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
          })
        }
      }
    }
  }

  return entries
}
