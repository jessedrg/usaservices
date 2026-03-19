import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { getCityBySlug, getNearbyCities } from '@/lib/cities'
import { SERVICES } from '@/lib/services'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import {
  canonicalUrl,
  breadcrumbSchema,
  localBusinessSchema,
  getBaseUrl,
  getSiteName,
} from '@/lib/seo'
import { SITE_PHONE, SITE_PHONE_HREF, ENABLED_STATES } from '@/lib/config'

interface Props {
  params: { state: string; city: string }
}

export const dynamicParams = true
export const revalidate = 86400 // ISR: revalidate every 24h

export function generateMetadata({ params }: Props): Metadata {
  if (!ENABLED_STATES.includes(params.state)) return {}
  const result = getCityBySlug(params.state, params.city)
  if (!result) return {}
  const { state, city } = result

  return {
    title: `Emergency Home Services in ${city.city}, ${state.stateId} — 24/7`,
    description: `24/7 emergency electricians, plumbers, HVAC, locksmiths & more in ${city.city}, ${state.stateName}. Fast 30-60 min response. Licensed & insured professionals serving ${city.city} and surrounding areas.`,
    alternates: {
      canonical: canonicalUrl(`/${state.stateSlug}/${city.citySlug}`),
    },
  }
}

export default function CityPage({ params }: Props) {
  if (!ENABLED_STATES.includes(params.state)) notFound()
  const result = getCityBySlug(params.state, params.city)
  if (!result) notFound()
  const { state, city } = result

  const nearby = getNearbyCities(params.state, params.city, 8)

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: getBaseUrl() },
    { name: state.stateName, url: `${getBaseUrl()}/${state.stateSlug}` },
    {
      name: city.city,
      url: `${getBaseUrl()}/${state.stateSlug}/${city.citySlug}`,
    },
  ])

  const businessJsonLd = localBusinessSchema({
    name: `${getSiteName()} - ${city.city}, ${state.stateId}`,
    description: `24/7 emergency home services in ${city.city}, ${state.stateName}`,
    city: city.city,
    state: state.stateName,
    url: `${getBaseUrl()}/${state.stateSlug}/${city.citySlug}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: state.stateName, href: `/${state.stateSlug}` },
            { label: city.city },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <MapPin className="h-4 w-4" />
            <span>
              {city.county} County, {state.stateName}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Emergency Home Services in{' '}
            <span className="text-brand-600">{city.city}</span>,{' '}
            {state.stateId}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            Need an emergency electrician, plumber, or other home service
            professional in {city.city}, {state.stateName}? Our licensed and
            insured technicians are available 24/7 with typical response times
            of 30-60 minutes.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href={SITE_PHONE_HREF} className="btn-emergency">
              <Phone className="h-5 w-5" />
              Call Now for Service in {city.city}
            </a>
          </div>
        </div>

        {/* Services - these are the key internal links that prevent cannibalization */}
        <section className="mb-12">
          <h2 className="section-heading text-2xl mb-6">
            Emergency Services in {city.city}, {state.stateId}
          </h2>
          <p className="text-gray-600 mb-6">
            Select a service below to get specific information about that
            emergency service in {city.city}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/${state.stateSlug}/${city.citySlug}/${service.slug}`}
                className="card group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {service.shortName}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {service.metaDescription.split('.')[0]} in {city.city}.
                </p>
                <div className="mt-3 text-sm text-brand-600 font-medium flex items-center gap-1">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* City Info */}
        <section className="mb-12 bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About {city.city}, {state.stateId}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Population</div>
              <div className="font-semibold text-gray-900">
                {city.population.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-gray-500">County</div>
              <div className="font-semibold text-gray-900">{city.county}</div>
            </div>
            <div>
              <div className="text-gray-500">State</div>
              <div className="font-semibold text-gray-900">
                {state.stateName}
              </div>
            </div>
            <div>
              <div className="text-gray-500">ZIP Codes</div>
              <div className="font-semibold text-gray-900">
                {city.zips.join(', ')}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        {nearby.length > 0 && (
          <section className="mb-12">
            <h2 className="section-heading text-2xl mb-6">
              Nearby Cities We Also Serve
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {nearby.map((nc) => (
                <Link
                  key={nc.citySlug}
                  href={`/${state.stateSlug}/${nc.citySlug}`}
                  className="card group flex items-center justify-between py-3"
                >
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
                      {nc.city}
                    </div>
                    <div className="text-xs text-gray-500">
                      {nc.population.toLocaleString()} residents
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <CTASection
        title={`Need Emergency Service in ${city.city}?`}
        subtitle={`Licensed professionals available 24/7 in ${city.city}, ${state.stateName} and surrounding areas.`}
      />
    </>
  )
}
