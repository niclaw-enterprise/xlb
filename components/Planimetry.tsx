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
      <rect x="40" y="30" width="320" height="220" fill="none" stroke="#F0EAD6" strokeWidth="2" opacity="0.7"/>

      {/* Entry */}
      <line x1="160" y1="250" x2="240" y2="250" stroke="#0A0A0A" strokeWidth="3"/>
      <path d="M 160 250 Q 160 270 200 270 Q 240 270 240 250" fill="none" stroke="#F0EAD6" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.5"/>
      <line x1="240" y1="250" x2="200" y2="270" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.5"/>
      <text x="200" y="265" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.8" letterSpacing="2">ENTRY</text>

      {/* Kitchen (back) */}
      <rect x="220" y="30" width="140" height="90" fill="#111" stroke="#F0EAD6" strokeWidth="1" opacity="0.8"/>
      <text x="290" y="72" textAnchor="middle" fontSize="8" fill="#F0EAD6" fontFamily="monospace" opacity="0.6" letterSpacing="2">KITCHEN</text>
      <text x="290" y="83" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3" letterSpacing="2">OPEN</text>

      {/* Steam counter */}
      <rect x="220" y="120" width="140" height="30" fill="#0d0d0d" stroke="#39FF85" strokeWidth="0.8" opacity="0.9"/>
      <text x="290" y="138" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.8" letterSpacing="2">STEAM COUNTER</text>

      {/* 6 tables — dining area */}
      {[
        [70, 55],  [160, 55],
        [70, 128], [160, 128],
        [70, 200], [160, 200],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width={55} height={38} fill="none" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.5"/>
          <circle cx={x + 27.5} cy={y + 19} r={3} fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"/>
          {/* Chairs top */}
          <rect x={x + 10} y={y - 8} width={12} height={7} fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"/>
          <rect x={x + 33} y={y - 8} width={12} height={7} fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"/>
          {/* Chairs bottom */}
          <rect x={x + 10} y={y + 39} width={12} height={7} fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"/>
          <rect x={x + 33} y={y + 39} width={12} height={7} fill="none" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.3"/>
          <text x={x + 28} y={y + 22} textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3" letterSpacing="2">{String(i + 1).padStart(2, '0')}</text>
        </g>
      ))}

      {/* Centerline between table columns */}
      <line x1="190" y1="50" x2="190" y2="240" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.07" strokeDasharray="4 6"/>

      {/* Toilet block */}
      <rect x="40" y="170" width="25" height="50" fill="#0d0d0d" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.4"/>
      <text x="52" y="197" textAnchor="middle" fontSize="5" fill="#F0EAD6" fontFamily="monospace" opacity="0.3" transform="rotate(-90 52 197)" letterSpacing="2">WC</text>

      {/* Dimensions */}
      <line x1="40" y1="265" x2="360" y2="265" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="40" y1="260" x2="40" y2="270" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="36" y1="261" x2="44" y2="269" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="360" y1="260" x2="360" y2="270" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="356" y1="261" x2="364" y2="269" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <text x="200" y="278" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8" letterSpacing="2">8.0 M</text>

      <line x1="375" y1="30" x2="375" y2="250" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="370" y1="30" x2="380" y2="30" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="371" y1="26" x2="379" y2="34" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="370" y1="250" x2="380" y2="250" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="371" y1="246" x2="379" y2="254" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <text x="392" y="143" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8" transform="rotate(90 392 143)" letterSpacing="2">5.5 M</text>

      {/* Labels */}
      <text x="40" y="20" fontSize="9" fill="#F0EAD6" fontFamily="monospace" opacity="0.8" letterSpacing="2">VARIANT A — LINEAR</text>
      <text x="40" y="305" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25" letterSpacing="2">SCALE 1:50 · 6 COVERS · 45 SQM</text>
      <text x="40" y="315" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25" letterSpacing="2">老板不在 · SHAM SHUI PO · HK</text>
    </>
  )
}

