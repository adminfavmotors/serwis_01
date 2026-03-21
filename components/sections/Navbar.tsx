'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Usługi', href: '#uslugi' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'Kontakt', href: '#kontakt' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: scrolled ? 'rgba(18,20,24,0.94)' : 'transparent',
          borderBottom: scrolled ? '1px solid #2D3340' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div
          className="container-site"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
        >
          <a
            href="#top"
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1,
              gap: '2px',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 700,
                color: '#F2F5F8',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              MOTOFIX
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                color: '#2B7FFF',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              SERWIS
            </span>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#A7B1C1',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = '#F2F5F8'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = '#A7B1C1'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }} className="nav-desktop">
            <a
              href="tel:+48123456789"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: '#A7B1C1',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = '#F2F5F8'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = '#A7B1C1'
              }}
            >
              +48 123 456 789
            </a>
            <a href="#kontakt" className="btn-primary" style={{ padding: '10px 22px', fontSize: '13px' }}>
              Umów wizytę
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            className="nav-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                style={{
                  display: 'block',
                  width: index === 1 ? '20px' : '28px',
                  height: '2px',
                  backgroundColor: '#F2F5F8',
                  marginLeft: index === 1 ? '4px' : '0',
                }}
              />
            ))}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '68px',
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99,
              backgroundColor: '#121418',
              borderTop: '1px solid #2D3340',
              display: 'flex',
              flexDirection: 'column',
              padding: '40px 24px',
              gap: '8px',
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06, duration: 0.3 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#F2F5F8',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid #2D3340',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = '#2B7FFF'
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = '#F2F5F8'
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a
                href="tel:+48123456789"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '18px',
                  color: '#A7B1C1',
                  textDecoration: 'none',
                }}
              >
                +48 123 456 789
              </a>
              <a href="#kontakt" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ textAlign: 'center' }}>
                Umów wizytę
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile { display: none !important; }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar
export { Navbar }
