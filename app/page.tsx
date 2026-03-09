'use client'

import { useState } from 'react'
import TShirt from '@/components/TShirt'
import RunningBuyButton from '@/components/RunningBuyButton'
import Planimetry from '@/components/Planimetry'
import MenuDesign from '@/components/MenuDesign'

const sections = ['01 PLANIMETRY', '02 MENU', '03 MERCH', '04 WORKWEAR'] as const
type Section = typeof sections[number]

const planVariants = ['A', 'B', 'C'] as const
type PlanVariant = typeof planVariants[number]

const menuVariants = ['A', 'B'] as const
type MenuVariant = typeof menuVariants[number]

export default function Home() {
  const [active, setActive] = useState<Section>('01 PLANIMETRY')
  const [planVariant, setPlanVariant] = useState<PlanVariant>('A')
  const [menuVariant, setMenuVariant] = useState<MenuVariant>('A')

  return (
    <main className="bg-[#0A0A0A] text-[#F0EAD6] h-screen overflow-hidden flex flex-col font-mono">

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-[#F0EAD6]/8 shrink-0">
        <div className="flex items-baseline gap-6">
          <span className="text-xl tracking-[0.4em] font-bold">XLB</span>
          <span className="text-[9px] text-[#F0EAD6]/25 tracking-[0.2em] uppercase">
            Restaurant Design Studio
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[9px] text-[#F0EAD6]/20 tracking-widest mr-3">CONFIDENTIAL · FOR CEO REVIEW</span>
          <span className="text-[#F0EAD6]/30 text-sm" style={{ fontFamily: 'serif' }}>老板不在</span>
        </div>
      </header>

      {/* Nav */}
      <nav className="flex gap-0 border-b border-[#F0EAD6]/8 shrink-0">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`px-8 py-3 text-[10px] tracking-[0.3em] uppercase border-r border-[#F0EAD6]/8 transition-colors ${
              active === s
                ? 'bg-[#F0EAD6]/5 text-[#F0EAD6]'
                : 'text-[#F0EAD6]/30 hover:text-[#F0EAD6]/60'
            }`}
          >
            {s}
          </button>
        ))}
        <div className="flex-1" />
        {/* Variant switcher */}
        {active === '01 PLANIMETRY' && (
          <div className="flex items-center gap-0 border-l border-[#F0EAD6]/8">
            {planVariants.map((v) => (
              <button
                key={v}
                onClick={() => setPlanVariant(v)}
                className={`px-5 py-3 text-[10px] tracking-[0.2em] transition-colors ${
                  planVariant === v
                    ? 'text-[#39FF85]'
                    : 'text-[#F0EAD6]/20 hover:text-[#F0EAD6]/40'
                }`}
              >
                VAR {v}
              </button>
            ))}
          </div>
        )}
        {active === '02 MENU' && (
          <div className="flex items-center gap-0 border-l border-[#F0EAD6]/8">
            {menuVariants.map((v) => (
              <button
                key={v}
                onClick={() => setMenuVariant(v)}
                className={`px-5 py-3 text-[10px] tracking-[0.2em] transition-colors ${
                  menuVariant === v
                    ? 'text-[#39FF85]'
                    : 'text-[#F0EAD6]/20 hover:text-[#F0EAD6]/40'
                }`}
              >
                VAR {v}
              </button>
            ))}
          </div>
        )}
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
            <div className="w-56 border-l border-[#F0EAD6]/8 p-6 flex flex-col gap-6 shrink-0">
              <div>
                <div className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] mb-3 uppercase">Project</div>
                <div className="text-[11px] text-[#F0EAD6]/70 leading-relaxed">
                  老板不在<br/>
                  <span className="text-[9px] text-[#F0EAD6]/30">Sham Shui Po, KL</span>
                </div>
              </div>
              <div>
                <div className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] mb-3 uppercase">Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#39FF85] animate-pulse"/>
                  <span className="text-[10px] text-[#39FF85]/80">IN DESIGN</span>
                </div>
              </div>
              <div>
                <div className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] mb-3 uppercase">Variants</div>
                <div className="space-y-2 text-[9px] text-[#F0EAD6]/40">
                  <div className={planVariant === 'A' ? 'text-[#F0EAD6]' : ''}>A — Linear · 6 covers</div>
                  <div className={planVariant === 'B' ? 'text-[#F0EAD6]' : ''}>B — Social · round tables</div>
                  <div className={planVariant === 'C' ? 'text-[#F0EAD6]' : ''}>C — Omakase bar · 12 seats</div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] mb-2 uppercase">Notes</div>
                <div className="text-[8px] text-[#F0EAD6]/20 leading-relaxed">
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
              <MenuDesign variant={menuVariant} />
            </div>
            <div className="w-56 border-l border-[#F0EAD6]/8 p-6 flex flex-col gap-6 shrink-0">
              <div>
                <div className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] mb-3 uppercase">Format</div>
                <div className="text-[9px] text-[#F0EAD6]/50 leading-relaxed">
                  {menuVariant === 'A'
                    ? 'Traditional laminated card. Offset printed. Single fold.'
                    : 'Single item per card. Omakase style. Thermal print.'}
                </div>
              </div>
              <div>
                <div className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] mb-3 uppercase">Language</div>
                <div className="text-[9px] text-[#F0EAD6]/50">繁體中文 + EN</div>
                <div className="text-[8px] text-[#F0EAD6]/20 mt-1">Traditional characters only</div>
              </div>
              <div>
                <div className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] mb-3 uppercase">Currency</div>
                <div className="text-[9px] text-[#F0EAD6]/50">HKD · Cash preferred</div>
              </div>
              <div className="mt-auto text-[8px] text-[#F0EAD6]/20 leading-relaxed">
                Menu design in progress. Final items TBD.
              </div>
            </div>
          </div>
        )}

        {/* 03 MERCH */}
        {active === '03 MERCH' && (
          <div className="h-full flex items-center justify-center gap-20 px-12">
            <div className="flex flex-col items-center gap-3">
              <TShirt />
            </div>
            <div className="flex flex-col gap-7 max-w-xs">
              <div>
                <div className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] mb-4 uppercase">Brand Identity Object · 001</div>
                <div className="text-5xl mb-3" style={{ fontFamily: 'serif' }}>小籠包</div>
                <div className="text-xl tracking-[0.5em] text-[#F0EAD6]/40">XLB</div>
              </div>
              <p className="text-[11px] text-[#F0EAD6]/40 leading-relaxed tracking-wide">
                We are designing an imaginary restaurant<br />
                in Hong Kong. We intend to build it.
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[10px] text-[#F0EAD6]/20 tracking-widest uppercase">
                  Drop 001 · Invite Only · 1000 pcs
                </p>
                <RunningBuyButton />
              </div>
            </div>
          </div>
        )}

        {/* 04 WORKWEAR */}
        {active === '04 WORKWEAR' && (
          <div className="h-full flex items-center justify-center gap-20 px-12">
            <div className="flex flex-col items-center gap-3">
              <TShirt />
            </div>
            <div className="flex flex-col gap-6 max-w-xs">
              <div>
                <div className="text-[9px] text-[#F0EAD6]/30 tracking-[0.3em] mb-4 uppercase">Uniform Specification · 001</div>
                <div className="text-5xl mb-3" style={{ fontFamily: 'serif' }}>小籠包</div>
                <div className="text-xl tracking-[0.5em] text-[#F0EAD6]/40">XLB</div>
              </div>
              <div className="border border-[#C0392B]/40 px-5 py-3 inline-block">
                <span className="text-[11px] tracking-[0.4em] text-[#C0392B] uppercase font-bold">
                  For Employees Only
                </span>
              </div>
              <div className="space-y-1.5 text-[10px] text-[#F0EAD6]/25 tracking-wide leading-relaxed">
                <div>Issue date: TBD</div>
                <div>Staff allocation: 1 per employee</div>
                <div>Not for resale</div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center px-8 py-3 border-t border-[#F0EAD6]/8 shrink-0">
        <span className="text-[9px] text-[#F0EAD6]/20 tracking-widest">
          老板不在 · Sham Shui Po, HK · Design Rev.001
        </span>
        <span className="text-[9px] text-[#F0EAD6]/15 tracking-widest">
          xlb.ristorante
        </span>
      </footer>

    </main>
  )
}
