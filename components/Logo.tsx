interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 28, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Frame */}
      <path
        d="M20 20 H160 V160 H20 Z"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Inner F vertical stroke */}
      <path
        d="M90 20 V160"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinejoin="miter"
      />
      {/* Inner F mid-arm */}
      <path
        d="M90 90 H130"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinejoin="miter"
      />
    </svg>
  )
}
