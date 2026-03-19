import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { canonicalUrl, getSiteName } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${getSiteName()}. Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: canonicalUrl('/privacy') },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <h1 className="section-heading mb-8">Privacy Policy</h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <p>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Information We Collect</h2>
        <p>
          When you use {getSiteName()}, we may collect personal information such as your name,
          phone number, email address, and service location to connect you with appropriate
          service professionals in your area.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">How We Use Your Information</h2>
        <p>
          We use the information we collect to match you with qualified, licensed service
          professionals in your area, process service requests, communicate with you about
          your service, and improve our platform.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Information Sharing</h2>
        <p>
          We share your service request information with qualified service professionals in your
          area to fulfill your request. We do not sell your personal information to third parties.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Contact Us</h2>
        <p>
          If you have questions about this privacy policy, please contact us at{' '}
          <a href="mailto:privacy@fastservus.com" className="text-brand-600 hover:underline">
            privacy@fastservus.com
          </a>.
        </p>
      </div>
    </div>
  )
}
