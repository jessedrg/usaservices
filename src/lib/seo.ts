const SITE_NAME = 'FastServ US'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fastservus.com'

export function getBaseUrl(): string {
  return SITE_URL
}

export function getSiteName(): string {
  return SITE_NAME
}

export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path}`
}

export function localBusinessSchema({
  name,
  description,
  city,
  state,
  url,
}: {
  name: string
  description: string
  city: string
  state: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: state,
      },
    },
    availableLanguage: 'English',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  }
}

export function serviceSchema({
  serviceName,
  description,
  city,
  state,
  url,
}: {
  serviceName: string
  description: string
  city: string
  state: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    url,
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: state,
      },
    },
    provider: {
      '@type': 'LocalBusiness',
      name: getSiteName(),
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceType: 'Emergency',
      availableLanguage: 'English',
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
