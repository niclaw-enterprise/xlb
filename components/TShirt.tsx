interface TShirtProps {
  view?: 'front' | 'back'
}

export default function TShirt({ view = 'front' }: TShirtProps) {
  return (
    <div className="w-72 h-80 relative select-none" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))' }}>
      <svg
        viewBox="0 0 300 340"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Fabric gradient — light from top-left */}
          <radialGradient id="fabric-main" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1c1c1c" />
            <stop offset="60%" stopColor="#111111" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
          {/* Sleeve gradients */}
          <linearGradient id="sleeve-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#161616" />
            <stop offset="100%" stopColor="#090909" />
          </linearGradient>
          <linearGradient id="sleeve-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#161616" />
            <stop offset="100%" stopColor="#090909" />
          </linearGradient>
          {/* Collar inner shadow */}
          <radialGradient id="collar-inner" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor="#080808" />
            <stop offset="100%" stopColor="#141414" />
          </radialGradient>
          {/* Embroidery glow */}
          <filter id="embroidery-glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Subtle fabric noise */}
          <filter id="fabric-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blend" />
            <feComposite in="blend" in2="SourceGraphic" operator="in" />
          </filter>
          <clipPath id="shirt-clip">
            <path d="M74,38 L28,86 L68,106 L62,292 L238,292 L232,106 L272,86 L226,38 C216,62 186,80 150,80 C114,80 84,62 74,38 Z" />
          </clipPath>
        </defs>

        {/* ── SHIRT BODY ── */}
        <g>
          {/* Left sleeve */}
          <path
            d="M74,38 L28,86 L68,106 L80,80 Z"
            fill="url(#sleeve-left)"
            stroke="#1e1e1e"
            strokeWidth="0.5"
          />
          {/* Right sleeve */}
          <path
            d="M226,38 L272,86 L232,106 L220,80 Z"
            fill="url(#sleeve-right)"
            stroke="#1e1e1e"
            strokeWidth="0.5"
          />
          {/* Main body */}
          <path
            d="M74,38 L28,86 L68,106 L62,292 L238,292 L232,106 L272,86 L226,38 C216,62 186,80 150,80 C114,80 84,62 74,38 Z"
            fill="url(#fabric-main)"
            stroke="#1e1e1e"
            strokeWidth="0.8"
          />
          {/* Fabric texture overlay */}
          <path
            d="M74,38 L28,86 L68,106 L62,292 L238,292 L232,106 L272,86 L226,38 C216,62 186,80 150,80 C114,80 84,62 74,38 Z"
            fill="url(#fabric-main)"
            filter="url(#fabric-texture)"
            opacity="0.15"
          />
          {/* Seam lines */}
          <line x1="68" y1="106" x2="62" y2="292" stroke="#1a1a1a" strokeWidth="0.8" />
          <line x1="232" y1="106" x2="238" y2="292" stroke="#1a1a1a" strokeWidth="0.8" />
          {/* Shoulder seams */}
          <path d="M74,38 L80,80" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
          <path d="M226,38 L220,80" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
          {/* Hem stitching */}
          <path
            d="M62,288 L238,288"
            stroke="#1d1d1d"
            strokeWidth="0.5"
            strokeDasharray="3,2"
          />
          {/* Collar */}
          <path
            d="M74,38 C88,68 116,84 150,84 C184,84 212,68 226,38 C215,34 200,31 185,29 C174,50 161,58 150,58 C139,58 126,50 115,29 C100,31 85,34 74,38 Z"
            fill="url(#collar-inner)"
            stroke="#1a1a1a"
            strokeWidth="0.6"
          />
          {/* Collar rib texture */}
          {[0, 4, 8, 12, 16].map((i) => (
            <line
              key={i}
              x1={115 + i * 3.5}
              y1={29 + i * 0.5}
              x2={115 + i * 3.5}
              y2={35 + i * 0.5}
              stroke="#1f1f1f"
              strokeWidth="0.8"
            />
          ))}
        </g>

        {/* ── FRONT ARTWORK ── */}
        {view === 'front' && (
          <g>
            {/* Embroidery base — slightly raised effect */}
            <text
              x="150"
              y="168"
              textAnchor="middle"
              fontSize="38"
              fill="#1a1a1a"
              fontFamily="serif"
              letterSpacing="3"
              dy="2"
              dx="1.5"
            >
              小籠包
            </text>
            {/* Main embroidery text */}
            <text
              x="150"
              y="168"
              textAnchor="middle"
              fontSize="38"
              fill="#E8E0C8"
              fontFamily="serif"
              letterSpacing="3"
              filter="url(#embroidery-glow)"
              style={{ textShadow: 'none' }}
            >
              小籠包
            </text>
            {/* Embroidery thread texture overlay (fine cross-hatching effect via opacity) */}
            <text
              x="150"
              y="168"
              textAnchor="middle"
              fontSize="38"
              fill="none"
              fontFamily="serif"
              letterSpacing="3"
              stroke="#C8C0A8"
              strokeWidth="0.3"
              opacity="0.4"
            >
              小籠包
            </text>

            {/* XLB brand line */}
            <text
              x="150"
              y="192"
              textAnchor="middle"
              fontSize="10"
              fill="#B0A888"
              fontFamily="monospace"
              letterSpacing="9"
              opacity="0.75"
            >
              XLB
            </text>

            {/* Small left chest emblem */}
            <text
              x="90"
              y="128"
              textAnchor="middle"
              fontSize="9"
              fill="#303030"
              fontFamily="monospace"
              letterSpacing="1"
            >
              老板不在
            </text>
          </g>
        )}

        {/* ── BACK ARTWORK ── */}
        {view === 'back' && (
          <g>
            {/* Restaurant name — large */}
            <text
              x="150"
              y="2"
              textAnchor="middle"
              fontSize="10"
              fill="#303030"
              fontFamily="monospace"
              letterSpacing="3"
            >
              ─────────────────
            </text>

            {/* Main back text */}
            <text
              x="150"
              y="148"
              textAnchor="middle"
              fontSize="28"
              fill="#1a1a1a"
              fontFamily="serif"
              letterSpacing="2"
              dy="2"
              dx="1"
            >
              老板不在
            </text>
            <text
              x="150"
              y="148"
              textAnchor="middle"
              fontSize="28"
              fill="#D8D0B8"
              fontFamily="serif"
              letterSpacing="2"
              filter="url(#embroidery-glow)"
            >
              老板不在
            </text>

            {/* Subtitle */}
            <text
              x="150"
              y="170"
              textAnchor="middle"
              fontSize="7.5"
              fill="#888070"
              fontFamily="monospace"
              letterSpacing="5"
              opacity="0.8"
            >
              THE BOSS IS NOT HERE
            </text>

            {/* Divider */}
            <line x1="100" y1="180" x2="200" y2="180" stroke="#282820" strokeWidth="0.5" />

            {/* Hong Kong skyline — minimal line art */}
            <g opacity="0.25" transform="translate(82, 188)">
              {/* Simple HK skyline abstraction */}
              <rect x="0"  y="30" width="8"  height="22" fill="#C8C0A8" />
              <rect x="10" y="20" width="6"  height="32" fill="#C8C0A8" />
              <rect x="18" y="10" width="10" height="42" fill="#C8C0A8" />
              <rect x="30" y="24" width="5"  height="28" fill="#C8C0A8" />
              <rect x="37" y="16" width="8"  height="36" fill="#C8C0A8" />
              <rect x="47" y="22" width="6"  height="30" fill="#C8C0A8" />
              <rect x="55" y="8"  width="12" height="44" fill="#C8C0A8" />
              <rect x="69" y="18" width="7"  height="34" fill="#C8C0A8" />
              <rect x="78" y="26" width="5"  height="26" fill="#C8C0A8" />
              <rect x="85" y="14" width="9"  height="38" fill="#C8C0A8" />
              <rect x="96" y="28" width="6"  height="24" fill="#C8C0A8" />
              <rect x="104" y="20" width="7" height="32" fill="#C8C0A8" />
              <rect x="113" y="6"  width="9" height="46" fill="#C8C0A8" />
              <rect x="124" y="22" width="6" height="30" fill="#C8C0A8" />
              {/* Water line */}
              <line x1="0" y1="52" x2="136" y2="52" stroke="#C8C0A8" strokeWidth="0.8" opacity="0.6" />
            </g>

            {/* Address */}
            <text
              x="150"
              y="256"
              textAnchor="middle"
              fontSize="7"
              fill="#484038"
              fontFamily="monospace"
              letterSpacing="3"
            >
              SHAM SHUI PO · KOWLOON · HK
            </text>

            {/* Bottom logo */}
            <text
              x="150"
              y="274"
              textAnchor="middle"
              fontSize="7"
              fill="#302820"
              fontFamily="monospace"
              letterSpacing="6"
            >
              XLB
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}
