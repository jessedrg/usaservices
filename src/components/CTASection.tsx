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
    <section className="relative bg-gradient-to-br from-gray-900 via-brand-950 to-brand-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-600/20 via-transparent to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">{title}</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href={SITE_PHONE_HREF} className="btn-emergency text-lg px-10 py-5 shadow-2xl shadow-emergency-500/30">
            <Phone className="h-5 w-5" />
            Call Now: {SITE_PHONE}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/10">
            <Clock className="h-5 w-5 text-amber-400" />
            <span className="font-medium">30-60 Min Response</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/10">
            <Shield className="h-5 w-5 text-amber-400" />
            <span className="font-medium">Licensed & Insured</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/10">
            <Star className="h-5 w-5 text-amber-400" />
            <span className="font-medium">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
