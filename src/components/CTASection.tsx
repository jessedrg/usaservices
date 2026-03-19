import { Phone, Clock, Shield, Star } from 'lucide-react'
import { SITE_PHONE, SITE_PHONE_HREF } from '@/lib/config'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export function CTASection({
  title = 'Need Emergency Service Right Now?',
  subtitle = 'Our licensed professionals are standing by 24/7. Fast response times guaranteed.',
}: CTASectionProps) {
  return (
    <section className="bg-brand-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{title}</h2>
        <p className="text-lg text-brand-200 mb-8">{subtitle}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href={SITE_PHONE_HREF} className="btn-emergency text-lg px-8 py-4">
            <Phone className="h-5 w-5" />
            Call Now: {SITE_PHONE}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-brand-300" />
            <span>30-60 Min Response</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-brand-300" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Star className="h-5 w-5 text-brand-300" />
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
