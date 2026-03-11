'use client'

export default function MenuDesign({ variant = 'A' }: { variant?: 'A' | 'B' }) {
  return (
    <div className="w-full flex items-center justify-center gap-8 py-4">
      {variant === 'A' && <MenuA />}
      {variant === 'B' && <MenuB />}
    </div>
  )
}

// ─── MENU A — Traditional Offset Print ───────────────────────────────────────

const STEAMED = [
  { cn: '小籠包', en: 'Xiao Long Bao', price: '48' },
  { cn: '蝦餃',   en: 'Har Gow',       price: '42' },
  { cn: '燒賣',   en: 'Siu Mai',       price: '38' },
]
const DRINKS = [
  { cn: '鐵觀音', en: 'Ti Kuan Yin', price: '28' },
  { cn: '普洱茶', en: 'Pu-erh',      price: '32' },
]

function MenuA() {
  return (
    <div className="relative">
      {/* Label */}
      <div className="absolute -top-6 left-0 font-mono text-[9px] text-[#F0EAD6]/40 tracking-[0.2em] whitespace-nowrap">
        VARIANT A — TRADITIONAL OFFSET PRINT
      </div>

      {/* SVG grain / paper texture filter (very subtle — just a whisper) */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="paper-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" result="noise"/>
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
            <feComponentTransfer in="grayNoise" result="fadedNoise">
              <feFuncA type="linear" slope="0.06"/>
            </feComponentTransfer>
            <feComposite in="SourceGraphic" in2="fadedNoise" operator="over"/>
          </filter>
        </defs>
      </svg>

      {/* Menu card */}
      <div
        className="w-full max-w-[320px] border border-[#F0EAD6]/20 p-5 sm:p-7 relative"
        style={{ background: '#0d0d0d', filter: 'url(#paper-grain)' }}
      >
        {/* Corner registration marks */}
        <div className="absolute top-1 left-1 w-6 h-6 border-t border-l border-[#B8860B]/50"/>
        <div className="absolute top-1 right-1 w-6 h-6 border-t border-r border-[#B8860B]/50"/>
        <div className="absolute bottom-1 left-1 w-6 h-6 border-b border-l border-[#B8860B]/50"/>
        <div className="absolute bottom-1 right-1 w-6 h-6 border-b border-r border-[#B8860B]/50"/>

        {/* Vintage circular stamp (top-right overlay) */}
        <div
          className="absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            border: '1.5px solid rgba(184,134,11,0.8)',
            outline: '1px solid rgba(184,134,11,0.35)',
            outlineOffset: '2px',
          }}
        >
          <div
            className="font-mono text-center leading-none"
            style={{ fontSize: '6px', color: 'rgba(184,134,11,0.95)', letterSpacing: '0.05em' }}
          >
            <div>SHAM</div>
            <div style={{ fontSize: '11px', margin: '1px 0', color: '#B8860B' }}>⊕</div>
            <div>SHUI PO</div>
          </div>
        </div>

        {/* Header — pr-16 reserves space for the absolute stamp overlay */}
        <div className="text-center mb-5 border-b border-[#F0EAD6]/10 pb-4 pr-16">
          <div
            className="mb-1 leading-none"
            style={{
              fontFamily: 'serif',
              fontSize: '4rem',
              color: '#F0EAD6',
              letterSpacing: '0.05em',
            }}
          >
            老板不在
          </div>
          <div className="font-mono text-[8px] text-[#F0EAD6]/30 tracking-[0.35em]">SHAM SHUI PO · KOWLOON · HK</div>
          <div className="font-mono text-[7px] text-[#F0EAD6]/20 tracking-[0.25em] mt-1">EST. MMXXVI</div>
        </div>

        {/* ── Steamed section ── */}
        <SectionHeader label="蒸籠 · STEAMED" />
        {STEAMED.map((item) => (
          <MenuRowA key={item.cn} {...item} />
        ))}

        {/* ── Drinks section ── */}
        <div className="mt-4">
          <SectionHeader label="飲品 · DRINKS" />
          {DRINKS.map((item) => (
            <MenuRowA key={item.cn} {...item} />
          ))}
        </div>

        {/* Ornamental divider */}
        <div className="flex items-center gap-2 mt-4 mb-2 opacity-50">
          <div className="flex-1 h-px bg-[#B8860B]"/>
          <span className="font-mono text-[#B8860B] text-[12px]">✦</span>
          <div className="flex-1 h-px bg-[#B8860B]"/>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="font-mono text-[7px] text-[#F0EAD6]/25 tracking-[0.2em]">PRICES IN HKD · CASH ONLY</div>
          <div className="font-mono text-[7px] text-[#F0EAD6]/18 mt-1">NO RESERVATION · FIRST COME FIRST SERVED</div>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div
      className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2 pt-2 border-t border-[#B8860B]/20"
      style={{ color: '#B8860B', fontVariant: 'small-caps' }}
    >
      {label}
    </div>
  )
}

function MenuRowA({ cn, en, price }: { cn: string; en: string; price: string }) {
  // Build dotted leader as a string that flexibly fills the space
  return (
    <div className="flex items-end gap-0 py-2 border-b border-[#F0EAD6]/5 last:border-0">
      {/* Item name */}
      <div className="flex flex-col flex-shrink-0">
        <span style={{ fontFamily: 'serif', fontSize: '1.4rem', lineHeight: 1.1 }} className="text-[#F0EAD6]">
          {cn}
        </span>
        <span className="text-[8px] text-[#F0EAD6]/30 font-mono tracking-wider mt-0.5">{en}</span>
      </div>

      {/* Dotted leader line — clearly visible dots */}
      <span
        className="flex-1 mb-2 mx-2"
        style={{
          borderBottom: '1px dotted rgba(240,234,214,0.55)',
          minWidth: '1rem',
        }}
      />

      {/* Price */}
      <div className="flex items-baseline gap-0.5 flex-shrink-0">
        <span className="font-mono text-base text-[#F0EAD6]/80">{price}</span>
        <span className="text-[8px] text-[#F0EAD6]/30 font-mono"> HKD</span>
      </div>
    </div>
  )
}

