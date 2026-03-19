import Link from 'next/link'
import { Phone, Clock, Shield, Star, CheckCircle, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/services'
import { getEnabledStates } from '@/lib/cities'
import { ServiceCard } from '@/components/ServiceCard'
import { CTASection } from '@/components/CTASection'
import { SITE_PHONE, SITE_PHONE_HREF } from '@/lib/config'

export default function HomePage() {
  const states = getEnabledStates()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emergency-600/20 text-emergency-200 border border-emergency-500/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency-500" />
              </span>
              Available 24/7 — Emergency Technicians On Standby
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Emergency Home Services{' '}
              <span className="text-brand-300">When You Need Them Most</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-200 max-w-2xl">
              Licensed electricians, plumbers, HVAC technicians, locksmiths
              and more — dispatched to your door in 30-60 minutes. Serving
              every city across the United States.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_PHONE_HREF}
                className="btn-emergency text-lg px-8 py-4"
              >
                <Phone className="h-5 w-5" />
                Call Now: {SITE_PHONE}
              </a>
              <Link
                href="/services"
                className="btn-primary bg-white/10 hover:bg-white/20 border border-white/20 text-lg px-8 py-4"
              >
                View All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-brand-200">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Upfront Pricing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Satisfaction Guaranteed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Background Checked
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-brand-600">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-brand-600">30 min</div>
              <div className="text-sm text-gray-600 mt-1">Avg. Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-brand-600">50</div>
              <div className="text-sm text-gray-600 mt-1">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-brand-600">27K+</div>
              <div className="text-sm text-gray-600 mt-1">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="section-heading">Emergency Services We Provide</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From electrical emergencies to burst pipes, our network of licensed
            professionals handles every urgent home service need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              name={service.name}
              description={service.description}
              icon={service.icon}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Getting emergency help is simple and fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Call or Request Online',
                description:
                  'Call our 24/7 hotline or submit a request. Describe your emergency and location.',
                icon: Phone,
              },
              {
                step: '2',
                title: 'Fast Dispatch',
                description:
                  'We dispatch the nearest available licensed professional to your location within minutes.',
                icon: Clock,
              },
              {
                step: '3',
                title: 'Problem Solved',
                description:
                  'Our technician arrives, provides upfront pricing, and resolves your emergency efficiently.',
                icon: Shield,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 text-brand-600 mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="text-sm font-bold text-brand-600 mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="section-heading">Serving All 50 States</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find emergency home services in your area. We cover every major city
            and town across the United States.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {states.map((state) => (
            <Link
              key={state.stateSlug}
              href={`/${state.stateSlug}`}
              className="card flex items-center justify-between group"
            >
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {state.stateName}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {state.cityCount.toLocaleString()} cities
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 transition-colors" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/locations"
            className="btn-primary"
          >
            View All Locations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose FastServ US</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Rapid Response Times',
                description:
                  'Our technicians are strategically located to ensure the fastest possible response to your emergency, typically 30-60 minutes.',
              },
              {
                icon: Shield,
                title: 'Licensed & Insured',
                description:
                  'Every professional in our network is fully licensed, bonded, and insured. We verify credentials and run background checks.',
              },
              {
                icon: Star,
                title: 'Upfront Pricing',
                description:
                  'No surprises. We provide clear, upfront pricing before any work begins. You approve the cost before we start.',
              },
              {
                icon: CheckCircle,
                title: 'Satisfaction Guaranteed',
                description:
                  'We stand behind our work. If you are not completely satisfied, we will make it right at no additional cost.',
              },
              {
                icon: Phone,
                title: '24/7 Availability',
                description:
                  'Emergencies do not follow a schedule. Our dispatchers and technicians are available around the clock, every day of the year.',
              },
              {
                icon: Star,
                title: 'Nationwide Coverage',
                description:
                  'With professionals in every state and major city, help is always nearby no matter where you are in the US.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-brand-50 text-brand-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
