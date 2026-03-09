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
  // Clean rectangular room: 380×220px at 1:50 → ~9.5m × 5.5m
  // Kitchen + steam counter along back wall (top)
  // 3 pairs of round tables with central aisle
  // Entry at front-center

  const tables: [number, number][] = [
    [118, 158], [242, 158],   // row 1
    [118, 210], [242, 210],   // row 2
    [118, 262], [242, 262],   // row 3
  ]

  return (
    <>
      {/* Outer walls */}
      <rect x="40" y="36" width="380" height="230" fill="none" stroke="#F0EAD6" strokeWidth="1.5" opacity="0.7"/>

      {/* Kitchen + steam — back wall, full width, divided */}
      <rect x="40" y="36" width="260" height="60" fill="#111" stroke="#F0EAD6" strokeWidth="1" opacity="0.8"/>
      <text x="170" y="60" textAnchor="middle" fontSize="8" fill="#F0EAD6" fontFamily="monospace" opacity="0.6" letterSpacing="1">KITCHEN</text>
      <text x="170" y="72" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3">OPEN</text>

      <rect x="300" y="36" width="120" height="60" fill="#0d0d0d" stroke="#39FF85" strokeWidth="0.8" opacity="0.9"/>
      <text x="360" y="62" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.9" letterSpacing="1">STEAM</text>
      <text x="360" y="72" textAnchor="middle" fontSize="6" fill="#39FF85" fontFamily="monospace" opacity="0.6">COUNTER</text>

      {/* Pass-through opening between kitchen and dining */}
      <line x1="40" y1="96" x2="420" y2="96" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.25" strokeDasharray="4,4"/>

      {/* Toilet block — back-right corner */}
      <rect x="396" y="36" width="24" height="60" fill="#0a0a0a" stroke="#F0EAD6" strokeWidth="0.6" opacity="0.4"/>
      <text x="408" y="70" textAnchor="middle" fontSize="5" fill="#F0EAD6" fontFamily="monospace" opacity="0.3" transform="rotate(-90 408 70)">WC</text>

      {/* Central aisle — dashed guide */}
      <line x1="180" y1="100" x2="180" y2="260" stroke="#F0EAD6" strokeWidth="0.3" opacity="0.1" strokeDasharray="6,6"/>

      {/* 6 round tables — 2 columns × 3 rows */}
      {tables.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={18} fill="none" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.55"/>
          {/* 4 chairs */}
          {([0, 90, 180, 270] as number[]).map((deg, j) => {
            const rad = (deg * Math.PI) / 180
            return (
              <rect
                key={j}
                x={cx + Math.cos(rad) * 24 - 5}
                y={cy + Math.sin(rad) * 24 - 4}
                width={10} height={8}
                rx={1}
                fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"
              />
            )
          })}
          <text x={cx} y={cy + 3} textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3">
            {String(i + 1).padStart(2, '0')}
          </text>
        </g>
      ))}

      {/* Entry — front wall center */}
      <line x1="195" y1="266" x2="265" y2="266" stroke="#0A0A0A" strokeWidth="3.5"/>
      {/* Door swing arc */}
      <path d="M 195 266 Q 195 296 230 296 Q 265 296 265 266"
        fill="none" stroke="#F0EAD6" strokeWidth="0.7" strokeDasharray="3,2" opacity="0.45"/>
      <text x="230" y="285" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.7">ENTRY</text>

      {/* Dimension lines */}
      <line x1="40" y1="280" x2="420" y2="280" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="40" y1="275" x2="40" y2="285" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="420" y1="275" x2="420" y2="285" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <text x="230" y="293" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8">9.5 M</text>

      <line x1="432" y1="36" x2="432" y2="266" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="427" y1="36" x2="437" y2="36" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="427" y1="266" x2="437" y2="266" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <text x="450" y="154" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8" transform="rotate(90 450 154)">5.75 M</text>

      {/* Labels */}
      <text x="40" y="26" fontSize="9" fill="#F0EAD6" fontFamily="monospace" opacity="0.8" letterSpacing="2">VARIANT B — SOCIAL</text>
      <text x="40" y="312" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">SCALE 1:50 · 6 TABLES · 4 SEATS EACH · 54 SQM</text>
      <text x="40" y="322" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">老板不在 · SHAM SHUI PO · HK</text>
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
