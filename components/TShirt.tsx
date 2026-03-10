export default function TShirt() {
  return (
    <div className="w-full max-w-[288px] sm:max-w-[320px] aspect-[320/380] relative select-none">
      <svg
        viewBox="0 0 320 380"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <pattern id="grid-shirt" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1a2e1a" strokeWidth="0.25" opacity="0.7"/>
          </pattern>
          <pattern id="grid-shirt-major" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1a2e1a" strokeWidth="0.5" opacity="0.4"/>
          </pattern>
          <clipPath id="shirt-clip-v2">
            <path d="M90,38 L36,92 L74,112 L66,304 L254,304 L246,112 L284,92 L230,38 C222,58 198,72 160,72 C122,72 98,58 90,38 Z"/>
          </clipPath>
          <marker id="arrow-end" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#39FF85" opacity="0.7"/>
          </marker>
          <marker id="arrow-start" markerWidth="4" markerHeight="4" refX="1" refY="2" orient="auto">
            <path d="M4,0 L0,2 L4,4 Z" fill="#39FF85" opacity="0.7"/>
          </marker>
          <marker id="arrow-gold-end" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#B8860B" opacity="0.7"/>
          </marker>
          <marker id="arrow-gold-start" markerWidth="4" markerHeight="4" refX="1" refY="2" orient="auto">
            <path d="M4,0 L0,2 L4,4 Z" fill="#B8860B" opacity="0.7"/>
          </marker>
        </defs>

        {/* Blueprint grids inside shirt */}
        <rect width="320" height="380" fill="url(#grid-shirt)" clipPath="url(#shirt-clip-v2)"/>
        <rect width="320" height="380" fill="url(#grid-shirt-major)" clipPath="url(#shirt-clip-v2)"/>

        {/* T-shirt body */}
        <path
          d="M90,38 L36,92 L74,112 L66,304 L254,304 L246,112 L284,92 L230,38 C222,58 198,72 160,72 C122,72 98,58 90,38 Z"
          fill="#0c0c0c"
          stroke="#2a2a2a"
          strokeWidth="1.2"
        />

        {/* Collar — tighter, more realistic */}
        <path
          d="M90,38 C100,58 126,72 160,72 C194,72 220,58 230,38 C218,34 204,31 190,30 C182,46 170,54 160,54 C150,54 138,46 130,30 C116,31 102,34 90,38 Z"
          fill="#090909"
          stroke="#1e1e1e"
          strokeWidth="0.6"
        />

        {/* Seam lines — chest */}
        <line x1="66" y1="140" x2="254" y2="140" stroke="#1f1f1f" strokeWidth="0.5" strokeDasharray="2,4"/>
        {/* Side seams */}
        <line x1="74" y1="112" x2="66" y2="304" stroke="#1d1d1d" strokeWidth="0.4" strokeDasharray="2,4"/>
        <line x1="246" y1="112" x2="254" y2="304" stroke="#1d1d1d" strokeWidth="0.4" strokeDasharray="2,4"/>

        {/* ── DIMENSION LINES ── */}

        {/* Width — bottom */}
        <line x1="66" y1="318" x2="254" y2="318"
          stroke="#39FF85" strokeWidth="0.6" opacity="0.7"
          markerStart="url(#arrow-start)" markerEnd="url(#arrow-end)"/>
        <line x1="66" y1="305" x2="66" y2="322" stroke="#39FF85" strokeWidth="0.4" opacity="0.5"/>
        <line x1="254" y1="305" x2="254" y2="322" stroke="#39FF85" strokeWidth="0.4" opacity="0.5"/>
        <text x="160" y="330" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.8" letterSpacing="1">WIDTH · 52CM</text>

        {/* Body length — right side */}
        <line x1="268" y1="112" x2="268" y2="304"
          stroke="#39FF85" strokeWidth="0.6" opacity="0.7"
          markerStart="url(#arrow-start)" markerEnd="url(#arrow-end)"/>
        <line x1="246" y1="112" x2="272" y2="112" stroke="#39FF85" strokeWidth="0.4" opacity="0.5"/>
        <line x1="254" y1="304" x2="272" y2="304" stroke="#39FF85" strokeWidth="0.4" opacity="0.5"/>
        <text x="284" y="211" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.8"
          transform="rotate(90 284 211)" letterSpacing="1">BODY · 46CM</text>

        {/* Chest width annotation */}
        <line x1="66" y1="148" x2="254" y2="148"
          stroke="#39FF85" strokeWidth="0.4" opacity="0.35"
          markerStart="url(#arrow-start)" markerEnd="url(#arrow-end)"/>
        <text x="160" y="157" textAnchor="middle" fontSize="6" fill="#39FF85" fontFamily="monospace" opacity="0.5" letterSpacing="0.5">CHEST · 50CM</text>

        {/* Shoulder width */}
        <line x1="90" y1="26" x2="230" y2="26"
          stroke="#B8860B" strokeWidth="0.5" opacity="0.6"
          markerStart="url(#arrow-gold-start)" markerEnd="url(#arrow-gold-end)"/>
        <line x1="90" y1="22" x2="90" y2="40" stroke="#B8860B" strokeWidth="0.3" opacity="0.4"/>
        <line x1="230" y1="22" x2="230" y2="40" stroke="#B8860B" strokeWidth="0.3" opacity="0.4"/>
        <text x="160" y="20" textAnchor="middle" fontSize="6" fill="#B8860B" fontFamily="monospace" opacity="0.7" letterSpacing="0.5">SHOULDER · 44CM</text>

        {/* ── XLB CHEST BADGE ── */}
        <rect x="85" y="55" width="30" height="18" fill="none" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.4"/>
        <text x="100" y="67" textAnchor="middle" fontSize="7" fill="#F0EAD6" fontFamily="monospace" opacity="0.4">XLB</text>

        {/* ── STITCH LINES — sleeve/shoulder seams ── */}
        {/* Left shoulder seam */}
        <line x1="90" y1="38" x2="36" y2="92" stroke="#F0EAD6" strokeWidth="0.5" strokeDasharray="2,3" opacity="0.2"/>
        {/* Right shoulder seam */}
        <line x1="230" y1="38" x2="284" y2="92" stroke="#F0EAD6" strokeWidth="0.5" strokeDasharray="2,3" opacity="0.2"/>
        {/* Left sleeve hem */}
        <line x1="36" y1="92" x2="74" y2="112" stroke="#F0EAD6" strokeWidth="0.5" strokeDasharray="2,3" opacity="0.2"/>
        {/* Right sleeve hem */}
        <line x1="284" y1="92" x2="246" y2="112" stroke="#F0EAD6" strokeWidth="0.5" strokeDasharray="2,3" opacity="0.2"/>

        {/* ── ANNOTATIONS ── */}

        {/* Collar annotation */}
        <line x1="160" y1="60" x2="305" y2="42" stroke="#B8860B" strokeWidth="0.5" opacity="0.6" strokeDasharray="3,2"/>
        <circle cx="160" cy="60" r="1.2" fill="#B8860B" opacity="0.8"/>
        <text x="307" y="40" fontSize="6" fill="#B8860B" fontFamily="monospace" opacity="0.7" letterSpacing="0.5">CREW NECK Ø22CM</text>

        {/* Chest embroidery annotation */}
        <line x1="205" y1="150" x2="305" y2="118" stroke="#B8860B" strokeWidth="0.5" opacity="0.6" strokeDasharray="3,2"/>
        <circle cx="205" cy="150" r="1.2" fill="#B8860B" opacity="0.8"/>
        <text x="307" y="116" fontSize="6" fill="#B8860B" fontFamily="monospace" opacity="0.7" letterSpacing="0.5">EMBROIDERY · R CHEST</text>

        {/* Seam annotation */}
        <line x1="74" y1="178" x2="30" y2="160" stroke="#B8860B" strokeWidth="0.5" opacity="0.4" strokeDasharray="3,2"/>
        <circle cx="74" cy="178" r="1" fill="#B8860B" opacity="0.6"/>
        <text x="6" y="158" fontSize="6" fill="#B8860B" fontFamily="monospace" opacity="0.5" letterSpacing="0.5">SIDE SEAM</text>

        {/* ── SPEC BLOCK ── */}
        <text x="68" y="250" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.18" letterSpacing="0.5">FABRIC · 100% COTTON RING-SPUN</text>
        <text x="68" y="261" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.18" letterSpacing="0.5">WEIGHT · 280 GSM</text>
        <text x="68" y="272" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.18" letterSpacing="0.5">COLOR · #0C0C0C WASHED BLACK</text>
        <text x="68" y="283" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.18" letterSpacing="0.5">FIT · RELAXED UNISEX</text>
        <text x="68" y="294" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.18" letterSpacing="0.5">FINISH · ENZYME WASHED</text>

        {/* Revision + scale */}
        <text x="196" y="340" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.12" letterSpacing="0.5">SCALE 1:8 · REV.001-A · XLB STUDIO</text>

        {/* ── RIGHT CHEST LOGO ── */}
        {/* Crosshair / target */}
        <circle cx="205" cy="152" r="16" fill="none" stroke="#F0EAD6" strokeWidth="0.35" opacity="0.2" strokeDasharray="3,3"/>
        <line x1="189" y1="152" x2="221" y2="152" stroke="#F0EAD6" strokeWidth="0.25" opacity="0.15"/>
        <line x1="205" y1="136" x2="205" y2="168" stroke="#F0EAD6" strokeWidth="0.25" opacity="0.15"/>

        {/* Logo text */}
        <text
          x="205" y="149"
          textAnchor="middle"
          fontSize="12"
          fill="#F0EAD6"
          fontFamily="serif"
          letterSpacing="1.5"
          opacity="0.95"
        >
          小籠包
        </text>
        <text
          x="205" y="161"
          textAnchor="middle"
          fontSize="4.5"
          fill="#F0EAD6"
          fontFamily="monospace"
          letterSpacing="5"
          opacity="0.45"
        >
          XLB
        </text>
      </svg>
    </div>
  )
}
