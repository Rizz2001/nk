import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Zap, 
  ChevronRight, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function Header({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, toggleFilterDrawer }) {
  const { totalItems, setIsCartOpen, setSelectedProduct } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <>
      {/* Top Bar Promocional */}
      <div style={{
        background: 'linear-gradient(90deg, #16161E 0%, #FF003C 50%, #7C3AED 100%)',
        color: '#FFFFFF',
        fontSize: '0.8rem',
        fontWeight: '600',
        padding: '6px 0',
        textAlign: 'center',
        letterSpacing: '0.03em'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={14} />
          <span>GARANTÍA OFICIAL NK ELECTRONICS · ENVÍO EXPRÉS 24H EN PRODUCTOS SELECCIONADOS · HASTA 12 CUOTAS SIN INTERÉS</span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="glass-panel" style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 'var(--header-h)',
        borderBottom: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          width: '100%'
        }}>
          {/* Logo Nk Electronics */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú"
              style={{
                display: 'none',
                color: 'var(--text-main)',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px var(--brand-red-glow)'
              }}>
                <Zap size={24} color="#FFFFFF" fill="#FFFFFF" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '900',
                  fontSize: '1.4rem',
                  lineHeight: '1',
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF'
                }}>
                  NK <span style={{ color: 'var(--brand-red)' }}>ELECTRONICS</span>
                </span>
                <span style={{ fontSize: '0.65rem', color: 'var(--brand-purple)', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Next-Gen Technology
                </span>
              </div>
            </a>
          </div>

          {/* Search Bar con Autocompletado */}
          <div style={{ flex: '1', maxWidth: '600px', position: 'relative' }} className="header-search">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--surface-2)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--r-pill)',
              padding: '4px 6px 4px 16px',
              transition: 'border-color 0.2s, box-shadow 0.2s'
            }}>
              <Search size={18} color="var(--text-muted)" style={{ marginRight: '10px' }} />
              <input
                type="text"
                placeholder="Buscar laptops gaming, GPUs RTX, smartphones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearchSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ color: 'var(--text-muted)', padding: '4px', display: 'flex' }}
                >
                  <X size={16} />
                </button>
              )}
              <button style={{
                background: 'var(--brand-red)',
                color: '#FFFFFF',
                borderRadius: 'var(--r-pill)',
                padding: '8px 16px',
                fontWeight: '600',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 0 10px var(--brand-red-glow)',
                transition: 'background 0.2s'
              }}>
                <span>Buscar</span>
              </button>
            </div>

            {/* Dropdown de Sugerencias de Búsqueda */}
            {showSearchSuggestions && searchResults.length > 0 && (
              <div className="glass-panel animate-fade-in" style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                right: 0,
                borderRadius: 'var(--r-md)',
                boxShadow: 'var(--shadow-card)',
                overflow: 'hidden',
                zIndex: 50
              }}>
                <div style={{ padding: '8px 12px', fontSize: '0.75rem', color: 'var(--brand-purple)', fontWeight: '700', borderBottom: '1px solid var(--line)' }}>
                  PRODUCTOS SUGERIDOS NK
                </div>
                {searchResults.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      setSelectedProduct(prod);
                      setShowSearchSuggestions(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      cursor: 'pointer',
                      borderBottom: '1px solid rgba(255,255,255,0.03)',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-3)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <img src={prod.image} alt={prod.name} style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '4px', background: 'var(--surface-1)' }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {prod.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {prod.category} · <span style={{ color: 'var(--brand-red)', fontWeight: '700' }}>${prod.price.toFixed(2)}</span>
                      </div>
                    </div>
                    <ChevronRight size={16} color="var(--text-muted)" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User & Cart Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={toggleFilterDrawer}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                borderRadius: 'var(--r-md)',
                background: 'var(--surface-2)',
                border: '1px solid var(--line)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
              className="filter-toggle-btn"
            >
              <SlidersHorizontal size={18} color="var(--brand-purple)" />
              <span className="hide-mobile">Filtros</span>
            </button>

            <a
              href="#account"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: 'var(--r-md)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                fontWeight: '500',
                transition: 'background 0.2s'
              }}
              className="hide-mobile"
            >
              <User size={20} color="var(--brand-purple)" />
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Bienvenido</span>
                <span style={{ fontWeight: '600' }}>Mi Cuenta</span>
              </div>
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Abrir carrito"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                background: 'var(--brand-red)',
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '0.9rem',
                boxShadow: '0 0 18px var(--brand-red-glow)',
                transition: 'transform 0.2s, background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-10px',
                    background: '#FFFFFF',
                    color: 'var(--brand-red)',
                    fontSize: '0.7rem',
                    fontWeight: '900',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
                  }}>
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hide-mobile">Cesta</span>
            </button>
          </div>
        </div>
      </header>

      {/* Style overrides for header mobile responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .header-search { max-width: 100% !important; }
        }
      `}</style>
    </>
  );
}
