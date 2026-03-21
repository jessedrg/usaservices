export function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="#1e40af" />
      <path
        d="M18.5 4L8 18h7l-1.5 10L24 14h-7l1.5-10z"
        fill="#fbbf24"
        stroke="#fbbf24"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}
