import Link from 'next/link'
import {
  Zap,
  Droplets,
  Thermometer,
  Lock,
  DoorOpen,
  Refrigerator,
  Home,
  Square,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Droplets,
  Thermometer,
  Lock,
  DoorOpen,
  Refrigerator,
  Home,
  Square,
}

interface ServiceCardProps {
  slug: string
  name: string
  description: string
  icon: string
  href: string
}

export function ServiceCard({
  slug,
  name,
  description,
  icon,
  href,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Zap

  return (
    <Link href={href} className="card group block hover:border-brand-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-start gap-4">
        <div className="flex-shrink-0 p-3.5 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 group-hover:from-brand-600 group-hover:to-brand-700 group-hover:text-white transition-all duration-300 shadow-sm">
          <IconComponent className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
            {name}
          </h3>
          <p className="mt-1.5 text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
