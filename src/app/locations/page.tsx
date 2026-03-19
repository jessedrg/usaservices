import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { getEnabledStates } from '@/lib/cities'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { canonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'All Service Locations — Emergency Home Services by State',
  description:
    'Find 24/7 emergency home services in your state. We serve all 50 states with licensed electricians, plumbers, HVAC technicians, locksmiths and more.',
  alternates: { canonical: canonicalUrl('/locations') },
}

export default function LocationsPage() {
  const states = getEnabledStates()

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Locations' }]} />

        <div className="mb-12">
          <h1 className="section-heading">Emergency Services by State</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            We provide 24/7 emergency home services across all 50 states.
            Select your state to find services in your city.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {states.map((state) => (
            <Link
              key={state.stateSlug}
              href={`/${state.stateSlug}`}
              className="card group"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {state.stateName}
                </h2>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 transition-colors" />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {state.cityCount.toLocaleString()} cities
                </span>
                <span>
                  {state.totalPopulation.toLocaleString()} residents
                </span>
              </div>
              {state.topCities.length > 0 && (
                <div className="mt-3 text-xs text-gray-400">
                  Top cities:{' '}
                  {state.topCities
                    .slice(0, 4)
                    .map((c) => c.city)
                    .join(', ')}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <CTASection />
    </>
  )
}
