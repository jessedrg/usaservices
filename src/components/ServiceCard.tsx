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
    <Link href={href} className="card group block">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
          <IconComponent className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
