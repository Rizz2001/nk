import React, { useState, useEffect } from 'react';
import { Zap, Clock, ShieldCheck, ArrowRight, Flame, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function HeroBanner() {
  const { setSelectedProduct, addToCart } = useCart();
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 42, seconds: 19 });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashProduct = PRODUCTS.find(p => p.isFlash) || PRODUCTS[0];

  return (
    <section style={{ padding: '24px 0 32px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)',
          gap: '20px',
          alignItems: 'stretch'
        }} className="hero-grid">
          
          {/* Main Tech Launch Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(22, 22, 30, 0.95) 0%, rgba(9, 9, 11, 0.98) 100%)',
            borderRadius: 'var(--r-lg)',
            border: '1px solid var(--line)',
            padding: 'clamp(24px, 4vw, 40px)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-card)'
          }}>
            {/* Background Accent Glows */}
            <div style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'var(--brand-purple)',
              filter: 'blur(120px)',
              opacity: 0.25,
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-80px',
              left: '-80px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'var(--brand-red)',
              filter: 'blur(120px)',
              opacity: 0.2,
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--r-pill)', background: 'rgba(124, 58, 237, 0.15)', border: '1px solid rgba(124, 58, 237, 0.4)', color: 'var(--brand-purple)', fontSize: '0.8rem', fontWeight: '700', marginBottom: '16px' }}>
                <Sparkles size={16} />
                <span>LANZAMIENTO EXCLUSIVO 2026</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '16px',
                color: '#FFFFFF'
              }}>
                NUEVAS LAPTOPS GAMING <br />
                <span style={{
                  background: 'var(--gradient-brand)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>
                  RTX SERIE 40 ULTRA
                </span>
              </h1>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1rem',
                maxWidth: '520px',
                marginBottom: '28px'
              }}>
                Potencia gráfica sin precedentes con DLSS 3.5, pantallas Mini LED 240Hz y refrigeración con metal líquido en Nk Electronics.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setSelectedProduct(flashProduct)}
                  style={{
                    background: 'var(--brand-red)',
                    color: '#FFFFFF',
                    padding: '14px 28px',
                    borderRadius: 'var(--r-pill)',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 0 25px var(--brand-red-glow)',
                    transition: 'transform 0.2s, background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span>Explorar Ofertas</span>
                  <ArrowRight size={18} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <ShieldCheck size={18} color="var(--success)" />
                  <span>3 Años de Garantía Oficial</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flash Deals Widget with Live Countdown */}
          <div style={{
            background: 'var(--surface-1)',
            borderRadius: 'var(--r-lg)',
            border: '1px solid var(--brand-red)',
            boxShadow: '0 0 20px rgba(255, 0, 60, 0.15)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            {/* Header of Flash Sales */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-red)', fontWeight: '800', fontSize: '1.05rem' }}>
                  <Flame size={20} />
                  <span>OFERTA FLASH 24H</span>
                </div>

                <div className="badge badge-red">
                  -{flashProduct.discount}% DTO.
                </div>
              </div>

              {/* Timer */}
              <div style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r-md)',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  <Clock size={16} color="var(--brand-purple)" />
                  <span>TERMINA EN:</span>
                </div>
                <div style={{
                  fontFamily: 'monospace',
                  fontWeight: '800',
                  fontSize: '1.1rem',
                  color: 'var(--brand-red)',
                  letterSpacing: '0.1em'
                }}>
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>

              {/* Product Preview */}
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <div style={{
                  height: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                  position: 'relative'
                }}>
                  <img
                    src={flashProduct.image}
                    alt={flashProduct.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      borderRadius: 'var(--r-sm)'
                    }}
                  />
                </div>

                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: 'var(--text-main)',
                  marginBottom: '8px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {flashProduct.name}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--brand-red)' }}>
                    ${flashProduct.price.toFixed(2)}
                  </span>
                  {flashProduct.originalPrice && (
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                      ${flashProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => addToCart(flashProduct)}
              style={{
                width: '100%',
                background: 'var(--gradient-brand)',
                color: '#FFFFFF',
                padding: '12px',
                borderRadius: 'var(--r-pill)',
                fontWeight: '700',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 0 15px var(--brand-purple-glow)',
                transition: 'opacity 0.2s'
              }}
            >
              <Zap size={18} />
              <span>Añadir Flash a la Cesta</span>
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
