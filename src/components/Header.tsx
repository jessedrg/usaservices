'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X, Zap } from 'lucide-react'
import { getSiteName } from '@/lib/seo'
import { SITE_PHONE, SITE_PHONE_HREF } from '@/lib/config'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Emergency top bar */}
      <div className="bg-emergency-600 text-white text-center py-2 px-4 text-sm font-semibold">
        <div className="flex items-center justify-center gap-2">
          <Phone className="h-4 w-4" />
          <span>24/7 Emergency Services — Fast Response Guaranteed</span>
          <a
            href={SITE_PHONE_HREF}
            className="underline hover:no-underline ml-2"
          >
            Call Now: {SITE_PHONE}
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-brand-600" />
            <span className="text-xl font-extrabold text-gray-900">
              {getSiteName()}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/services"
              className="text-gray-600 hover:text-brand-600 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/locations"
              className="text-gray-600 hover:text-brand-600 font-medium transition-colors"
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-brand-600 font-medium transition-colors"
            >
              About
            </Link>
            <a href={SITE_PHONE_HREF} className="btn-emergency text-sm py-2">
              <Phone className="h-4 w-4" />
              Emergency Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="/services"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/locations"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <a
                href={SITE_PHONE_HREF}
                className="btn-emergency mx-4 text-sm py-2"
              >
                <Phone className="h-4 w-4" />
                Emergency Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
