import Link from 'next/link'
import Image from 'next/image'
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
      <section className="relative bg-gradient-to-br from-gray-900 via-brand-950 to-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available 24/7 - Technicians On Standby
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-white">Emergency Home</span>
              <br />
              <span className="text-white">Services </span>
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">When You</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Need Them Most</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
              Licensed electricians, plumbers, HVAC technicians, locksmiths
              and more - dispatched to your door in 30-60 minutes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_PHONE_HREF}
                className="btn-emergency text-lg px-8 py-4 shadow-2xl shadow-emergency-500/30"
              >
                <Phone className="h-5 w-5" />
                Call Now: {SITE_PHONE}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                  <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                </span>
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                  <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                </span>
                Upfront Pricing
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                  <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                </span>
                Satisfaction Guaranteed
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                  <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                </span>
                Background Checked
              </span>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/electrician.jpg"
                alt="Licensed emergency electrician at work"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 mt-10">
              <Image
                src="/images/plumber.jpg"
                alt="Professional emergency plumber"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-gray-500 mt-2 font-medium">Always Available</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">30 min</div>
              <div className="text-sm text-gray-500 mt-2 font-medium">Avg. Response Time</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">50</div>
              <div className="text-sm text-gray-500 mt-2 font-medium">States Covered</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">27K+</div>
              <div className="text-sm text-gray-500 mt-2 font-medium">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="section-heading">Emergency Services We Provide</h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From electrical emergencies to burst pipes, our network of licensed
            professionals handles every urgent home service need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Simple Process</p>
            <h2 className="section-heading">How It Works</h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Getting emergency help is simple and fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
              <div key={item.step} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg shadow-brand-500/10 text-brand-600 mb-6 group-hover:shadow-xl group-hover:shadow-brand-500/20 transition-all duration-300">
                  <item.icon className="h-8 w-8" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Coverage Area</p>
          <h2 className="section-heading">Serving All 50 States</h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find emergency home services in your area. We cover every major city
            and town across the United States.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {states.map((state) => (
            <Link
              key={state.stateSlug}
              href={`/${state.stateSlug}`}
              className="card flex items-center justify-between group hover:border-brand-200"
            >
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {state.stateName}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {state.cityCount.toLocaleString()} cities
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
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
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Why Us</p>
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
              <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
