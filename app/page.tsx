'use client'

import { useState } from 'react'
import TShirt from '@/components/TShirt'
import RunningBuyButton from '@/components/RunningBuyButton'
import Planimetry from '@/components/Planimetry'
import MenuDesign from '@/components/MenuDesign'

const sections = ['01 PLANIMETRY', '02 MENU', '03 WORKWEAR'] as const
type Section = typeof sections[number]

const planVariants = ['A', 'B', 'C'] as const
type PlanVariant = typeof planVariants[number]

const menuVariants = ['A', 'B'] as const
type MenuVariant = typeof menuVariants[number]

export default function Home() {
  const [active, setActive] = useState<Section>('01 PLANIMETRY')
  const [planVariant, setPlanVariant] = useState<PlanVariant>('A')
  const [menuVariant, setMenuVariant] = useState<MenuVariant>('A')
  const [selectedSize, setSelectedSize] = useState('M')
  const [view, setView] = useState<"front"|"back">("front")

  return (
    <main className="bg-[#0A0A0A] text-[#F0EAD6] h-screen overflow-hidden flex flex-col font-mono">

      {/* Header */}
      <header className="flex justify-between items-center px-8 pr-6 py-4 border-b border-[#F0EAD6]/8 shrink-0">
        <div className="flex items-baseline gap-6 border-b border-[#F0EAD6]/10 pb-2">
          <span className="text-3xl tracking-[0.4em] font-bold">XLB</span>
          <span className="text-xs text-[#F0EAD6]/25 tracking-[0.2em] uppercase">
            Restaurant Design Studio
          </span>
        </div>
        <div className="flex flex-col gap-0.5 items-end">
          <span className="text-[11px] text-[#F0EAD6]/20 tracking-widest">CONFIDENTIAL · FOR CEO REVIEW</span>
          <span className="text-[#F0EAD6]/30 text-base" style={{ fontFamily: 'serif' }}>老板不在</span>
        </div>
      </header>

      {/* Nav */}
      <nav className="flex gap-0 border-b border-[#F0EAD6]/8 shrink-0 pr-4">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`px-8 py-3 text-[10px] tracking-[0.3em] uppercase border-r border-[#F0EAD6]/8 transition-colors ${
              active === s
                ? 'bg-[#F0EAD6]/5 text-[#F0EAD6] border-b-2 border-b-[#39FF85]'
                : 'text-[#F0EAD6] opacity-40 hover:opacity-60'
            }`}
          >
            {s}
          </button>
        ))}
        <div className="flex-1" />
      </nav>

      {/* Content area */}
      <div className="flex-1 min-h-0 relative">

        {/* 01 PLANIMETRY */}
        {active === '01 PLANIMETRY' && (
          <div className="h-full flex">
            {/* Main plan */}
            <div className="flex-1 p-8 min-w-0">
              <Planimetry variant={planVariant} />
            </div>

            {/* Sidebar */}
            <div className="w-64 border-l border-[#F0EAD6]/8 p-6 flex flex-col gap-6 shrink-0 min-w-0 overflow-hidden">
              <div>
                <div className="text-xs text-[#F0EAD6]/30 tracking-[0.4em] mb-3 uppercase">Project</div>
                <div className="text-[13px] text-[#F0EAD6]/70 leading-relaxed">
                  老板不在<br/>
                  <span className="text-xs text-[#F0EAD6]/30">Sham Shui Po, KL</span>
                </div>
              </div>
              <div className="text-[#F0EAD6]/10 text-center text-xs">·</div>
              <div>
                <div className="text-xs text-[#F0EAD6]/30 tracking-[0.4em] mb-3 uppercase">Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#39FF85] animate-pulse"/>
                  <span className="text-xs text-[#39FF85]/80">IN DESIGN</span>
                </div>
              </div>
              <div className="text-[#F0EAD6]/10 text-center text-xs">·</div>
              <div>
                <div className="text-xs text-[#F0EAD6]/30 tracking-[0.4em] mb-3 uppercase">Variants</div>
                <div className="space-y-1 text-[11px] text-[#F0EAD6]/40">
                  {planVariants.map((v) => (
                    <button key={v} onClick={() => setPlanVariant(v)}
                      className={`w-full text-left py-1 transition-colors ${planVariant === v ? 'text-[#39FF85]' : 'hover:text-[#F0EAD6]/60'}`}>
                      {planVariant === v && '▸ '}{v === 'A' ? 'A — Linear · 6 covers' : v === 'B' ? 'B — Social · round tables' : 'C — Omakase bar · 12 seats'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-[#F0EAD6]/10 text-center text-xs">·</div>
              <div className="mt-auto">
                <div className="text-xs text-[#F0EAD6]/30 tracking-[0.4em] mb-2 uppercase">Notes</div>
                <div className="text-[10px] text-[#F0EAD6]/20 leading-relaxed break-words">
                  All variants assume ground floor. Natural light from street-facing facade. Shared building WC acceptable for variant C.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 02 MENU */}
        {active === '02 MENU' && (
          <div className="h-full flex">
            <div className="flex-1 flex items-center justify-center p-8 min-w-0">
              <div style={{ transform: 'scale(1.8)', transformOrigin: 'center center' }}>
                <MenuDesign variant={menuVariant} />
              </div>
            </div>
            <div className="w-64 border-l border-[#F0EAD6]/8 p-6 flex flex-col gap-6 shrink-0 min-w-0 overflow-hidden">
              <div>
                <div className="text-xs text-[#F0EAD6]/30 tracking-[0.4em] mb-2 uppercase">Variants</div>
                <div className="flex gap-3 mb-4">
                  {menuVariants.map((v) => (
                    <button key={v} onClick={() => setMenuVariant(v)}
                      className={`text-[11px] tracking-widest transition-colors ${menuVariant === v ? 'text-[#39FF85]' : 'text-[#F0EAD6]/20 hover:text-[#F0EAD6]/40'}`}>
                      {menuVariant === v && '▸ '}VAR {v}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-[#F0EAD6]/10 text-center text-xs">·</div>
              <div>
                <div className="text-xs text-[#F0EAD6]/30 tracking-[0.4em] mb-3 uppercase">Format</div>
                <div className="text-[11px] text-[#F0EAD6]/50 leading-relaxed">
                  {menuVariant === 'A'
                    ? 'Traditional laminated card. Offset printed. Single fold.'
                    : 'Single item per card. Omakase style. Thermal print.'}
                </div>
              </div>
              <div className="text-[#F0EAD6]/10 text-center text-xs">·</div>
              <div>
                <div className="text-xs text-[#F0EAD6]/30 tracking-[0.4em] mb-3 uppercase">Language</div>
                <div className="text-[11px] text-[#F0EAD6]/50">繁體中文 + EN</div>
                <div className="text-[10px] text-[#F0EAD6]/20 mt-1">Traditional characters only</div>
              </div>
              <div className="text-[#F0EAD6]/10 text-center text-xs">·</div>
              <div>
                <div className="text-xs text-[#F0EAD6]/30 tracking-[0.4em] mb-3 uppercase">Currency</div>
                <div className="text-[11px] text-[#F0EAD6]/50">HKD · Cash preferred</div>
              </div>
              <div className="text-[#F0EAD6]/10 text-center text-xs">·</div>
              <div className="mt-auto text-[10px] text-[#F0EAD6]/20 leading-relaxed break-words">
                Menu design in progress. Final items TBD.
              </div>
            </div>
          </div>
        )}

        {/* 03 WORKWEAR */}
        {active === '03 WORKWEAR' && (
          <div className="h-full flex items-center justify-center gap-20 px-12">
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-3 mb-2">
                {(['front', 'back'] as const).map((v) => (
                  <button key={v} onClick={() => setView(v)}
                    className={`text-[10px] tracking-[0.3em] uppercase font-mono transition-colors ${
                      view === v ? 'text-[#F0EAD6]' : 'text-[#F0EAD6]/30 hover:text-[#F0EAD6]/50'
                    }`}>
                    {v}
                  </button>
                ))}
              </div>
              <div style={view === 'back' ? { transform: 'scaleX(-1)' } : undefined}>
                <TShirt />
              </div>
            </div>
            <div className="flex flex-col gap-7 max-w-xs">
              <div>
                <div className="text-xs text-[#F0EAD6]/30 tracking-[0.4em] mb-4 uppercase">Brand Identity Object · 001</div>
                <div className="text-5xl mb-3" style={{ fontFamily: 'serif' }}>小籠包</div>
                <div className="text-xl tracking-[0.5em] text-[#F0EAD6]/40">XLB</div>
              </div>
              <p className="text-[11px] text-[#F0EAD6]/40 leading-relaxed tracking-wide">
                We are designing an imaginary restaurant<br />
                in Hong Kong. We intend to build it.
              </p>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 text-[10px] tracking-widest font-mono border transition-colors ${
                      selectedSize === size
                        ? 'border-[#F0EAD6] text-[#F0EAD6]'
                        : 'border-[#F0EAD6]/20 text-[#F0EAD6]/30 hover:border-[#F0EAD6]/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="font-mono text-[9px] text-[#F0EAD6]/20 tracking-widest">SKU · XLB-TS-001</div>
              <div className="font-mono text-[#F0EAD6]/50 tracking-widest">
                <span className="text-[10px]">HKD </span>
                <span className="text-3xl font-bold text-[#F0EAD6]">380</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[10px] text-[#F0EAD6]/20 tracking-widest uppercase">
                  Drop 001 · Invite Only · 1000 pcs
                </p>
                <RunningBuyButton />
              </div>
              <p className="text-[10px] text-[#F0EAD6]/30 leading-relaxed max-w-[200px]">100% organic cotton. 280gsm heavyweight. Screen printed in Hong Kong. For the restaurant that does not exist yet.</p>
              <div className="flex flex-col gap-2">
                <label className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] uppercase font-mono">Notify Me on Drop</label>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="email"
                    className="bg-transparent border border-[#F0EAD6]/20 text-[#F0EAD6] text-[10px] tracking-widest px-3 py-1.5 font-mono placeholder:text-[#F0EAD6]/15 focus:outline-none focus:border-[#F0EAD6]/40 flex-1"
                  />
                  <button className="border border-l-0 border-[#F0EAD6]/20 px-3 py-1.5 text-[#F0EAD6]/40 hover:text-[#F0EAD6] transition-colors text-xs">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}



      </div>

      {/* Footer */}
      <footer className="h-7 border-t border-[#F0EAD6]/8 flex justify-between items-center px-8 text-[9px] text-[#F0EAD6]/20 shrink-0">
        <span>老板不在 · XLB · 2026</span>
        <span>v0.1.0</span>
        <span>SHAM SHUI PO · HK</span>
      </footer>

    </main>
  )
}
