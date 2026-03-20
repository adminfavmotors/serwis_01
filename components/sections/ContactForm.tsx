'use client'

import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock, MapPin, Phone } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, { message: 'Imię i nazwisko musi mieć co najmniej 2 znaki' }),
  phone: z
    .string()
    .min(9, { message: 'Podaj prawidłowy numer telefonu' })
    .regex(/^[\d\s\+\-\(\)]{9,}$/, { message: 'Nieprawidłowy format numeru' }),
  car: z.string().min(2, { message: 'Podaj markę i model pojazdu' }),
  problem: z.string().min(10, { message: 'Opis musi mieć co najmniej 10 znaków' }),
  date: z.string().min(1, { message: 'Wybierz preferowany termin' }),
  rodo: z.boolean().refine((value) => value === true, {
    message: 'Zgoda na przetwarzanie danych jest wymagana',
  }),
})

type FormData = z.infer<typeof schema>

const inputStyle = {
  width: '100%',
  backgroundColor: '#16181C',
  border: '1px solid #252830',
  color: '#EAEDF2',
  fontFamily: 'var(--font-body)',
  fontSize: '15px',
  padding: '14px 16px',
  borderRadius: '2px',
  outline: 'none',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
} as const

const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '12px',
  fontWeight: 600,
  color: '#6B7280',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  display: 'block',
  marginBottom: '8px',
} as const

const errorStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '12px',
  color: '#FF3B3B',
  marginTop: '6px',
} as const

function applyInputFocus(target: HTMLInputElement | HTMLTextAreaElement) {
  target.style.borderColor = '#2B7FFF'
  target.style.boxShadow = '0 0 0 3px rgba(43,127,255,0.12)'
}

