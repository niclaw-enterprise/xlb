export default function MenuDesign({ variant = 'A' }: { variant?: 'A' | 'B' }) {
  return (
    <div className="w-full h-full flex items-center justify-center gap-8">
      {variant === 'A' && <MenuA />}
      {variant === 'B' && <MenuB />}
    </div>
  )
}

function MenuA() {
  return (
    <div className="relative">
      {/* Label */}
      <div className="absolute -top-6 left-0 font-mono text-[9px] text-[#F0EAD6]/40 tracking-[0.2em] whitespace-nowrap">
        VARIANT A — TRADITIONAL OFFSET PRINT
      </div>

      {/* Menu card */}
      <div
        className="w-72 border border-[#F0EAD6]/20 p-6 relative"
        style={{ background: '#0d0d0d' }}
      >
        {/* Corner marks */}
        <div className="absolute top-1 left-1 w-5 h-5 border-t border-l border-[#B8860B]/40"/>
        <div className="absolute top-1 right-1 w-5 h-5 border-t border-r border-[#B8860B]/40"/>
        <div className="absolute bottom-1 left-1 w-5 h-5 border-b border-l border-[#B8860B]/40"/>
        <div className="absolute bottom-1 right-1 w-5 h-5 border-b border-r border-[#B8860B]/40"/>

        {/* Header */}
        <div className="text-center mb-4 border-b border-[#F0EAD6]/10 pb-4">
          <div className="text-5xl mb-1" style={{ fontFamily: 'serif', color: '#F0EAD6' }}>老板不在</div>
          <div className="font-mono text-[8px] text-[#F0EAD6]/30 tracking-[0.3em]">SHAM SHUI PO · KOWLOON · HK</div>
          <div className="font-mono text-[7px] text-[#F0EAD6]/20 tracking-[0.2em] mt-1">EST. TBD</div>
        </div>

        {/* Menu items */}
        <div>
          <div className="font-mono text-[8px] text-[#F0EAD6]/40 tracking-[0.3em] uppercase mb-1 border-t border-[#F0EAD6]/10 pt-2">蒸籠 · Steamed</div>
          {[
            { cn: '小籠包', en: 'Xiao Long Bao', price: '48' },
            { cn: '蝦餃', en: 'Har Gow', price: '42' },
            { cn: '燒賣', en: 'Siu Mai', price: '38' },
          ].map((item) => (
            <div key={item.cn} className="flex items-end gap-1 py-2.5 border-b border-[#F0EAD6]/5 last:border-0">
              <span style={{fontFamily:"serif",fontSize:"1.5rem",lineHeight:1}} className="text-[#F0EAD6]">{item.cn}</span>
              <span className="text-[9px] text-[#F0EAD6]/35 font-mono mb-0.5 ml-0.5">{item.en}</span>
              <span className="flex-1 border-b border-dotted border-[#F0EAD6]/12 mb-1.5 mx-2"/>
              <span className="font-mono text-base text-[#F0EAD6]/70">{item.price}</span>
              <span className="text-[8px] text-[#F0EAD6]/25 mb-0.5">HKD</span>
            </div>
          ))}

          <div className="mt-3">
            <div className="font-mono text-[8px] text-[#F0EAD6]/40 tracking-[0.3em] uppercase mb-1 border-t border-[#F0EAD6]/10 pt-2">飲品 · Drinks</div>
            {[
              { cn: '鐵觀音', en: 'Ti Kuan Yin', price: '28' },
              { cn: '普洱茶', en: 'Pu-erh', price: '32' },
            ].map((item) => (
              <div key={item.cn} className="flex items-end gap-1 py-2.5 border-b border-[#F0EAD6]/5 last:border-0">
                <span style={{fontFamily:"serif",fontSize:"1.5rem",lineHeight:1}} className="text-[#F0EAD6]">{item.cn}</span>
                <span className="text-[9px] text-[#F0EAD6]/35 font-mono mb-0.5 ml-0.5">{item.en}</span>
                <span className="flex-1 border-b border-dotted border-[#F0EAD6]/12 mb-1.5 mx-2"/>
                <span className="font-mono text-base text-[#F0EAD6]/70">{item.price}</span>
                <span className="text-[8px] text-[#F0EAD6]/25 mb-0.5">HKD</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#F0EAD6]/10 mt-4 pt-3 text-center">
          <div className="font-mono text-[6px] text-[#F0EAD6]/20 tracking-[0.2em]">PRICES IN HKD · CASH ONLY</div>
          <div className="font-mono text-[6px] text-[#F0EAD6]/15 mt-1">NO RESERVATION · FIRST COME FIRST SERVED</div>
        </div>
      </div>
    </div>
  )
}

function MenuB() {
  const items = [
    { cn: '小籠包', price: '48' },
    { cn: '蝦餃', price: '42' },
    { cn: '燒賣', price: '38' },
    { cn: '鐵觀音', price: '28' },
    { cn: '普洱茶', price: '32' },
  ]

  return (
    <div className="relative">
      {/* Label */}
      <div className="absolute -top-6 left-0 font-mono text-[9px] text-[#F0EAD6]/40 tracking-[0.2em] whitespace-nowrap">
        VARIANT B — KOWLOON NEON EDITION
      </div>

      {/* Neon card */}
      <div
        className="w-72 border-2 border-[#39FF85] p-6"
        style={{ background: '#0d1a0d', boxShadow: '0 0 15px rgba(57,255,133,0.15)' }}
      >
        {/* Header */}
        <div className="text-center mb-5 pb-4 border-b border-[#39FF85]/20">
          <div
            className="text-5xl mb-2 text-[#39FF85]"
            style={{ fontFamily: 'serif', textShadow: '0 0 20px #39FF85, 0 0 40px rgba(57,255,133,0.5)' }}
          >
            老板不在
          </div>
          <div className="font-mono text-[8px] text-[#39FF85]/40 tracking-[0.3em]">SHAM SHUI PO · KOWLOON · HK</div>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.cn} className="flex justify-between items-baseline">
              <span style={{ fontFamily: 'serif', fontSize: '1.25rem' }} className="text-[#39FF85]/80">{item.cn}</span>
              <span className="flex-1 border-b border-dotted border-[#39FF85]/15 mx-3 mb-1"/>
              <span className="font-mono text-sm text-[#39FF85]/80">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-[#39FF85]/20 mt-5 pt-3 text-center">
          <div className="font-mono text-[6px] text-[#39FF85]/30 tracking-[0.2em]">PRICES IN HKD · CASH ONLY</div>
        </div>
      </div>
    </div>
  )
}
