type Props = { text: string }

export function CircularBadge({ text }: Props) {
  // Accessible decorative badge: role="img" with aria-hidden
  return (
    <div className="relative" role="img" aria-hidden="true">
      <svg viewBox="0 0 200 200" width="160" height="160" className="animate-spin-slow">
        <defs>
          <path id="circlePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
        </defs>
        <circle cx="100" cy="100" r="78" fill="var(--color-background)" stroke="var(--color-border)" />
        <text fontSize="16" fontWeight="600" fill="currentColor" className="text-primary">
          <textPath xlinkHref="#circlePath">{text}</textPath>
        </text>
      </svg>
      <div className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
    </div>
  )
}
