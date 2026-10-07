import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Star, Truck, ShieldCheck, ShoppingCart, Zap, Check } from 'lucide-react';

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Backdrop */}
      <div
        onClick={() => setSelectedProduct(null)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(6px)'
        }}
      />

      {/* Modal Card */}
      <div className="glass-panel animate-fade-in" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '850px',
        maxHeight: '90vh',
        overflowY: 'auto',
        borderRadius: 'var(--r-lg)',
        boxShadow: 'var(--shadow-card)',
        padding: 'clamp(20px, 4vw, 32px)',
        zIndex: 10
      }}>
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'var(--text-muted)',
            padding: '6px',
            borderRadius: '50%',
            background: 'var(--surface-2)',
            display: 'flex'
          }}
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {/* Left Column: Image */}
          <div style={{
            background: 'var(--surface-2)',
            borderRadius: 'var(--r-md)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '340px'
          }}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Right Column: Info & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-purple">{selectedProduct.brand}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{selectedProduct.category}</span>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>
                {selectedProduct.name}
              </h2>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', color: 'var(--warning)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(selectedProduct.rating) ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  {selectedProduct.rating} / 5
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  ({selectedProduct.reviewsCount} valoraciones de clientes)
                </span>
              </div>

              {/* Pricing */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--brand-red)' }}>
                  ${selectedProduct.price.toFixed(2)}
                </span>
                {selectedProduct.originalPrice && (
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                    ${selectedProduct.originalPrice.toFixed(2)}
                  </span>
                )}
                {selectedProduct.discount && (
                  <span className="badge badge-red">
                    AHORRA UN {selectedProduct.discount}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.6' }}>
                {selectedProduct.description}
              </p>

              {/* Specs */}
              {selectedProduct.specs && (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--brand-purple)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Especificaciones Destacadas:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {selectedProduct.specs.map((spec, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.8rem',
                        background: 'var(--surface-2)',
                        border: '1px solid var(--line)',
                        padding: '4px 10px',
                        borderRadius: 'var(--r-sm)',
                        color: 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Check size={12} color="var(--success)" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => addToCart(selectedProduct, quantity)}
                  style={{
                    flex: 1,
                    background: 'var(--surface-2)',
                    color: '#FFFFFF',
                    border: '1px solid var(--line)',
                    padding: '12px',
                    borderRadius: 'var(--r-pill)',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <ShoppingCart size={18} />
                  <span>Añadir a la cesta</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  style={{
                    flex: 1,
                    background: 'var(--gradient-brand)',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '12px',
                    borderRadius: 'var(--r-pill)',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 0 15px var(--brand-red-glow)'
                  }}
                >
                  <Zap size={18} />
                  <span>Comprar Ahora</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
