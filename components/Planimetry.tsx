export default function Planimetry({ variant = 'A' }: { variant?: 'A' | 'B' | 'C' }) {
  return (
    <div className="w-full h-full relative">
      <svg
        viewBox="0 0 500 400"
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
  // Room: x=40, y=30, width=400, height=280 → bottom wall at y=310
  // Kitchen: y=30 to y=90 (60px)
  // Dining: y=90 to y=310 (220px)
  // Tables r=18, chairs at r=27 → total footprint ≈ 54px per table
  // 3 rows: y=140, y=200, y=260 — chairs max at y=260+27=287 < 310 ✓
  // Columns: cx=150, cx=290 — chairs max at x=290+27=317 < 440 ✓

  const tables: [number, number][] = [
    [150, 140], [290, 140],
    [150, 205], [290, 205],
    [150, 268], [290, 268],
  ]
  const chairR = 27

  return (
    <>
      {/* Outer walls */}
      <rect x="40" y="30" width="400" height="280" fill="none" stroke="#F0EAD6" strokeWidth="1.5" opacity="0.7"/>

      {/* Kitchen — left 2/3 of back wall */}
      <rect x="40" y="30" width="268" height="60" fill="#111" stroke="#F0EAD6" strokeWidth="1" opacity="0.8"/>
      <text x="174" y="56" textAnchor="middle" fontSize="8" fill="#F0EAD6" fontFamily="monospace" opacity="0.6" letterSpacing="1">KITCHEN</text>
      <text x="174" y="68" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3">OPEN</text>

      {/* Steam counter — right 1/3 of back wall */}
      <rect x="308" y="30" width="132" height="60" fill="#0d0d0d" stroke="#39FF85" strokeWidth="0.8" opacity="0.9"/>
      <text x="374" y="57" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.9" letterSpacing="1">STEAM</text>
      <text x="374" y="68" textAnchor="middle" fontSize="6" fill="#39FF85" fontFamily="monospace" opacity="0.6">COUNTER</text>

      {/* Service pass line */}
      <line x1="40" y1="90" x2="440" y2="90" stroke="#F0EAD6" strokeWidth="0.4" opacity="0.2" strokeDasharray="5,4"/>

      {/* 6 round tables — 2 col × 3 row, all fully inside walls */}
      {tables.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={18} fill="none" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.55"/>
          {([0, 90, 180, 270] as number[]).map((deg, j) => {
            const rad = (deg * Math.PI) / 180
            return (
              <rect
                key={j}
                x={cx + Math.cos(rad) * chairR - 6}
                y={cy + Math.sin(rad) * chairR - 4}
                width={12} height={8}
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

      {/* Entry — bottom wall center gap, well clear of table 06 */}
      <line x1="195" y1="310" x2="285" y2="310" stroke="#0A0A0A" strokeWidth="4"/>
      <path d="M 195 310 Q 195 336 240 336 Q 285 336 285 310"
        fill="none" stroke="#F0EAD6" strokeWidth="0.7" strokeDasharray="3,2" opacity="0.4"/>
      <text x="240" y="330" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.7">ENTRY</text>

      {/* Dimension: width */}
      <line x1="40" y1="350" x2="440" y2="350" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="40" y1="344" x2="40" y2="356" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <line x1="440" y1="344" x2="440" y2="356" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <text x="240" y="364" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8">10.0 M</text>

      {/* Dimension: height */}
      <line x1="454" y1="30" x2="454" y2="310" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="448" y1="30" x2="460" y2="30" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <line x1="448" y1="310" x2="460" y2="310" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <text x="472" y="173" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8" transform="rotate(90 472 173)">7.0 M</text>

      <text x="40" y="20" fontSize="9" fill="#F0EAD6" fontFamily="monospace" opacity="0.8" letterSpacing="2">VARIANT B — SOCIAL</text>
      <text x="40" y="378" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">SCALE 1:50 · 6 TABLES · 4 SEATS EACH · 70 SQM</text>
      <text x="40" y="388" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25">老板不在 · SHAM SHUI PO · HK</text>
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
