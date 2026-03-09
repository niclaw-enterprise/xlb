import TShirt from '@/components/TShirt'
import RunningBuyButton from '@/components/RunningBuyButton'

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-[#F0EAD6] h-screen overflow-hidden flex flex-col font-mono">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-5 border-b border-[#F0EAD6]/8">
        <span className="text-2xl tracking-[0.4em] font-bold">XLB</span>
        <span
          className="text-[#F0EAD6]/30 text-sm tracking-wide"
          style={{ fontFamily: 'serif' }}
        >
          老板不在
        </span>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center gap-20 px-12 min-h-0">
        {/* T-shirt column */}
        <div className="flex flex-col items-center gap-3 shrink-0">
          <TShirt />
          <span className="text-[9px] text-[#F0EAD6]/20 tracking-[0.3em] uppercase">
            [ AI Generated ]
          </span>
        </div>

        {/* Brand + CTA column */}
        <div className="flex flex-col gap-7 max-w-xs">
          <div>
            <div
              className="text-6xl mb-3 text-[#F0EAD6]"
              style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}
            >
              小籠包
            </div>
            <div className="text-xl tracking-[0.5em] text-[#F0EAD6]/40">
              XLB
            </div>
          </div>

          <p className="text-[11px] text-[#F0EAD6]/40 leading-relaxed tracking-wide">
            The merch of a restaurant<br />
            that doesn&apos;t exist.
          </p>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-[#F0EAD6]/20 tracking-widest uppercase">
              Drop 001 · Invite Only · 1000 pcs
            </p>
            <RunningBuyButton />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center px-8 py-4 border-t border-[#F0EAD6]/8">
        <span className="text-[10px] text-[#F0EAD6]/25 tracking-widest">
          老板不在 · Sham Shui Po, HK
        </span>
        <span className="text-[10px] text-[#F0EAD6]/15 tracking-widest">
          xlb.ristorante
        </span>
      </footer>
    </main>
  )
}
