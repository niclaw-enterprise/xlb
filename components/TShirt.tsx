export default function TShirt() {
  return (
    <div className="w-72 h-80 relative select-none">
      <svg
        viewBox="0 0 300 340"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        {/* T-shirt body */}
        <path
          d="M75,40 L30,90 L70,110 L60,290 L240,290 L230,110 L270,90 L225,40 C215,65 185,80 150,80 C115,80 85,65 75,40 Z"
          fill="#111111"
          stroke="#222222"
          strokeWidth="1"
        />
        {/* Collar */}
        <path
          d="M75,40 C90,70 115,85 150,85 C185,85 210,70 225,40 C210,35 195,32 180,30 C170,50 155,58 150,58 C145,58 130,50 120,30 C105,32 90,35 75,40 Z"
          fill="#0d0d0d"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Subtle fabric texture lines */}
        <line x1="60" y1="130" x2="240" y2="130" stroke="#1a1a1a" strokeWidth="0.3" />
        <line x1="60" y1="170" x2="240" y2="170" stroke="#1a1a1a" strokeWidth="0.3" />
        <line x1="60" y1="210" x2="240" y2="210" stroke="#1a1a1a" strokeWidth="0.3" />
        <line x1="60" y1="250" x2="240" y2="250" stroke="#1a1a1a" strokeWidth="0.3" />

        {/* Chinese characters — embroidered style */}
        <text
          x="150"
          y="168"
          textAnchor="middle"
          fontSize="36"
          fill="#F0EAD6"
          fontFamily="serif"
          letterSpacing="4"
          style={{ filter: 'drop-shadow(0 0 2px rgba(240,234,214,0.3))' }}
        >
          小籠包
        </text>

        {/* XLB below */}
        <text
          x="150"
          y="198"
          textAnchor="middle"
          fontSize="11"
          fill="#F0EAD6"
          fontFamily="monospace"
          letterSpacing="8"
          opacity="0.7"
        >
          XLB
        </text>

        {/* Subtle sleeve shadows */}
        <path
          d="M30,90 L70,110 L75,100 L38,82 Z"
          fill="#0a0a0a"
          opacity="0.5"
        />
        <path
          d="M270,90 L230,110 L225,100 L262,82 Z"
          fill="#0a0a0a"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
