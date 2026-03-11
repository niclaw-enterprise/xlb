'use client'

import { useState, useRef, useCallback } from 'react'

export default function RunningBuyButton() {
  const [escapeCount, setEscapeCount] = useState(0)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [transDuration, setTransDuration] = useState(0.2)
  const [text, setText] = useState('Buy')
  const [surrendered, setSurrendered] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [code, setCode] = useState('')
  const [codeError, setCodeError] = useState<string | null>(null)
  const [codeAttempts, setCodeAttempts] = useState(0)
  const [codeAccepted, setCodeAccepted] = useState(false)

  const REJECTIONS = [
    '不對。 Wrong.',
    'Nope. Keep trying.',
    '想太多了。',
    '三次了。Still no.',
    'The boss is not here.',
    '你不是被邀請的人。',
    '試到天亮都沒用。',
  ]
  const SECRET_CODES = ['XLB001', '老板不在', 'LAOBAN', 'BOSS', '老板']

  const handleCodeSubmit = () => {
    const trimmed = code.trim().toUpperCase()
    const matched = SECRET_CODES.some(c => trimmed === c.toUpperCase())
    if (matched) {
      setCodeAccepted(true)
      setCodeError(null)
    } else {
      const attempt = codeAttempts
      setCodeAttempts(a => a + 1)
      setCodeError(REJECTIONS[attempt % REJECTIONS.length])
    }
  }
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

    setTransDuration(0.15 + Math.random() * 0.15)
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
            : `all ${transDuration}s ease-out`,
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
            {codeAccepted ? (
              /* Success state */
              <div className="text-center">
                <div className="text-4xl mb-4" style={{ fontFamily: 'serif', color: '#39FF85' }}>你進來了</div>
                <p className="font-mono text-[#39FF85]/60 text-xs tracking-[0.3em] mb-2">YOU&apos;RE IN</p>
                <p className="font-mono text-[#F0EAD6]/30 text-[10px] tracking-widest mt-6 leading-relaxed">
                  Drop 001 notification sent.<br/>We&apos;ll find you when the time comes.
                </p>
              </div>
            ) : (
              /* Input state */
              <>
                <p className="font-mono text-[#F0EAD6] text-sm mb-1 tracking-widest">你明白嗎？</p>
                <p className="font-mono text-[#F0EAD6]/40 text-xs mb-8 leading-relaxed">
                  You made it. Now prove you were invited.
                </p>
                <input
                  type="text"
                  value={code}
                  onChange={e => { setCode(e.target.value); setCodeError(null) }}
                  onKeyDown={e => e.key === 'Enter' && handleCodeSubmit()}
                  placeholder="_ _ _ _ _ _"
                  autoFocus
                  className="w-full bg-transparent border border-[#F0EAD6]/20 text-[#F0EAD6] font-mono text-center p-3 mb-2 focus:outline-none focus:border-[#C0392B] tracking-[0.5em] placeholder-[#F0EAD6]/20"
                />
                {codeError && (
                  <p className="font-mono text-[10px] text-[#C0392B]/80 text-center mb-3 tracking-widest">{codeError}</p>
                )}
                {!codeError && <div className="mb-4" />}
                <button
                  onClick={handleCodeSubmit}
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
                    setCode('')
                    setCodeError(null)
                    setCodeAttempts(0)
                    setCodeAccepted(false)
                  }}
                  className="w-full mt-3 font-mono text-[10px] text-[#F0EAD6]/20 hover:text-[#F0EAD6]/40 transition-colors tracking-widest"
                >
                  ← back
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* The button */}
      <button
        ref={btnRef}
        onMouseEnter={handleMouseEnter}
        onTouchStart={(e) => {
          // On touch: each tap counts as a "chase" — button jumps on touch too
          if (surrendered || showForm) return
          e.preventDefault() // prevent ghost click
          if (escapeCount >= MAX_ESCAPES) {
            setShowForm(true)
            setPos(null)
          } else {
            handleMouseEnter()
          }
        }}
        onClick={handleClick}
        style={buttonStyle}
        className={`buy-btn-glow font-mono text-xs tracking-[0.3em] uppercase px-8 py-4 border transition-colors cursor-pointer ${
          surrendered
            ? 'border-[#B8860B] text-[#B8860B] bg-transparent pointer-events-none text-base'
            : 'border-[#C0392B] text-[#F0EAD6] bg-[#C0392B] hover:bg-transparent hover:text-[#C0392B]'
        }`}
      >
        {text}
      </button>

      {/* Escape counter — only shown after first interaction */}
      {!showForm && escapeCount > 0 && (
        <div className="fixed bottom-4 right-5 font-mono text-[9px] text-[#F0EAD6]/15 tracking-widest pointer-events-none">
          {escapeCount}/{MAX_ESCAPES}
        </div>
      )}
    </>
  )
}
