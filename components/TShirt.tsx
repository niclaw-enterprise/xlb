export default function TShirt() {
  return (
    <div className="w-80 h-96 relative select-none">
      <svg
        viewBox="0 0 320 380"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Engineering grid (blueprint feel) */}
        <defs>
          <pattern id="grid" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#1e3a2f" strokeWidth="0.3" opacity="0.6"/>
          </pattern>
          <clipPath id="shirt-clip">
            <path d="M82,42 L32,96 L76,118 L64,308 L256,308 L244,118 L288,96 L238,42 C226,70 196,86 160,86 C124,86 94,70 82,42 Z"/>
          </clipPath>
        </defs>

        {/* Blueprint grid inside shirt */}
        <rect x="0" y="0" width="320" height="380" fill="url(#grid)" clipPath="url(#shirt-clip)" opacity="0.5"/>

        {/* T-shirt body */}
        <path
          d="M82,42 L32,96 L76,118 L64,308 L256,308 L244,118 L288,96 L238,42 C226,70 196,86 160,86 C124,86 94,70 82,42 Z"
          fill="#0e0e0e"
          stroke="#2a2a2a"
          strokeWidth="1"
        />

        {/* Collar */}
        <path
          d="M82,42 C96,74 122,90 160,90 C198,90 224,74 238,42 C224,37 208,34 192,32 C182,54 168,62 160,62 C152,62 138,54 128,32 C112,34 96,37 82,42 Z"
          fill="#0a0a0a"
          stroke="#1f1f1f"
          strokeWidth="0.5"
        />

        {/* Technical measurement lines */}
        {/* Width arrow at bottom */}
        <line x1="64" y1="320" x2="256" y2="320" stroke="#39FF85" strokeWidth="0.5" opacity="0.6"/>
        <line x1="64" y1="315" x2="64" y2="325" stroke="#39FF85" strokeWidth="0.5" opacity="0.6"/>
        <line x1="256" y1="315" x2="256" y2="325" stroke="#39FF85" strokeWidth="0.5" opacity="0.6"/>
        <text x="160" y="334" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.7" letterSpacing="1">52 CM</text>

        {/* Height arrow on left */}
        <line x1="50" y1="118" x2="50" y2="308" stroke="#39FF85" strokeWidth="0.5" opacity="0.6"/>
        <line x1="45" y1="118" x2="55" y2="118" stroke="#39FF85" strokeWidth="0.5" opacity="0.6"/>
        <line x1="45" y1="308" x2="55" y2="308" stroke="#39FF85" strokeWidth="0.5" opacity="0.6"/>
        <text x="36" y="218" textAnchor="middle" fontSize="7" fill="#39FF85" fontFamily="monospace" opacity="0.7" letterSpacing="1" transform="rotate(-90 36 218)">72 CM</text>

        {/* Annotation dot + line — chest right side */}
        <line x1="210" y1="145" x2="248" y2="118" stroke="#B8860B" strokeWidth="0.5" opacity="0.8" strokeDasharray="3,2"/>
        <circle cx="210" cy="145" r="1.5" fill="#B8860B" opacity="0.9"/>
        <text x="250" y="116" fontSize="6.5" fill="#B8860B" fontFamily="monospace" opacity="0.8" letterSpacing="0.5">CHEST EMBROIDERY</text>

        {/* Collar annotation */}
        <line x1="160" y1="68" x2="295" y2="52" stroke="#B8860B" strokeWidth="0.5" opacity="0.8" strokeDasharray="3,2"/>
        <circle cx="160" cy="68" r="1.5" fill="#B8860B" opacity="0.9"/>
        <text x="266" y="50" fontSize="6.5" fill="#B8860B" fontFamily="monospace" opacity="0.8" letterSpacing="0.5">CREW NECK</text>

        {/* Material annotation */}
        <text x="68" y="270" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.2" letterSpacing="0.5">MAT: 100% COTTON</text>
        <text x="68" y="280" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.2" letterSpacing="0.5">GSM: 180</text>
        <text x="68" y="290" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.2" letterSpacing="0.5">COL: #0E0E0E</text>

        {/* Version stamp bottom right */}
        <text x="245" y="298" fontSize="6" fill="#F0EAD6" fontFamily="monospace" opacity="0.15" letterSpacing="0.5">REV.001</text>

        {/* Crosshair target on RIGHT chest (pocket position) */}
        <circle cx="208" cy="148" r="14" fill="none" stroke="#F0EAD6" strokeWidth="0.4" opacity="0.25" strokeDasharray="4,3"/>
        <line x1="194" y1="148" x2="222" y2="148" stroke="#F0EAD6" strokeWidth="0.3" opacity="0.2"/>
        <line x1="208" y1="134" x2="208" y2="162" stroke="#F0EAD6" strokeWidth="0.3" opacity="0.2"/>

        {/* Logo on RIGHT chest */}
        <text
          x="208"
          y="145"
          textAnchor="middle"
          fontSize="13"
          fill="#F0EAD6"
          fontFamily="serif"
          letterSpacing="1"
          opacity="0.95"
        >
          小籠包
        </text>
        <text
          x="208"
          y="157"
          textAnchor="middle"
          fontSize="5"
          fill="#F0EAD6"
          fontFamily="monospace"
          letterSpacing="4"
          opacity="0.5"
        >
          XLB
        </text>
      </svg>
    </div>
  )
}
