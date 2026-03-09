export default function Planimetry({ variant = 'A' }: { variant?: 'A' | 'B' | 'C' }) {
  return (
    <div className="w-full h-full relative">
      <svg
        viewBox="0 0 500 380"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <pattern id="floor-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1a2a1a" strokeWidth="0.4"/>
          </pattern>
        </defs>

        {/* Grid background */}
        <rect width="500" height="380" fill="url(#floor-grid)"/>

        {variant === 'A' && <VariantA />}
        {variant === 'B' && <VariantB />}
        {variant === 'C' && <VariantC />}
      </svg>
    </div>
  )
}

function VariantA() {
  return (
    <>
      {/* Outer walls */}
      <rect x="40" y="30" width="320" height="220" fill="none" stroke="#F0EAD6" strokeWidth="1.5" opacity="0.7"/>

      {/* Entry */}
      <line x1="160" y1="250" x2="240" y2="250" stroke="#0A0A0A" strokeWidth="3"/>
      <path d="M 160 250 Q 160 270 200 270 Q 240 270 240 250" fill="none" stroke="#F0EAD6" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.5"/>
      <text x="200" y="265" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.8">ENTRY</text>

      {/* Kitchen (back) */}
      <rect x="220" y="30" width="140" height="90" fill="#111" stroke="#F0EAD6" strokeWidth="1" opacity="0.8"/>
      <text x="290" y="72" textAnchor="middle" fontSize="8" fill="#F0EAD6" fontFamily="monospace" opacity="0.6" letterSpacing="1">KITCHEN</text>
      <text x="290" y="83" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3">OPEN</text>

      {/* Steam counter */}
      <rect x="220" y="120" width="140" height="30" fill="#0d0d0d" stroke="#39FF85" strokeWidth="0.8" opacity="0.9"/>
      <text x="290" y="138" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.8" letterSpacing="1">STEAM COUNTER</text>

      {/* 6 tables — dining area */}
      {[
        [70, 70], [160, 70], [70, 145], [160, 145],
        [70, 200], [155, 200]
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width={50} height={35} fill="none" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.5"/>
          {/* Chairs top */}
          <rect x={x + 8} y={y - 8} width={12} height={7} fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"/>
          <rect x={x + 28} y={y - 8} width={12} height={7} fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"/>
          {/* Chairs bottom */}
          <rect x={x + 8} y={y + 36} width={12} height={7} fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"/>
          <rect x={x + 28} y={y + 36} width={12} height={7} fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"/>
          <text x={x + 25} y={y + 21} textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3">{String(i + 1).padStart(2, '0')}</text>
        </g>
      ))}

      {/* Toilet block */}
      <rect x="40" y="170" width="25" height="50" fill="#0d0d0d" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.4"/>
      <text x="52" y="197" textAnchor="middle" fontSize="5" fill="#F0EAD6" fontFamily="monospace" opacity="0.3" transform="rotate(-90 52 197)">WC</text>

      {/* Dimensions */}
      <line x1="40" y1="265" x2="360" y2="265" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="40" y1="260" x2="40" y2="270" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="360" y1="260" x2="360" y2="270" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <text x="200" y="278" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8">8.0 M</text>

      <line x1="375" y1="30" x2="375" y2="250" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="370" y1="30" x2="380" y2="30" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="370" y1="250" x2="380" y2="250" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <text x="392" y="143" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8" transform="rotate(90 392 143)">5.5 M</text>

      {/* Labels */}
      <text x="40" y="20" fontSize="9" fill="#F0EAD6" fontFamily="monospace" opacity="0.8" letterSpacing="2">VARIANT A — LINEAR</text>
      <text x="40" y="305" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">SCALE 1:50 · 6 COVERS · 45 SQM</text>
      <text x="40" y="315" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">老板不在 · SHAM SHUI PO · HK</text>
    </>
  )
}

