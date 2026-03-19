import type { Metadata } from 'next'
import { Shield, Clock, Star, CheckCircle, Users, Phone } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CTASection } from '@/components/CTASection'
import { canonicalUrl, getSiteName } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Us — Licensed 24/7 Emergency Home Service Professionals',
  description: `${getSiteName()} connects homeowners with licensed, insured emergency service professionals 24/7. Learn about our mission, values, and commitment to fast, reliable service.`,
  alternates: { canonical: canonicalUrl('/about') },
}

export default function AboutPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'About' }]} />

        <div className="max-w-3xl mb-16">
          <h1 className="section-heading mb-6">
            About {getSiteName()}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {getSiteName()} was founded with a simple mission: make it fast and
            easy to find trusted, licensed emergency home service professionals
            — any time of day, any day of the year, anywhere in the United
            States.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            When a pipe bursts at 2 AM or your power goes out during a storm,
            you should not have to waste precious time searching for a reliable
            professional. We have built a nationwide network of vetted,
            licensed, and insured service providers who are ready to respond to
            your emergency within minutes.
          </p>
          <p className="text-lg text-gray-600">
            Every professional in our network is fully licensed, bonded, and
            insured. We verify credentials, run background checks, and monitor
            customer satisfaction to ensure you always receive the highest
            quality service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Clock,
              title: '24/7 Availability',
              description:
                'Our dispatch center operates around the clock. Emergency technicians are always on standby to respond to your call.',
            },
            {
              icon: Shield,
              title: 'Verified Professionals',
              description:
                'Every technician undergoes license verification, insurance confirmation, and a thorough background check.',
            },
            {
              icon: Star,
              title: 'Satisfaction Guarantee',
              description:
                'We stand behind every job. If the work does not meet your expectations, we will make it right.',
            },
            {
              icon: CheckCircle,
              title: 'Upfront Pricing',
              description:
                'No surprises on your bill. We provide clear pricing before any work begins so you can make informed decisions.',
            },
            {
              icon: Users,
              title: 'Nationwide Network',
              description:
                'With professionals in every state and major city, we ensure fast response times no matter where you are.',
            },
            {
              icon: Phone,
              title: 'One Call Does It All',
              description:
                'Whether you need an electrician, plumber, locksmith, or any other emergency service — one number connects you.',
            },
          ].map((item, i) => (
            <div key={i} className="card">
              <div className="p-3 rounded-lg bg-brand-50 text-brand-600 w-fit mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </>
  )
}
