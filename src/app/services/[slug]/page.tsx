import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { SERVICES, getServiceBySlug, getAllServiceSlugs } from '@/lib/services'
import { getEnabledStates } from '@/lib/cities'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection'
import Image from 'next/image'
import { canonicalUrl, faqSchema, breadcrumbSchema, getBaseUrl, getSiteName } from '@/lib/seo'
import { SITE_PHONE_HREF } from '@/lib/config'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  const url = canonicalUrl(`/services/${service.slug}`)
  return {
    title: `${service.metaTitle} — 24/7 Nationwide Service`,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.metaTitle} — 24/7 Nationwide Service`,
      description: service.metaDescription,
      url,
      siteName: getSiteName(),
      images: [{ url: service.ogImage, width: 1200, height: 630, alt: service.name }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.ogImage],
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const states = getEnabledStates()

  const faqJsonLd = faqSchema(service.faqs)
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: getBaseUrl() },
    { name: 'Services', url: `${getBaseUrl()}/services` },
    { name: service.name, url: `${getBaseUrl()}/services/${service.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: service.name },
          ]}
        />

        {/* Hero */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              {service.name}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {service.emergencyDescription}
            </p>
            <div className="mt-6">
              <a href={SITE_PHONE_HREF} className="btn-emergency">
                Call Now for {service.shortName} Service
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={service.image}
              alt={`${service.name} — licensed professional at work`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Description */}
        <section className="prose prose-lg max-w-3xl mb-12">
          <h2 className="section-heading text-2xl">
            About Our {service.name} Service
          </h2>
          <p className="text-gray-600 mt-4">{service.description}</p>
        </section>

        {/* Find by State */}
        <section className="mb-12">
          <h2 className="section-heading text-2xl mb-6">
            Find {service.shortName} Services by State
          </h2>
          <p className="text-gray-600 mb-6">
            Select your state to find {service.shortName.toLowerCase()} services
            in your city. Each location page provides specific service details
            and direct contact information.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {states.map((state) => (
              <Link
                key={state.stateSlug}
                href={`/${state.stateSlug}`}
                className="card flex items-center justify-between group py-3"
              >
                <span className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
                  {state.stateName}
                </span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 transition-colors" />
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/locations"
              className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center gap-1"
            >
              View all states <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Other Services */}
        <section className="mb-12">
          <h2 className="section-heading text-2xl mb-6">
            Other Emergency Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.slug !== service.slug)
              .slice(0, 6)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card group flex items-center gap-3"
                >
                  <span className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
                    {s.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 transition-colors ml-auto" />
                </Link>
              ))}
          </div>
        </section>

        <FAQSection faqs={service.faqs} />
      </div>

      <CTASection
        title={`Need an ${service.shortName} Right Now?`}
        subtitle={`Our licensed ${service.shortName.toLowerCase()} professionals are available 24/7 with fast response times.`}
      />
    </>
  )
}