function clearInputFocus(target: HTMLInputElement | HTMLTextAreaElement, hasError: boolean) {
  target.style.borderColor = hasError ? '#FF3B3B' : '#252830'
  target.style.boxShadow = 'none'
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { rodo: false },
  })

  const rodoValue = useWatch({ control, name: 'rodo' })

  const onSubmit = async (data: FormData) => {
    setError(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        return
      }

      setError(true)
    } catch {
      setError(true)
    }
  }

  return (
    <section
      id="kontakt"
      style={{
        backgroundColor: '#0E0F11',
        borderTop: '1px solid #252830',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      <div
        className="grid-texture"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-18%',
          left: '-10%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,127,255,0.08) 0%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '56px' }}
        >
          <span className="section-label">Kontakt</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 700,
              color: '#EAEDF2',
              textTransform: 'uppercase',
              lineHeight: 0.92,
            }}
          >
            UMÓW
            <br />
            <span style={{ color: '#2B7FFF' }}>WIZYTĘ</span>
          </h2>
        </motion.div>

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(320px, 0.9fr)',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '18px',
                  padding: '40px',
                  backgroundColor: '#16181C',
                  border: '1px solid #252830',
                  borderRadius: '4px',
                  boxShadow: '0 18px 40px rgba(0,0,0,0.22)',
                }}
              >
                <CheckCircle size={40} color="#2B7FFF" strokeWidth={1.5} />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    color: '#EAEDF2',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                  }}
                >
                  Dziękujemy
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: '#6B7280',
                    lineHeight: 1.7,
                    maxWidth: '520px',
                  }}
                >
                  Twoje zgłoszenie zostało przyjęte. Odezwiemy się w ciągu 15 minut, żeby
                  potwierdzić termin i ustalić kolejne kroki.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    padding: '32px',
                    backgroundColor: '#16181C',
                    border: '1px solid #252830',
                    borderRadius: '4px',
                    boxShadow: '0 18px 40px rgba(0,0,0,0.22)',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                      gap: '24px',
                    }}
                    className="contact-form-grid"
                  >
                    <div>
                      <label htmlFor="name" style={labelStyle}>
                        Imię i nazwisko *
                      </label>
                      <input
                        id="name"
                        {...register('name')}
                        placeholder="np. Jan Kowalski"
                        style={{ ...inputStyle, borderColor: errors.name ? '#FF3B3B' : '#252830' }}
                        onFocus={(event) => applyInputFocus(event.target)}
                        onBlur={(event) => clearInputFocus(event.target, Boolean(errors.name))}
                      />
                      {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" style={labelStyle}>
                        Numer telefonu *
                      </label>
                      <input
                        id="phone"
                        {...register('phone')}
                        type="tel"
                        placeholder="np. +48 600 000 000"
                        style={{
                          ...inputStyle,
                          borderColor: errors.phone ? '#FF3B3B' : '#252830',
                        }}
                        onFocus={(event) => applyInputFocus(event.target)}
                        onBlur={(event) => clearInputFocus(event.target, Boolean(errors.phone))}
                      />
                      {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="car" style={labelStyle}>
                      Marka i model pojazdu *
                    </label>
                    <input
                      id="car"
                      {...register('car')}
                      placeholder="np. Volkswagen Golf VII 1.6 TDI"
                      style={{ ...inputStyle, borderColor: errors.car ? '#FF3B3B' : '#252830' }}
                      onFocus={(event) => applyInputFocus(event.target)}
                      onBlur={(event) => clearInputFocus(event.target, Boolean(errors.car))}
                    />
                    {errors.car && <p style={errorStyle}>{errors.car.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="problem" style={labelStyle}>
                      Opis problemu *
                    </label>
                    <textarea
                      id="problem"
                      {...register('problem')}
                      rows={5}
                      placeholder="Opisz objawy lub usterkę, którą chcesz naprawić..."
                      style={{
                        ...inputStyle,
                        borderColor: errors.problem ? '#FF3B3B' : '#252830',
                        minHeight: '136px',
                        resize: 'vertical',
                      }}
                      onFocus={(event) => applyInputFocus(event.target)}
                      onBlur={(event) => clearInputFocus(event.target, Boolean(errors.problem))}
                    />
                    {errors.problem && <p style={errorStyle}>{errors.problem.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="date" style={labelStyle}>
                      Preferowany termin *
                    </label>
                    <input
                      id="date"
                      {...register('date')}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      style={{
                        ...inputStyle,
                        borderColor: errors.date ? '#FF3B3B' : '#252830',
                        colorScheme: 'dark',
                      }}
                      onFocus={(event) => applyInputFocus(event.target)}
                      onBlur={(event) => clearInputFocus(event.target, Boolean(errors.date))}
                    />
                    {errors.date && <p style={errorStyle}>{errors.date.message}</p>}
                  </div>

                  <div style={{ paddingTop: '8px', borderTop: '1px solid #252830' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ position: 'relative', flexShrink: 0, marginTop: '2px' }}>
                        <input
                          id="rodo"
                          type="checkbox"
                          {...register('rodo')}
                          style={{
                            position: 'absolute',
                            opacity: 0,
                            inset: 0,
                            width: '20px',
                            height: '20px',
                            cursor: 'pointer',
                            zIndex: 1,
                          }}
                        />
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            border: `2px solid ${rodoValue ? '#2B7FFF' : '#252830'}`,
                            borderRadius: '2px',
                            backgroundColor: rodoValue ? 'rgba(43,127,255,0.12)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.15s ease',
                            pointerEvents: 'none',
                          }}
                        >
                          {rodoValue ? (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <polyline
                                points="2 6 5 9 10 3"
                                stroke="#2B7FFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : null}
                        </div>
                      </div>

                      <label
                        htmlFor="rodo"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '13px',
                          color: '#6B7280',
                          lineHeight: 1.65,
                          cursor: 'pointer',
                        }}
                      >
                        Wyrażam zgodę na przetwarzanie moich danych osobowych przez{' '}
                        <span style={{ color: '#EAEDF2' }}>MotoFix Serwis</span> w celu
                        udzielenia odpowiedzi na przesłane zapytanie, zgodnie z{' '}
                        <a
                          href="/polityka-prywatnosci"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#2B7FFF', textDecoration: 'underline' }}
                        >
                          Polityką Prywatności
                        </a>
                        . <span style={{ color: '#2B7FFF' }}>*</span>
                      </label>
                    </div>
                    {errors.rodo && <p style={errorStyle}>{errors.rodo.message}</p>}
                  </div>

                  {error ? (
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: '#FF3B3B',
                        padding: '12px 16px',
                        backgroundColor: 'rgba(255,59,59,0.08)',
                        border: '1px solid rgba(255,59,59,0.2)',
                        borderRadius: '2px',
                      }}
                    >
                      Wystąpił błąd. Spróbuj ponownie lub skontaktuj się z nami telefonicznie.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      opacity: isSubmitting ? 0.72 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
                    {isSubmitting ? null : <ArrowRight size={16} />}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div
              style={{
                backgroundColor: '#16181C',
                border: '1px solid #252830',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 18px 40px rgba(0,0,0,0.22)',
              }}
            >
              <div style={{ height: '3px', backgroundColor: '#2B7FFF' }} />

              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span className="section-label" style={{ marginBottom: '14px' }}>
                    Dane serwisu
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#EAEDF2',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Kontakt bezpośredni
                  </h3>
                </div>

                {[
                  {
                    icon: MapPin,
                    label: 'Adres',
                    value: 'ul. Przemysłowa 12, 30-701 Kraków',
                  },
                  {
                    icon: Phone,
                    label: 'Telefon',
                    value: '+48 123 456 789',
                    href: 'tel:+48123456789',
                  },
                  {
                    icon: Clock,
                    label: 'Godziny',
                    value: 'Pn–Pt 08:00–18:00\nSob 09:00–14:00',
                  },
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          backgroundColor: 'rgba(43,127,255,0.1)',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={16} color="#2B7FFF" strokeWidth={1.5} />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '11px',
                            color: '#3A4150',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                          }}
                        >
                          {item.label}
                        </span>

                        {item.href ? (
                          <a
                            href={item.href}
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '15px',
                              color: '#EAEDF2',
                              textDecoration: 'none',
                              transition: 'color 0.15s ease',
                            }}
                            onMouseEnter={(event) => {
                              event.currentTarget.style.color = '#2B7FFF'
                            }}
                            onMouseLeave={(event) => {
                              event.currentTarget.style.color = '#EAEDF2'
                            }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span
                            style={{
                              fontFamily: item.label === 'Godziny' ? 'var(--font-mono)' : 'var(--font-body)',
                              fontSize: '14px',
                              color: '#EAEDF2',
                              whiteSpace: 'pre-line',
                              lineHeight: 1.6,
                            }}
                          >
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid #252830',
                boxShadow: '0 18px 40px rgba(0,0,0,0.22)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.1234!2d19.9450!3d50.0647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMotoFix+Serwis!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="260"
                style={{
                  border: 0,
                  display: 'block',
                  filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.05)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MotoFix Serwis — lokalizacja Kraków"
              />
            </div>

            <a
              href="https://maps.google.com/?q=ul.+Przemysłowa+12,+30-701+Kraków"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                width: 'fit-content',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: '#2B7FFF',
                textDecoration: 'none',
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.opacity = '0.72'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.opacity = '1'
              }}
            >
              <MapPin size={14} />
              Otwórz w Google Maps
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr) !important;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 640px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ContactForm
export { ContactForm }
