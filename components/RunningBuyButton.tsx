'use client'

import { useState, useRef, useCallback } from 'react'

export default function RunningBuyButton() {
  const [escapeCount, setEscapeCount] = useState(0)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [text, setText] = useState('Buy')
  const [surrendered, setSurrendered] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const MAX_ESCAPES = 7

  const showToastMsg = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  const handleMouseEnter = useCallback(() => {
    if (surrendered || showForm) return

    if (escapeCount >= MAX_ESCAPES) {
      setSurrendered(true)
      setText('包包不見了')
      setPos(null)
      setTimeout(() => {
        setSurrendered(false)
        setText('Buy')
      }, 2000)
      return
    }

    const newCount = escapeCount + 1
    setEscapeCount(newCount)

    const btnW = btnRef.current?.offsetWidth ?? 120
    const btnH = btnRef.current?.offsetHeight ?? 48
    const vw = window.innerWidth - btnW - 32
    const vh = window.innerHeight - btnH - 32

    setPos({
      x: Math.max(16, Math.random() * vw),
      y: Math.max(16, Math.random() * vh),
    })

    if (newCount === 4) {
      setText('...')
      setTimeout(() => setText('Buy'), 900)
    }

    if (newCount === 6) {
      showToastMsg('七次。Qī cì. Sette volte.')
    }
  }, [escapeCount, surrendered, showForm])

  const handleClick = () => {
    if (escapeCount >= MAX_ESCAPES && !surrendered) {
      setShowForm(true)
      setPos(null)
    }
  }

  const buttonStyle: React.CSSProperties = pos
    ? {
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        transition:
          escapeCount === 4
            ? 'all 0.45s ease-out'
            : `all ${0.15 + Math.random() * 0.15}s ease-out`,
        zIndex: 9999,
      }
    : {}

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[10000] font-mono text-xs text-[#F0EAD6]/60 tracking-widest pointer-events-none">
          {toast}
        </div>
      )}

      {/* Invite-only form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[10001]">
          <div className="border border-[#C0392B] p-10 max-w-sm w-full mx-4">
            <p className="font-mono text-[#F0EAD6] text-sm mb-1 tracking-widest">你明白嗎？</p>
            <p className="font-mono text-[#F0EAD6]/40 text-xs mb-8 leading-relaxed">
              You made it. Now prove you were invited.
            </p>
            <input
              type="text"
              placeholder="_ _ _ _ _ _"
              autoFocus
              className="w-full bg-transparent border border-[#F0EAD6]/20 text-[#F0EAD6] font-mono text-center p-3 mb-4 focus:outline-none focus:border-[#C0392B] tracking-[0.5em] placeholder-[#F0EAD6]/20"
            />
            <button
              className="w-full border border-[#C0392B] text-[#C0392B] font-mono text-xs py-3 tracking-widest uppercase hover:bg-[#C0392B] hover:text-[#F0EAD6] transition-colors"
            >
              Submit
            </button>
            <button
              onClick={() => {
                setShowForm(false)
                setEscapeCount(0)
                setText('Buy')
                setPos(null)
              }}
              className="w-full mt-3 font-mono text-[10px] text-[#F0EAD6]/20 hover:text-[#F0EAD6]/40 transition-colors tracking-widest"
            >
              ← back
            </button>
          </div>
        </div>
      )}

      {/* The button */}
      <button
        ref={btnRef}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        style={buttonStyle}
        className={`font-mono text-xs tracking-[0.3em] uppercase px-8 py-4 border transition-colors cursor-pointer ${
          surrendered
            ? 'border-[#B8860B] text-[#B8860B] bg-transparent pointer-events-none text-base'
            : 'border-[#C0392B] text-[#F0EAD6] bg-[#C0392B] hover:bg-transparent hover:text-[#C0392B]'
        }`}
      >
        {text}
      </button>

      {/* Escape counter */}
      {!showForm && (
        <div className="fixed bottom-4 right-5 font-mono text-[9px] text-[#F0EAD6]/15 tracking-widest pointer-events-none">
          {escapeCount}/{MAX_ESCAPES}
        </div>
      )}
    </>
  )
}
