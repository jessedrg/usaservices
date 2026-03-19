import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { canonicalUrl, getSiteName } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of service for ${getSiteName()}. Read our terms and conditions for using our emergency home service platform.`,
  alternates: { canonical: canonicalUrl('/terms') },
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <h1 className="section-heading mb-8">Terms of Service</h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <p>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Acceptance of Terms</h2>
        <p>
          By accessing and using {getSiteName()}, you agree to be bound by these Terms of Service
          and all applicable laws and regulations.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Service Description</h2>
        <p>
          {getSiteName()} is a platform that connects homeowners with licensed, insured emergency
          home service professionals. We facilitate the connection but the service is performed by
          independent, licensed professionals.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Disclaimer</h2>
        <p>
          While we verify the credentials and insurance of professionals in our network, the
          actual service work is performed by independent contractors. We are not liable for
          the quality of work performed by service professionals.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Contact</h2>
        <p>
          For questions about these terms, contact us at{' '}
          <a href="mailto:legal@fastservus.com" className="text-brand-600 hover:underline">
            legal@fastservus.com
          </a>.
        </p>
      </div>
    </div>
  )
}
