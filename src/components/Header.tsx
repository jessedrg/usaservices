'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { getSiteName } from '@/lib/seo'
import { SITE_PHONE, SITE_PHONE_HREF } from '@/lib/config'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Emergency top bar */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 text-white text-center py-2.5 px-4 text-sm font-medium">
        <div className="flex items-center justify-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-brand-200">24/7 Emergency Services Available</span>
          <span className="hidden sm:inline text-brand-400">|</span>
          <a
            href={SITE_PHONE_HREF}
            className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-300 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE_PHONE}
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-extrabold text-gray-900">
              {getSiteName()}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/services"
              className="px-4 py-2 text-gray-600 hover:text-brand-600 hover:bg-brand-50 font-medium transition-all rounded-lg"
            >
              Services
            </Link>
            <Link
              href="/locations"
              className="px-4 py-2 text-gray-600 hover:text-brand-600 hover:bg-brand-50 font-medium transition-all rounded-lg"
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-gray-600 hover:text-brand-600 hover:bg-brand-50 font-medium transition-all rounded-lg"
            >
              About
            </Link>
            <a href={SITE_PHONE_HREF} className="btn-emergency text-sm py-2.5 px-5 ml-3">
              <Phone className="h-4 w-4" />
              Get Help Now
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
