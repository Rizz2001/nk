import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    amountForFreeShipping,
    freeShippingProgress
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState(false);

  if (!isCartOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      {/* Backdrop */}
      <div
        onClick={() => {
          setIsCartOpen(false);
          setCheckoutStep(false);
        }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)'
        }}
      />

      {/* Drawer Panel */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '440px',
        height: '100%',
        background: 'var(--surface-1)',
        borderLeft: '1px solid var(--line)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-card)',
        animation: 'fadeIn 0.2s ease'
      }}>
        {/* Drawer Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="var(--brand-red)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>
              Cesta Nk Electronics ({cart.reduce((a, b) => a + b.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              setCheckoutStep(false);
            }}
            style={{ color: 'var(--text-muted)', padding: '4px' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{
          background: 'var(--surface-2)',
          padding: '12px 20px',
          borderBottom: '1px solid var(--line)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '6px' }}>
            <Truck size={16} color="var(--brand-purple)" />
            <span>
              {amountForFreeShipping > 0
                ? `Te faltan $${amountForFreeShipping.toFixed(2)} para envío gratis`
                : '¡Enhorabuena! Tienes Envío Gratis incluido'}
            </span>
          </div>
          <div style={{
            height: '6px',
            width: '100%',
            background: 'var(--bg-main)',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${freeShippingProgress}%`,
              background: 'var(--gradient-brand)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {/* Cart Item List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {checkoutStep ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle2 size={36} color="var(--success)" />
              </div>
              <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '8px' }}>
                ¡Pedido Confirmado en Nk Electronics!
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
                Gracias por tu compra. Te enviamos la factura digital y el seguimiento del paquete a tu correo electrónico.
              </p>
              <button
                onClick={() => {
                  clearCart();
                  setCheckoutStep(false);
                  setIsCartOpen(false);
                }}
                style={{
                  background: 'var(--brand-red)',
                  color: '#FFFFFF',
                  padding: '10px 24px',
                  borderRadius: 'var(--r-pill)',
                  fontWeight: '700',
                  fontSize: '0.9rem'
                }}
              >
                Volver a la Tienda
              </button>
            </div>
          ) : cart.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '12px',
                    borderRadius: 'var(--r-md)',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line)',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '64px', height: '64px', objectFit: 'contain', borderRadius: '6px', background: 'var(--surface-1)' }}
                  />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: '4px' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--brand-red)', marginBottom: '8px' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: 'var(--r-pill)', background: 'var(--surface-1)' }}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{ padding: '4px 8px', color: 'var(--text-muted)' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.8rem', fontWeight: '700', padding: '0 8px' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{ padding: '4px 8px', color: 'var(--text-muted)' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        <Trash2 size={14} color="#EF4444" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <ShoppingBag size={48} color="var(--line)" style={{ marginBottom: '16px' }} />
              <h4 style={{ color: 'var(--text-main)', marginBottom: '6px' }}>Tu cesta está vacía</h4>
              <p style={{ fontSize: '0.85rem' }}>Explora nuestro catálogo de tecnología y encuentra las mejores ofertas en Nk Electronics.</p>
            </div>
          )}
        </div>

        {/* Drawer Footer / Summary */}
        {!checkoutStep && cart.length > 0 && (
          <div style={{
            padding: '20px',
            borderTop: '1px solid var(--line)',
            background: 'var(--surface-1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span>Subtotal:</span>
              <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>${subtotal.toFixed(2)}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span>Envío:</span>
              <span style={{ color: amountForFreeShipping === 0 ? 'var(--success)' : 'var(--text-main)', fontWeight: '600' }}>
                {amountForFreeShipping === 0 ? 'GRATIS' : '$9.99'}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF', borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
              <span>Total:</span>
              <span style={{ color: 'var(--brand-red)' }}>
                ${(subtotal + (amountForFreeShipping === 0 ? 0 : 9.99)).toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => setCheckoutStep(true)}
              style={{
                width: '100%',
                background: 'var(--gradient-brand)',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: 'var(--r-pill)',
                fontWeight: '700',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 0 20px var(--brand-red-glow)'
              }}
            >
              <span>Tramitar Pedido</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
