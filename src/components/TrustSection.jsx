import React from 'react';
import { ShieldCheck, Truck, Headphones, RotateCcw } from 'lucide-react';

export default function TrustSection() {
  const FEATURES = [
    {
      icon: ShieldCheck,
      title: 'Garantía 3 Años Nk',
      desc: 'Cobertura completa oficial y sustitución directa sin demoras.'
    },
    {
      icon: Truck,
      title: 'Envíos Exprés 24h',
      desc: 'Entregas ultrarrápidas con seguimiento GPS en tiempo real.'
    },
    {
      icon: Headphones,
      title: 'Soporte Técnico Pro',
      desc: 'Asesoramiento experto en ensambles PC y asesoría tecnológica.'
    },
    {
      icon: RotateCcw,
      title: 'Devolución en 30 Días',
      desc: 'Reembolso 100% garantizado si no quedas totalmente satisfecho.'
    }
  ];

  return (
    <section style={{
      background: 'var(--surface-1)',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      padding: '40px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          {FEATURES.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '16px',
                  borderRadius: 'var(--r-md)',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--line)',
                  transition: 'transform 0.2s'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={22} color="var(--brand-purple)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '4px' }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
