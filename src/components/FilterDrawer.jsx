import React from 'react';
import { X, RotateCcw, Filter, Check } from 'lucide-react';

export default function FilterDrawer({
  isOpen,
  onClose,
  selectedBrand,
  setSelectedBrand,
  maxPrice,
  setMaxPrice,
  onlyInStock,
  setOnlyInStock,
  onlyFlash,
  setOnlyFlash,
  resetFilters
}) {
  if (!isOpen) return null;

  const BRANDS = ['all', 'ASUS ROG', 'GIGABYTE', 'AMD', 'Samsung', 'SteelSeries', 'Keychron', 'Razer', 'Nk Tech'];

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
        onClick={onClose}
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
        maxWidth: '380px',
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
            <Filter size={20} color="var(--brand-purple)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>
              Filtros Nk Electronics
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ color: 'var(--text-muted)', padding: '4px' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          
          {/* Brand Filter */}
          <div style={{ marginBottom: '28px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Marca / Fabricante
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {BRANDS.map((brand) => {
                const isSelected = selectedBrand === brand;
                return (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--r-md)',
                      fontSize: '0.8rem',
                      fontWeight: isSelected ? '700' : '500',
                      background: isSelected ? 'var(--brand-purple)' : 'var(--surface-2)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                      border: isSelected ? '1px solid var(--brand-purple)' : '1px solid var(--line)',
                      transition: 'all 0.15s'
                    }}
                  >
                    {brand === 'all' ? 'Todas las marcas' : brand}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range Filter */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Precio Máximo
              </label>
              <span style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--brand-red)' }}>
                ${maxPrice}
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="3500"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--brand-red)',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>$100</span>
              <span>$3,500</span>
            </div>
          </div>

          {/* Checkbox Toggles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text-main)' }}>
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--brand-purple)' }}
              />
              <span>Mostrar solo productos en stock</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text-main)' }}>
              <input
                type="checkbox"
                checked={onlyFlash}
                onChange={(e) => setOnlyFlash(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--brand-red)' }}
              />
              <span>Solo Ofertas Flash activas</span>
            </label>
          </div>

        </div>

        {/* Drawer Footer */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          gap: '12px'
        }}>
          <button
            onClick={resetFilters}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: 'var(--r-pill)',
              border: '1px solid var(--line)',
              background: 'var(--surface-2)',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <RotateCcw size={16} />
            <span>Limpiar</span>
          </button>

          <button
            onClick={onClose}
            style={{
              flex: 2,
              padding: '12px',
              borderRadius: 'var(--r-pill)',
              background: 'var(--brand-red)',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: '700',
              boxShadow: '0 0 12px var(--brand-red-glow)'
            }}
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}
