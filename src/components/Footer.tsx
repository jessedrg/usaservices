import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { SERVICES } from '@/lib/services'
import { getSiteName } from '@/lib/seo'
import { SITE_PHONE, SITE_PHONE_HREF } from '@/lib/config'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Logo className="h-9 w-9" />
              <span className="text-xl font-extrabold text-white">
                {getSiteName()}
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              24/7 emergency home services across the United States. Licensed,
              insured professionals ready when you need them most.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={SITE_PHONE_HREF}
                className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors"
              >
                <span className="p-1.5 rounded-lg bg-white/5">
                  <Phone className="h-4 w-4" />
                </span>
                {SITE_PHONE}
              </a>
              <a
                href="mailto:help@fastservus.com"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors"
              >
                <span className="p-1.5 rounded-lg bg-white/5">
                  <Mail className="h-4 w-4" />
                </span>
                help@fastservus.com
              </a>
              <span className="flex items-center gap-2.5 text-gray-400">
                <span className="p-1.5 rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4" />
                </span>
                Nationwide Service
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Emergency Services
            </h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top States */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Popular States</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'California', slug: 'california' },
                { name: 'New York', slug: 'new-york' },
                { name: 'Florida', slug: 'florida' },
              ].map((state) => (
                <li key={state.slug}>
                  <Link
                    href={`/${state.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {state.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  All Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-800/50 text-center text-sm text-gray-500 space-y-2">
          <p>
            &copy; {new Date().getFullYear()} {getSiteName()}. All rights
            reserved. Licensed, bonded & insured. Available 24/7 nationwide.
          </p>
          <p className="text-gray-600">
            This service is provided and operated by Deskwing LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
