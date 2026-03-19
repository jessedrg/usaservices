import { getStateBySlug } from '@/lib/cities'
import { getAllServiceSlugs } from '@/lib/services'
import { getBaseUrl } from '@/lib/seo'
import { ENABLED_STATES } from '@/lib/config'

export const dynamic = 'force-static'

function url(loc: string, priority: string, changefreq: string): string {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

export async function GET() {
  const baseUrl = getBaseUrl()
  const serviceSlugs = getAllServiceSlugs()
  const urls: string[] = []

  // Static pages
  urls.push(url(baseUrl, '1.0', 'weekly'))
  urls.push(url(`${baseUrl}/services`, '0.9', 'monthly'))
  urls.push(url(`${baseUrl}/locations`, '0.9', 'monthly'))
  urls.push(url(`${baseUrl}/about`, '0.5', 'monthly'))
  urls.push(url(`${baseUrl}/privacy`, '0.3', 'yearly'))
  urls.push(url(`${baseUrl}/terms`, '0.3', 'yearly'))

  // Service category pages
  for (const slug of serviceSlugs) {
    urls.push(url(`${baseUrl}/services/${slug}`, '0.8', 'monthly'))
  }

  // Per enabled state
  for (const stateSlug of ENABLED_STATES) {
    urls.push(url(`${baseUrl}/${stateSlug}`, '0.8', 'monthly'))

    const stateData = getStateBySlug(stateSlug)
    if (!stateData) continue

    for (const city of stateData.cities) {
      urls.push(url(`${baseUrl}/${stateSlug}/${city.citySlug}`, '0.7', 'monthly'))

      for (const serviceSlug of serviceSlugs) {
        urls.push(
          url(`${baseUrl}/${stateSlug}/${city.citySlug}/${serviceSlug}`, '0.6', 'monthly')
        )
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