function VariantB() {
  // Room: x=40, y=30, width=400, height=280 → bottom wall at y=310
  // Kitchen: y=30 to y=90 (60px)
  // Dining: y=90 to y=310 (220px)
  // Tables r=20, chairs at r=30 → total footprint ≈ 60px per table
  // 3 rows: y=143, y=208, y=272 — chairs max at y=272+30=302 < 310 ✓
  // Columns: cx=160, cx=320 — chairs max at x=320+30=350 < 440 ✓

  const tables: [number, number][] = [
    [160, 143], [320, 143],
    [160, 208], [320, 208],
    [160, 272], [320, 272],
  ]
  const chairR = 30

  return (
    <>
      {/* Outer walls */}
      <rect x="40" y="30" width="400" height="280" fill="none" stroke="#F0EAD6" strokeWidth="1.5" opacity="0.7"/>

      {/* Kitchen — left 2/3 of back wall */}
      <rect x="40" y="30" width="268" height="60" fill="#111" stroke="#F0EAD6" strokeWidth="1" opacity="0.8"/>
      <text x="174" y="56" textAnchor="middle" fontSize="8" fill="#F0EAD6" fontFamily="monospace" opacity="0.6" letterSpacing="2">KITCHEN</text>
      <text x="174" y="68" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3" letterSpacing="2">OPEN</text>

      {/* Steam counter — right 1/3 of back wall */}
      <rect x="308" y="30" width="132" height="60" fill="#0d0d0d" stroke="#39FF85" strokeWidth="0.8" opacity="0.9"/>
      <text x="374" y="57" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.9" letterSpacing="2">STEAM</text>
      <text x="374" y="68" textAnchor="middle" fontSize="6" fill="#39FF85" fontFamily="monospace" opacity="0.6" letterSpacing="2">COUNTER</text>
      {/* Steamer indicators */}
      <circle cx={341} cy={60} r={4} fill="none" stroke="#39FF85" strokeWidth="0.8" opacity="0.3"/>
      <circle cx={374} cy={60} r={4} fill="none" stroke="#39FF85" strokeWidth="0.8" opacity="0.3"/>
      <circle cx={407} cy={60} r={4} fill="none" stroke="#39FF85" strokeWidth="0.8" opacity="0.3"/>

      {/* Service pass line */}
      <line x1="40" y1="90" x2="440" y2="90" stroke="#F0EAD6" strokeWidth="0.4" opacity="0.2" strokeDasharray="5,4"/>

      {/* Centerline between table columns */}
      <line x1="240" y1="100" x2="240" y2="300" stroke="#F0EAD6" strokeWidth="0.5" opacity="0.07" strokeDasharray="4 6"/>

      {/* 6 round tables — 2 col × 3 row, all fully inside walls */}
      {tables.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={20} fill="none" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.55"/>
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
          <text x={cx} y={cy + 3} textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3" letterSpacing="2">
            {String(i + 1).padStart(2, '0')}
          </text>
        </g>
      ))}

      {/* Entry — bottom wall center gap, well clear of table 06 */}
      <line x1="195" y1="310" x2="285" y2="310" stroke="#0A0A0A" strokeWidth="4"/>
      <path d="M 195 310 Q 195 336 240 336 Q 285 336 285 310"
        fill="none" stroke="#F0EAD6" strokeWidth="0.7" strokeDasharray="3,2" opacity="0.4"/>
      <text x="240" y="330" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.7" letterSpacing="2">ENTRY</text>

      {/* Dimension: width */}
      <line x1="40" y1="350" x2="440" y2="350" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="40" y1="344" x2="40" y2="356" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <line x1="440" y1="344" x2="440" y2="356" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <text x="240" y="364" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8" letterSpacing="2">10.0 M</text>

      {/* Dimension: height */}
      <line x1="454" y1="30" x2="454" y2="310" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="448" y1="30" x2="460" y2="30" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <line x1="448" y1="310" x2="460" y2="310" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <text x="472" y="173" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8" transform="rotate(90 472 173)" letterSpacing="2">7.0 M</text>

      <text x="40" y="20" fontSize="9" fill="#F0EAD6" fontFamily="monospace" opacity="0.8" letterSpacing="2">VARIANT B — SOCIAL</text>
      <text x="40" y="378" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25" letterSpacing="2">SCALE 1:50 · 6 TABLES · 4 SEATS EACH · 70 SQM</text>
      <text x="40" y="388" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25" letterSpacing="2">老板不在 · SHAM SHUI PO · HK</text>
    </>
  )
}

