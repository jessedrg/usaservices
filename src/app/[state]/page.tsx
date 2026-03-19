import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, MapPin } from 'lucide-react'
import { getStateBySlug, getAllStateSlugs } from '@/lib/cities'
import { SERVICES } from '@/lib/services'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { canonicalUrl, breadcrumbSchema, getBaseUrl } from '@/lib/seo'
import { SITE_PHONE_HREF } from '@/lib/config'

interface Props {
  params: { state: string }
}

export function generateStaticParams() {
  return getAllStateSlugs().map((state) => ({ state }))
}

export function generateMetadata({ params }: Props): Metadata {
  const state = getStateBySlug(params.state)
  if (!state) return {}

  return {
    title: `Emergency Home Services in ${state.stateName} — 24/7 Service`,
    description: `Find 24/7 emergency electricians, plumbers, HVAC technicians, locksmiths and more in ${state.stateName}. Fast response across ${state.cities.length.toLocaleString()} cities. Licensed & insured.`,
    alternates: { canonical: canonicalUrl(`/${state.stateSlug}`) },
  }
}

export default function StatePage({ params }: Props) {
  const state = getStateBySlug(params.state)
  if (!state) notFound()

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: getBaseUrl() },
    { name: state.stateName, url: `${getBaseUrl()}/${state.stateSlug}` },
  ])

  const topCities = state.cities.slice(0, 50)
  const allCitiesGrouped: Record<string, typeof state.cities> = {}
  for (const city of state.cities) {
    const letter = city.city[0].toUpperCase()
    if (!allCitiesGrouped[letter]) allCitiesGrouped[letter] = []
    allCitiesGrouped[letter].push(city)
  }
  const sortedLetters = Object.keys(allCitiesGrouped).sort()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: state.stateName }]} />

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Emergency Home Services in {state.stateName}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            24/7 emergency electricians, plumbers, HVAC technicians, locksmiths
            and more across {state.cities.length.toLocaleString()} cities in{' '}
            {state.stateName}. Licensed, insured professionals with fast
            response times.
          </p>
          <div className="mt-6">
            <a href={SITE_PHONE_HREF} className="btn-emergency">
              Call Now for Service in {state.stateId}
            </a>
          </div>
        </div>

        {/* Services available */}
        <section className="mb-12">
          <h2 className="section-heading text-2xl mb-6">
            Services Available in {state.stateName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card group flex items-center gap-3 py-3"
              >
                <span className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors text-sm">
                  {service.name}
                </span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 transition-colors ml-auto flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Top Cities */}
        <section className="mb-12">
          <h2 className="section-heading text-2xl mb-6">
            Top Cities in {state.stateName}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {topCities.map((city) => (
              <Link
                key={city.citySlug}
                href={`/${state.stateSlug}/${city.citySlug}`}
                className="card group flex items-center justify-between py-3"
              >
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
                    {city.city}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {city.population.toLocaleString()} residents
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* All Cities A-Z */}
        <section className="mb-12">
          <h2 className="section-heading text-2xl mb-6">
            All Cities in {state.stateName} (A-Z)
          </h2>

          {/* Letter nav */}
          <div className="flex flex-wrap gap-1 mb-6">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-sm font-medium text-gray-700 hover:bg-brand-600 hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          {sortedLetters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-3">
                {letter}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-1">
                {allCitiesGrouped[letter].map((city) => (
                  <Link
                    key={city.citySlug}
                    href={`/${state.stateSlug}/${city.citySlug}`}
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors py-0.5"
                  >
                    {city.city}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <CTASection
        title={`Emergency Service in ${state.stateName}`}
        subtitle={`Licensed professionals available 24/7 across ${state.cities.length.toLocaleString()} cities in ${state.stateName}.`}
      />
    </>
  )
}