function VariantB() {
  return (
    <>
      {/* L-shaped space */}
      <path d="M 40 30 L 300 30 L 300 150 L 220 150 L 220 250 L 40 250 Z"
        fill="none" stroke="#F0EAD6" strokeWidth="1.5" opacity="0.7"/>

      {/* Kitchen corner */}
      <rect x="200" y="30" width="100" height="70" fill="#111" stroke="#F0EAD6" strokeWidth="1" opacity="0.8"/>
      <text x="250" y="67" textAnchor="middle" fontSize="8" fill="#F0EAD6" fontFamily="monospace" opacity="0.6" letterSpacing="1">KITCHEN</text>

      {/* Bar counter — L shape */}
      <rect x="40" y="200" width="180" height="25" fill="#0d0d0d" stroke="#39FF85" strokeWidth="0.8" opacity="0.9"/>
      <text x="130" y="215" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.8">STEAM BAR</text>

      {/* Tables — round this time */}
      {[
        [90, 100], [170, 100], [90, 170],
        [165, 160], [100, 55], [170, 55]
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={22} fill="none" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.5"/>
          {/* 4 chairs around */}
          {[0, 90, 180, 270].map((deg, j) => {
            const rad = (deg * Math.PI) / 180
            const cx2 = cx + Math.cos(rad) * 30
            const cy2 = cy + Math.sin(rad) * 30
            return <circle key={j} cx={cx2} cy={cy2} r={5} fill="none" stroke="#F0EAD6" strokeWidth="0.4" opacity="0.25"/>
          })}
          <text x={cx} y={cy + 3} textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3">{String(i + 1).padStart(2, '0')}</text>
        </g>
      ))}

      {/* Entry */}
      <text x="40" y="15" fontSize="9" fill="#F0EAD6" fontFamily="monospace" opacity="0.8" letterSpacing="2">VARIANT B — SOCIAL</text>
      <text x="40" y="305" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">SCALE 1:50 · 6 COVERS · 52 SQM · ROUND TABLES</text>
      <text x="40" y="315" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">老板不在 · SHAM SHUI PO · HK</text>
    </>
  )
}

function VariantC() {
  return (
    <>
      {/* Counter-only space, like a dim sum bar */}
      <rect x="40" y="60" width="340" height="200" fill="none" stroke="#F0EAD6" strokeWidth="1.5" opacity="0.7"/>

      {/* Long counter */}
      <rect x="60" y="100" width="300" height="40" fill="#111" stroke="#39FF85" strokeWidth="1" opacity="0.9"/>
      <text x="210" y="123" textAnchor="middle" fontSize="8" fill="#39FF85" fontFamily="monospace" opacity="0.9" letterSpacing="2">COUNTER — 12 SEATS</text>

      {/* Stools above counter */}
      {Array.from({ length: 12 }, (_, i) => (
        <circle key={i} cx={76 + i * 25} cy={87} r={8} fill="none" stroke="#F0EAD6" strokeWidth="0.6" opacity="0.4"/>
      ))}

      {/* Kitchen behind */}
      <rect x="60" y="140" width="300" height="100" fill="#0d0d0d" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.5"/>
      <text x="210" y="185" textAnchor="middle" fontSize="8" fill="#F0EAD6" fontFamily="monospace" opacity="0.5" letterSpacing="1">KITCHEN VISIBLE</text>
      <text x="210" y="198" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3">OPEN CONCEPT — STEAM STATIONS × 4</text>

      {/* Entrance */}
      <line x1="175" y1="260" x2="245" y2="260" stroke="#0A0A0A" strokeWidth="3"/>
      <path d="M 175 260 Q 175 280 210 280 Q 245 280 245 260" fill="none" stroke="#F0EAD6" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.5"/>

      {/* North arrow */}
      <text x="370" y="80" fontSize="14" fill="#F0EAD6" fontFamily="monospace" opacity="0.3">↑</text>
      <text x="373" y="92" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3">N</text>

      <text x="40" y="48" fontSize="9" fill="#F0EAD6" fontFamily="monospace" opacity="0.8" letterSpacing="2">VARIANT C — OMAKASE BAR</text>
      <text x="40" y="305" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">SCALE 1:50 · 12 SEATS · COUNTER ONLY · 38 SQM</text>
      <text x="40" y="315" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">老板不在 · SHAM SHUI PO · HK</text>
    </>
  )
}
