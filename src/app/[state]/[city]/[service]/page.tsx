import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, MapPin, Phone, Clock, Shield, Star, CheckCircle } from 'lucide-react'
import { getCityBySlug, getNearbyCities } from '@/lib/cities'
import { SERVICES, getServiceBySlug } from '@/lib/services'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection'
import {
  canonicalUrl,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  getBaseUrl,
  getSiteName,
} from '@/lib/seo'
import { SITE_PHONE, SITE_PHONE_HREF } from '@/lib/config'

interface Props {
  params: { state: string; city: string; service: string }
}

export const dynamicParams = true
export const revalidate = 86400 // ISR: revalidate every 24h

export function generateMetadata({ params }: Props): Metadata {
  const cityResult = getCityBySlug(params.state, params.city)
  const service = getServiceBySlug(params.service)
  if (!cityResult || !service) return {}
  const { state, city } = cityResult

  const title = `${service.name} in ${city.city}, ${state.stateId} — 24/7 Fast Response`
  const description = `Need an ${service.shortName.toLowerCase()} in ${city.city}, ${state.stateName}? 24/7 emergency ${service.shortName.toLowerCase()} services with 30-60 min response. Licensed, insured professionals in ${city.city} & nearby areas.`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl(
        `/${state.stateSlug}/${city.citySlug}/${service.slug}`
      ),
    },
  }
}

export default function ServiceCityPage({ params }: Props) {
  const cityResult = getCityBySlug(params.state, params.city)
  const service = getServiceBySlug(params.service)
  if (!cityResult || !service) notFound()
  const { state, city } = cityResult

  const nearby = getNearbyCities(params.state, params.city, 6)
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug)
  const pageUrl = `${getBaseUrl()}/${state.stateSlug}/${city.citySlug}/${service.slug}`

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: getBaseUrl() },
    { name: state.stateName, url: `${getBaseUrl()}/${state.stateSlug}` },
    {
      name: city.city,
      url: `${getBaseUrl()}/${state.stateSlug}/${city.citySlug}`,
    },
    { name: service.name, url: pageUrl },
  ])

  const serviceJsonLd = serviceSchema({
    serviceName: `${service.name} in ${city.city}, ${state.stateId}`,
    description: `24/7 emergency ${service.shortName.toLowerCase()} services in ${city.city}, ${state.stateName}`,
    city: city.city,
    state: state.stateName,
    url: pageUrl,
  })

  const cityFaqs = service.faqs.map((faq) => ({
    question: faq.question.replace(
      /\?$/,
      ` in ${city.city}, ${state.stateId}?`
    ),
    answer: `${faq.answer} We proudly serve ${city.city}, ${state.stateName} and the surrounding ${city.county} County area.`,
  }))

  const faqJsonLd = faqSchema(cityFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: state.stateName, href: `/${state.stateSlug}` },
            {
              label: city.city,
              href: `/${state.stateSlug}/${city.citySlug}`,
            },
            { label: service.shortName },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <MapPin className="h-4 w-4" />
            <span>
              {city.city}, {city.county} County, {state.stateName}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            {service.name} in{' '}
            <span className="text-brand-600">
              {city.city}, {state.stateId}
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl">
            {service.emergencyDescription} Serving {city.city},{' '}
            {state.stateName} and the greater {city.county} County area with
            rapid emergency response 24 hours a day, 7 days a week.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href={SITE_PHONE_HREF} className="btn-emergency text-lg">
              <Phone className="h-5 w-5" />
              Call Now: {SITE_PHONE}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand-600" />
              30-60 Min Response in {city.city}
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-brand-600" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-brand-600" />
              Upfront Pricing
            </span>
          </div>
        </div>

        {/* Service Details */}
        <section className="mb-12">
          <h2 className="section-heading text-2xl mb-4">
            About {service.shortName} Services in {city.city}
          </h2>
          <div className="prose max-w-3xl text-gray-600">
            <p>
              When you face a {service.shortName.toLowerCase()} emergency in{' '}
              {city.city}, {state.stateName}, you need a professional you can
              trust to respond quickly. {getSiteName()} connects you with
              licensed, insured {service.shortName.toLowerCase()} professionals
              who are available around the clock to handle any emergency in the{' '}
              {city.city} area.
            </p>
            <p className="mt-4">{service.description}</p>
            <p className="mt-4">
              Our {service.shortName.toLowerCase()} technicians serving{' '}
              {city.city} and {city.county} County are background-checked,
              fully licensed, and carry the tools and parts needed to resolve
              most emergencies on the first visit. We provide transparent,
              upfront pricing with no hidden fees.
            </p>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-12 bg-gray-50 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            What to Expect When You Call for {service.shortName} Service in{' '}
            {city.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Immediate phone response — no voicemail',
              `Dispatch of nearest ${service.shortName.toLowerCase()} to ${city.city}`,
              'Arrival within 30-60 minutes',
              'Thorough assessment of the problem',
              'Upfront pricing before work begins',
              'Professional, efficient repair',
              'Clean-up and final walkthrough',
              'Written warranty on all work',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Service Area Info */}
        <section className="mb-12">
          <h2 className="section-heading text-2xl mb-4">
            {service.shortName} Service Area in {city.city}, {state.stateId}
          </h2>
          <div className="bg-brand-50 rounded-xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-brand-700 font-medium">City</div>
                <div className="font-semibold text-gray-900">{city.city}</div>
              </div>
              <div>
                <div className="text-brand-700 font-medium">County</div>
                <div className="font-semibold text-gray-900">{city.county}</div>
              </div>
              <div>
                <div className="text-brand-700 font-medium">State</div>
                <div className="font-semibold text-gray-900">
                  {state.stateName}
                </div>
              </div>
              <div>
                <div className="text-brand-700 font-medium">ZIP Codes</div>
                <div className="font-semibold text-gray-900">
                  {city.zips.slice(0, 5).join(', ')}
                  {city.zips.length > 5 && ` +${city.zips.length - 5} more`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection
          faqs={cityFaqs}
          title={`${service.shortName} FAQs for ${city.city}, ${state.stateId}`}
        />

        {/* Other Services in this City */}
        <section className="mb-12">
          <h2 className="section-heading text-2xl mb-6">
            Other Emergency Services in {city.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${state.stateSlug}/${city.citySlug}/${s.slug}`}
                className="card group flex items-center justify-between py-3"
              >
                <span className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
                  {s.name}
                </span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Same Service in Nearby Cities */}
        {nearby.length > 0 && (
          <section className="mb-12">
            <h2 className="section-heading text-2xl mb-6">
              {service.shortName} Services in Nearby Cities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {nearby.map((nc) => (
                <Link
                  key={nc.citySlug}
                  href={`/${state.stateSlug}/${nc.citySlug}/${service.slug}`}
                  className="card group flex items-center justify-between py-3"
                >
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
                      {nc.city}, {state.stateId}
                    </div>
                    <div className="text-xs text-gray-500">
                      {service.shortName}
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
        title={`Need an ${service.shortName} in ${city.city} Now?`}
        subtitle={`Licensed ${service.shortName.toLowerCase()} professionals available 24/7 in ${city.city}, ${state.stateName}.`}
      />
    </>
  )
}
