import type { Metadata } from 'next'
import { SERVICES } from '@/lib/services'
import { ServiceCard } from '@/components/ServiceCard'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { canonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: '24/7 Emergency Home Services — All Services',
  description:
    'Browse all emergency home services: electricians, plumbers, HVAC repair, locksmiths, garage door repair, appliance repair, roofing & glass repair. Available 24/7 nationwide.',
  alternates: { canonical: canonicalUrl('/services') },
}

export default function ServicesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Services' }]} />

        <div className="mb-12">
          <h1 className="section-heading">All Emergency Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            We connect you with licensed, insured professionals for every type
            of home emergency. All services are available 24 hours a day, 7 days
            a week, 365 days a year.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.slug} className="card">
              <ServiceCard
                slug={service.slug}
                name={service.name}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
              <p className="mt-4 text-sm text-gray-500">
                {service.emergencyDescription}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </>
  )
}
