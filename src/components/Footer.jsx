import React, { useState } from 'react';
import { Zap, Send, ShieldCheck, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer style={{
      background: 'var(--bg-main)',
      borderTop: '1px solid var(--line)',
      padding: '60px 0 30px',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        
        {/* Newsletter Banner */}
        <div className="glass-panel" style={{
          padding: '30px',
          borderRadius: 'var(--r-lg)',
          marginBottom: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '6px' }}>
              Únete al Club Vip de <span style={{ color: 'var(--brand-red)' }}>Nk Electronics</span>
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Recibe un **10% de descuento** en tu primera compra y entérate antes que nadie de las Ofertas Flash.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', minWidth: '280px', flex: 1, maxWidth: '420px' }}>
            <input
              type="email"
              placeholder="Tu correo electrónico..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                background: 'var(--surface-2)',
                border: '1px solid var(--line)',
                padding: '12px 16px',
                borderRadius: 'var(--r-pill)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--brand-red)',
                color: '#FFFFFF',
                padding: '12px 20px',
                borderRadius: 'var(--r-pill)',
                fontWeight: '700',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 0 12px var(--brand-red-glow)'
              }}
            >
              <span>{subscribed ? '¡Suscrito!' : 'Suscribirme'}</span>
              <Send size={14} />
            </button>
          </form>
        </div>

        {/* Footer Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Zap size={18} color="#FFFFFF" fill="#FFFFFF" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: '900', fontSize: '1.2rem', color: '#FFFFFF' }}>
                NK <span style={{ color: 'var(--brand-red)' }}>ELECTRONICS</span>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
              Tu tienda especializada de tecnología, gaming y electrónica de vanguardia. Calidad, garantía directa y atención personalizada.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Categorías
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <li><a href="#" style={{ transition: 'color 0.15s' }}>Laptops Gaming RTX</a></li>
              <li><a href="#" style={{ transition: 'color 0.15s' }}>Tarjetas Gráficas</a></li>
              <li><a href="#" style={{ transition: 'color 0.15s' }}>Procesadores Intel & AMD</a></li>
              <li><a href="#" style={{ transition: 'color 0.15s' }}>Monitores Curved OLED</a></li>
              <li><a href="#" style={{ transition: 'color 0.15s' }}>Periféricos RGB Custom</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Ayuda & Soporte
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <li><a href="#">Seguimiento de Envíos</a></li>
              <li><a href="#">Política de Garantías</a></li>
              <li><a href="#">Devoluciones y Cambios</a></li>
              <li><a href="#">Servicio Técnico Pro</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Servicios Especiales
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <li><a href="#">Configurador de PC a Medida</a></li>
              <li><a href="#">Financiación al 0%</a></li>
              <li><a href="#">Venta Corporativa & B2B</a></li>
              <li><a href="#">Tiendas Físicas</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div style={{
          borderTop: '1px solid var(--line)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem'
        }}>
          <div>
            © 2026 <strong>Nk Electronics</strong>. Todos los derechos reservados.
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#">Privacidad</a>
            <a href="#">Términos y Condiciones</a>
            <a href="#">Aviso Legal</a>
            <a href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