// ─── MENU B — Kowloon Neon Edition ───────────────────────────────────────────

const NEON_STEAMED = [
  { cn: '小籠包', en: 'Xiao Long Bao', price: '48' },
  { cn: '蝦餃',   en: 'Har Gow',       price: '42' },
  { cn: '燒賣',   en: 'Siu Mai',       price: '38' },
]
const NEON_DRINKS = [
  { cn: '鐵觀音', en: 'Ti Kuan Yin', price: '28' },
  { cn: '普洱茶', en: 'Pu-erh',      price: '32' },
]

function MenuB() {
  return (
    <div className="relative">
      {/* Label */}
      <div className="absolute -top-6 left-0 font-mono text-[9px] text-[#F0EAD6]/40 tracking-[0.2em] whitespace-nowrap">
        VARIANT B — KOWLOON NEON EDITION
      </div>

      {/* Neon card — pure black bg for max contrast */}
      <div
        className="w-full max-w-[320px] p-5 sm:p-7 relative"
        style={{
          background: '#000000',
          border: '2px solid #39FF85',
          boxShadow: '0 0 12px rgba(57,255,133,0.4), 0 0 30px rgba(57,255,133,0.15), inset 0 0 20px rgba(57,255,133,0.04)',
        }}
      >
        {/* Header — 老板不在 with dramatic neon glow */}
        <div className="text-center mb-5 pb-4" style={{ borderBottom: '1px solid rgba(57,255,133,0.25)' }}>
          <div
            className="mb-2 leading-none cursor-default"
            style={{
              fontFamily: 'serif',
              fontSize: '3.25rem',
              color: '#39FF85',
              textShadow: [
                '0 0 4px #39FF85',
                '0 0 12px #39FF85',
                '0 0 25px rgba(57,255,133,0.8)',
                '0 0 50px rgba(57,255,133,0.4)',
                '0 0 90px rgba(57,255,133,0.15)',
              ].join(', '),
              transition: 'text-shadow 0.3s ease',
            }}
          >
            老板不在
          </div>
          <div
            className="font-mono text-[8px] tracking-[0.35em]"
            style={{ color: 'rgba(57,255,133,0.5)' }}
          >
            SHAM SHUI PO · KOWLOON · HK
          </div>
        </div>

        {/* ── Steamed section ── */}
        <NeonSectionHeader label="蒸籠 · STEAMED" />
        {NEON_STEAMED.map((item) => (
          <NeonMenuRow key={item.cn} {...item} />
        ))}

        {/* ── Drinks section ── */}
        <div className="mt-4">
          <NeonSectionHeader label="飲品 · DRINKS" />
          {NEON_DRINKS.map((item) => (
            <NeonMenuRow key={item.cn} {...item} />
          ))}
        </div>

        {/* Neon divider */}
        <div
          className="mt-4 mb-3"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #39FF85, transparent)',
            boxShadow: '0 0 6px rgba(57,255,133,0.6)',
          }}
        />

        {/* Footer */}
        <div className="text-center">
          <div
            className="font-mono text-[7px] tracking-[0.2em]"
            style={{ color: 'rgba(57,255,133,0.45)' }}
          >
            PRICES IN HKD · CASH ONLY
          </div>
        </div>
      </div>
    </div>
  )
}

function NeonSectionHeader({ label }: { label: string }) {
  return (
    <div
      className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2 pt-2"
      style={{
        color: 'rgba(57,255,133,0.55)',
        borderTop: '1px solid rgba(57,255,133,0.2)',
        textShadow: '0 0 8px rgba(57,255,133,0.5)',
        fontVariant: 'small-caps',
      }}
    >
      {label}
    </div>
  )
}

function NeonMenuRow({ cn, en, price }: { cn: string; en: string; price: string }) {
  return (
    <div
      className="flex items-end gap-0 py-2 group cursor-default"
      style={{ borderBottom: '1px solid rgba(57,255,133,0.07)' }}
    >
      {/* Item */}
      <div className="flex flex-col flex-shrink-0" style={{ transition: 'all 0.2s' }}>
        <span
          style={{
            fontFamily: 'serif',
            fontSize: '1.4rem',
            lineHeight: 1.1,
            color: '#39FF85',
            textShadow: '0 0 6px rgba(57,255,133,0.7)',
            transition: 'text-shadow 0.2s ease',
          }}
          className="group-hover:drop-shadow-[0_0_12px_#39FF85]"
        >
          {cn}
        </span>
        <span
          className="font-mono tracking-wider mt-0.5"
          style={{ fontSize: '8px', color: 'rgba(57,255,133,0.4)' }}
        >
          {en}
        </span>
      </div>

      {/* Dotted leader */}
      <span
        className="flex-1 mb-2 mx-2"
        style={{
          borderBottom: '1.5px dotted rgba(57,255,133,0.25)',
          minWidth: '1rem',
        }}
      />

      {/* Price */}
      <div className="flex items-baseline gap-0.5 flex-shrink-0">
        <span
          className="font-mono text-base"
          style={{
            color: '#39FF85',
            textShadow: '0 0 6px rgba(57,255,133,0.7)',
          }}
        >
          {price}
        </span>
        <span
          className="font-mono"
          style={{ fontSize: '8px', color: 'rgba(57,255,133,0.35)' }}
        >
          {' '}HKD
        </span>
      </div>
    </div>
  )
}
