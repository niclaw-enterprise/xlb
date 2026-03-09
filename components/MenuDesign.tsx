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
      <div className="absolute -top-6 left-0 font-mono text-[9px] text-[#F0EAD6]/40 tracking-[0.2em]">
        VARIANT A — TRADITIONAL OFFSET PRINT
      </div>

      {/* Menu card */}
      <div
        className="w-64 border border-[#F0EAD6]/20 p-6 relative"
        style={{ background: '#0d0d0d' }}
      >
        {/* Corner marks */}
        <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-[#B8860B]/40"/>
        <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-[#B8860B]/40"/>
        <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-[#B8860B]/40"/>
        <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-[#B8860B]/40"/>

        {/* Header */}
        <div className="text-center mb-4 border-b border-[#F0EAD6]/10 pb-4">
          <div className="text-2xl mb-1" style={{ fontFamily: 'serif', color: '#F0EAD6' }}>老板不在</div>
          <div className="font-mono text-[8px] text-[#F0EAD6]/30 tracking-[0.3em]">SHAM SHUI PO · KOWLOON · HK</div>
          <div className="font-mono text-[7px] text-[#F0EAD6]/20 tracking-[0.2em] mt-1">EST. TBD</div>
        </div>

        {/* Menu items */}
        <div className="space-y-3">
          <div className="font-mono text-[8px] text-[#F0EAD6]/40 tracking-[0.3em] uppercase mb-2">蒸籠 · Steamed</div>
          {[
            { cn: '小籠包', en: 'Xiao Long Bao', price: '48' },
            { cn: '蝦餃', en: 'Har Gow', price: '42' },
            { cn: '燒賣', en: 'Siu Mai', price: '38' },
          ].map((item) => (
            <div key={item.cn} className="flex justify-between items-baseline">
              <div>
                <span style={{ fontFamily: 'serif', color: '#F0EAD6', fontSize: '13px' }}>{item.cn}</span>
                <span className="font-mono text-[7px] text-[#F0EAD6]/30 ml-2">{item.en}</span>
              </div>
              <span className="font-mono text-[9px] text-[#F0EAD6]/50">{item.price}</span>
            </div>
          ))}

          <div className="border-t border-[#F0EAD6]/10 pt-3 mt-3">
            <div className="font-mono text-[8px] text-[#F0EAD6]/40 tracking-[0.3em] uppercase mb-2">飲品 · Drinks</div>
            {[
              { cn: '鐵觀音', en: 'Ti Kuan Yin', price: '28' },
              { cn: '普洱茶', en: 'Pu-erh', price: '32' },
            ].map((item) => (
              <div key={item.cn} className="flex justify-between items-baseline mb-2">
                <div>
                  <span style={{ fontFamily: 'serif', color: '#F0EAD6', fontSize: '13px' }}>{item.cn}</span>
                  <span className="font-mono text-[7px] text-[#F0EAD6]/30 ml-2">{item.en}</span>
                </div>
                <span className="font-mono text-[9px] text-[#F0EAD6]/50">{item.price}</span>
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
  return (
    <div className="relative">
      {/* Label */}
      <div className="absolute -top-6 left-0 font-mono text-[9px] text-[#F0EAD6]/40 tracking-[0.2em]">
        VARIANT B — MINIMAL CARD
      </div>

      {/* Single item card — omakase style */}
      <div className="w-52 border border-[#39FF85]/20 p-8" style={{ background: '#050505' }}>
        <div className="text-center">
          <div className="text-5xl mb-3" style={{ fontFamily: 'serif', color: '#F0EAD6' }}>小籠包</div>
          <div className="w-8 h-px bg-[#F0EAD6]/20 mx-auto mb-3"/>
          <div className="font-mono text-[8px] text-[#F0EAD6]/30 tracking-[0.4em] mb-6">XIAO LONG BAO</div>

          <div className="font-mono text-[9px] text-[#F0EAD6]/20 leading-relaxed">
            Steamed.<br/>
            Pork & crab.<br/>
            Served in bamboo.<br/>
            4 pieces.
          </div>

          <div className="mt-6 font-mono text-[11px] text-[#39FF85]/60 tracking-[0.3em]">HKD 88</div>

          <div className="mt-6 w-full border-t border-[#F0EAD6]/10 pt-4">
            <div className="font-mono text-[6px] text-[#F0EAD6]/15 tracking-[0.3em]">老板不在</div>
          </div>
        </div>
      </div>
    </div>
  )
}
