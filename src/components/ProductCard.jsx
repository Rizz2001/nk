import React from 'react';
import { Star, ShoppingCart, Eye, Truck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, setSelectedProduct } = useCart();

  return (
    <div
      style={{
        background: 'var(--surface-1)',
        borderRadius: 'var(--r-md)',
        border: '1px solid var(--line)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
        overflow: 'hidden'
      }}
      className="product-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'var(--brand-purple)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(124, 58, 237, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--line)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top Badges */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '12px',
        right: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 5,
        pointerEvents: 'none'
      }}>
        {product.discount ? (
          <span className="badge badge-red">-{product.discount}%</span>
        ) : <span />}

        {product.isNew ? (
          <span className="badge badge-purple">NUEVO</span>
        ) : product.isFlash ? (
          <span className="badge badge-red">FLASH</span>
        ) : null}
      </div>

      <div>
        {/* Product Image */}
        <div
          onClick={() => setSelectedProduct(product)}
          style={{
            height: '180px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--surface-2)',
            borderRadius: 'var(--r-sm)',
            padding: '12px',
            marginBottom: '14px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              transition: 'transform 0.3s ease'
            }}
            className="product-image"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(9, 9, 11, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: 'opacity 0.2s ease',
              backdropFilter: 'blur(2px)'
            }}
            className="quick-view-overlay"
          >
            <span style={{
              background: 'var(--surface-1)',
              color: '#FFFFFF',
              padding: '6px 14px',
              borderRadius: 'var(--r-pill)',
              fontSize: '0.8rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid var(--line)'
            }}>
              <Eye size={14} color="var(--brand-purple)" />
              Ver Detalles
            </span>
          </div>
        </div>

        {/* Brand & Category */}
        <div style={{ fontSize: '0.75rem', color: 'var(--brand-purple)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
          {product.brand} · {product.category}
        </div>

        {/* Product Title */}
        <h3
          onClick={() => setSelectedProduct(product)}
          style={{
            fontSize: '0.95rem',
            fontWeight: '600',
            color: 'var(--text-main)',
            lineHeight: '1.35',
            marginBottom: '8px',
            cursor: 'pointer',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            height: '2.7em'
          }}
        >
          {product.name}
        </h3>

        {/* Star Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', color: 'var(--warning)' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
            ))}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            {product.rating} ({product.reviewsCount})
          </span>
        </div>

        {/* Key Specs Pills */}
        {product.specs && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
            {product.specs.slice(0, 2).map((spec, i) => (
              <span key={i} style={{
                fontSize: '0.7rem',
                background: 'var(--surface-2)',
                color: 'var(--text-muted)',
                padding: '2px 6px',
                borderRadius: '4px',
                border: '1px solid var(--line)'
              }}>
                {spec}
              </span>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Logistics & Stock Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--success)', marginBottom: '10px' }}>
          <Truck size={14} />
          <span>Envío gratis 24h · En stock</span>
        </div>

        {/* Pricing & CTA */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
          <div>
            {product.originalPrice && (
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through', lineHeight: '1' }}>
                ${product.originalPrice.toFixed(2)}
              </div>
            )}
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--brand-red)', lineHeight: '1.1' }}>
              ${product.price.toFixed(2)}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            aria-label={`Añadir ${product.name} al carrito`}
            style={{
              background: 'var(--brand-red)',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 14px',
              borderRadius: 'var(--r-pill)',
              fontWeight: '700',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 0 12px var(--brand-red-glow)',
              transition: 'transform 0.15s, background 0.15s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <ShoppingCart size={16} />
            <span>Añadir</span>
          </button>
        </div>
      </div>

      <style>{`
        .product-card:hover .product-image { transform: scale(1.05); }
        .product-card:hover .quick-view-overlay { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
