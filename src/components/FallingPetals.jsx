import { useMemo } from 'react'

// Colorful drifting flower petals across the whole page — bright & festive.
export default function FallingPetals({ count = 22 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const left = (i * 89) % 100
        const delay = (i * 1.3) % 14
        const duration = 10 + ((i * 3) % 11)
        const size = 12 + ((i * 5) % 14)
        const hue = i % 5
        return { id: i, left, delay, duration, size, hue }
      }),
    [count],
  )

  // On the dark theme these were warm GOLDS, chosen to glow against emerald.
  // On cream that logic inverts completely: pale warm petals are invisible
  // (gold on #FDFBF7 is 1.4–2.3:1), so the petals must now be DARKER than the
  // page to read at all. These are sages and a muted rose — soft enough to stay
  // ambient, dark enough to be seen drifting.
  const colors = ['#4E6450', '#33452F', '#7E9080', '#5F7256', '#8C6A72']

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-40px]"
          style={{
            left: `${p.left}%`,
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            {/* five-petal flower for a fuller, festive look */}
            {Array.from({ length: 5 }).map((_, k) => (
              <ellipse
                key={k}
                cx="10"
                cy="4.5"
                rx="2.6"
                ry="4.5"
                fill={colors[p.hue]}
                opacity="0.8"
                transform={`rotate(${k * 72} 10 10)`}
              />
            ))}
            {/* flower centre — was pale gold, which vanished on cream */}
            <circle cx="10" cy="10" r="2" fill="#243021" />
          </svg>
        </span>
      ))}
    </div>
  )
}
