import Image from 'next/image'

export function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <Image
      src="/images/logo.jpg"
      alt="FastServ US Logo"
      width={40}
      height={40}
      className={`${className} rounded-lg object-contain`}
    />
  )
}
