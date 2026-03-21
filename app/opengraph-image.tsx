import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MotoFix Serwis — Warsztat Samochodowy Kraków'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          backgroundColor: '#121418',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-80px',
            width: '520px',
            height: '520px',
            borderRadius: '999px',
            background: 'radial-gradient(circle, rgba(43,127,255,0.14) 0%, transparent 72%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '-220px',
            right: '-120px',
            width: '680px',
            height: '680px',
            borderRadius: '999px',
            background: 'radial-gradient(circle, rgba(43,127,255,0.1) 0%, transparent 72%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            backgroundColor: '#2B7FFF',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            padding: '78px 84px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{ width: '26px', height: '2px', backgroundColor: '#2B7FFF' }} />
            <span
              style={{
                fontSize: '14px',
                color: '#2B7FFF',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
              }}
            >
              Warsztat samochodowy • Kraków
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '96px',
              fontWeight: 900,
              color: '#F2F5F8',
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
              textTransform: 'uppercase',
            }}
          >
            <span>MotoFix</span>
            <span style={{ color: '#2B7FFF' }}>Serwis</span>
          </div>

          <div style={{ width: '64px', height: '4px', backgroundColor: '#2B7FFF', marginBottom: '24px' }} />

          <div
            style={{
              display: 'flex',
              maxWidth: '760px',
              fontSize: '26px',
              color: '#A7B1C1',
              lineHeight: 1.45,
            }}
          >
            Diagnostyka, serwis i naprawy premium. Uczciwa wycena, szybkie terminy i konkretna komunikacja.
          </div>

          <div style={{ display: 'flex', gap: '44px', marginTop: '42px' }}>
            {[
              { value: '15+', label: 'lat doświadczenia' },
              { value: '3000+', label: 'napraw' },
              { value: '4.9', label: 'ocena klientów' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '34px',
                    fontWeight: 700,
                    color: '#F2F5F8',
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: '#2B7FFF',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    marginTop: '10px',
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              position: 'absolute',
              right: '84px',
              bottom: '62px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontSize: '15px',
                color: '#F2F5F8',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              ul. Przemysłowa 12
            </span>
            <span
              style={{
                fontSize: '13px',
                color: '#A7B1C1',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              Kraków • serwis01.vercel.app
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