function VariantC() {
  const stoolXs = [83,110,137,164,191,218,245,272,299,326,353,380]

  return (
    <>
      {/* Outer walls */}
      <rect x="40" y="30" width="420" height="260" fill="none" stroke="#F0EAD6" strokeWidth="1.5" opacity="0.7"/>

      {/* Kitchen / back-of-house */}
      <rect x="40" y="30" width="420" height="65" fill="#111" stroke="#F0EAD6" strokeWidth="1" opacity="0.8"/>
      <text x="250" y="58" textAnchor="middle" fontSize="8" fill="#F0EAD6" fontFamily="monospace" opacity="0.6" letterSpacing="2">KITCHEN</text>
      <text x="250" y="70" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.3" letterSpacing="2">CHEF WINDOW</text>

      {/* Chef stations — 3 work surfaces */}
      <rect x="80" y="38" width="80" height="42" fill="none" stroke="#F0EAD6" strokeWidth="0.6" opacity="0.35"/>
      <text x="120" y="63" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.4" letterSpacing="2">PREP</text>

      <rect x="200" y="38" width="80" height="42" fill="none" stroke="#F0EAD6" strokeWidth="0.6" opacity="0.35"/>
      <text x="240" y="63" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.4" letterSpacing="2">STEAM</text>

      <rect x="320" y="38" width="80" height="42" fill="none" stroke="#F0EAD6" strokeWidth="0.6" opacity="0.35"/>
      <text x="360" y="63" textAnchor="middle" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.4" letterSpacing="2">PLATE</text>

      {/* Service pass line */}
      <line x1="40" y1="95" x2="460" y2="95" stroke="#F0EAD6" strokeWidth="0.4" opacity="0.15" strokeDasharray="5,4"/>

      {/* Long counter bar */}
      <rect x="70" y="120" width="330" height="28" fill="none" stroke="#F0EAD6" strokeWidth="1" opacity="0.6"/>
      <text x="235" y="138" textAnchor="middle" fontSize="7" fill="#F0EAD6" fontFamily="monospace" opacity="0.5" letterSpacing="2">COUNTER</text>

      {/* 12 stools facing counter */}
      {stoolXs.map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy={170} r={11} fill="none" stroke="#F0EAD6" strokeWidth="0.7" opacity="0.45"/>
          {i % 2 === 0 && (
            <text x={cx} y={173} textAnchor="middle" fontSize="5" fill="#F0EAD6" fontFamily="monospace" opacity="0.3" letterSpacing="1">
              {String(i + 1).padStart(2, '0')}
            </text>
          )}
        </g>
      ))}

      {/* Entry — bottom wall center gap with arc */}
      <line x1="195" y1="290" x2="295" y2="290" stroke="#0A0A0A" strokeWidth="3"/>
      <path d="M 195 290 Q 195 310 245 310 Q 295 310 295 290"
        fill="none" stroke="#F0EAD6" strokeWidth="0.7" strokeDasharray="3,2" opacity="0.4"/>
      <text x="245" y="306" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.7" letterSpacing="2">ENTRY</text>

      {/* Dimension: width */}
      <line x1="40" y1="330" x2="460" y2="330" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="40" y1="324" x2="40" y2="336" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <line x1="460" y1="324" x2="460" y2="336" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <text x="250" y="344" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8" letterSpacing="2">10.5 M</text>

      {/* Dimension: height */}
      <line x1="474" y1="30" x2="474" y2="290" stroke="#B8860B" strokeWidth="0.5" opacity="0.6"/>
      <line x1="468" y1="30" x2="480" y2="30" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <line x1="468" y1="290" x2="480" y2="290" stroke="#B8860B" strokeWidth="0.4" opacity="0.6"/>
      <text x="488" y="163" textAnchor="middle" fontSize="7" fill="#B8860B" fontFamily="monospace" opacity="0.8" transform="rotate(90 488 163)" letterSpacing="2">6.5 M</text>

      {/* Title */}
      <text x="40" y="20" fontSize="9" fill="#F0EAD6" fontFamily="monospace" opacity="0.8" letterSpacing="2">VARIANT C — OMAKASE</text>

      {/* Footer */}
      <text x="40" y="366" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25" letterSpacing="2">SCALE 1:50 · 12 SEATS · COUNTER SERVICE · 42 SQM</text>
      <text x="40" y="376" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.25" letterSpacing="2">老板不在 · SHAM SHUI PO · HK</text>
    </>
  )
}
