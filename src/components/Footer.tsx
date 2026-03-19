import Link from 'next/link'
import { Zap, Phone, Mail, MapPin } from 'lucide-react'
import { SERVICES } from '@/lib/services'
import { getSiteName } from '@/lib/seo'
import { SITE_PHONE, SITE_PHONE_HREF } from '@/lib/config'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-7 w-7 text-brand-400" />
              <span className="text-lg font-extrabold text-white">
                {getSiteName()}
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              24/7 emergency home services across the United States. Licensed,
              insured professionals ready when you need them most.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={SITE_PHONE_HREF}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {SITE_PHONE}
              </a>
              <a
                href="mailto:help@fastservus.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                help@fastservus.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Nationwide Service
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Emergency Services
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top States */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular States</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'California', slug: 'california' },
                { name: 'New York', slug: 'new-york' },
                { name: 'Florida', slug: 'florida' },
              ].map((state) => (
                <li key={state.slug}>
                  <Link
                    href={`/${state.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {state.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-white transition-colors"
                >
                  All Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {getSiteName()}. All rights
            reserved. Licensed, bonded & insured. Available 24/7 nationwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
