import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { SlidersHorizontal, Sparkles, Flame, CheckCircle } from 'lucide-react';

export default function ProductGrid({ 
  selectedCategory, 
  searchQuery, 
  selectedBrand, 
  maxPrice, 
  onlyInStock, 
  onlyFlash,
  toggleFilterDrawer 
}) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'flash', 'new'
  const [sortBy, setSortBy] = useState('relevance'); // 'relevance', 'price-low', 'price-high', 'rating'

  // Filter Pipeline
  let filtered = PRODUCTS.filter((product) => {
    // Category Filter
    if (selectedCategory && selectedCategory !== 'cat-all') {
      const catObj = {
        'cat-laptops': 'Laptops',
        'cat-components': 'Componentes',
        'cat-smartphones': 'Smartphones',
        'cat-monitors': 'Monitores',
        'cat-audio': 'Audio',
        'cat-peripherals': 'Periféricos'
      };
      if (catObj[selectedCategory] && product.category !== catObj[selectedCategory]) {
        return false;
      }
    }

    // Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchCategory = product.category.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchCategory) return false;
    }

    // Brand Filter
    if (selectedBrand && selectedBrand !== 'all' && product.brand !== selectedBrand) {
      return false;
    }

    // Price Filter
    if (maxPrice && product.price > maxPrice) {
      return false;
    }

    // Stock Filter
    if (onlyInStock && !product.inStock) {
      return false;
    }

    // Flash Filter
    if (onlyFlash && !product.isFlash) {
      return false;
    }

    // Tab Filter
    if (activeTab === 'flash' && !product.isFlash) return false;
    if (activeTab === 'new' && !product.isNew) return false;

    return true;
  });

  // Sorting Pipeline
  filtered.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // relevance
  });

  return (
    <section style={{ padding: '0 0 60px' }}>
      <div className="container">
        
        {/* Section Header Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px',
          borderBottom: '1px solid var(--line)',
          paddingBottom: '16px'
        }}>
          {/* Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            <button
              onClick={() => setActiveTab('all')}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.85rem',
                fontWeight: '700',
                background: activeTab === 'all' ? 'var(--surface-2)' : 'transparent',
                color: activeTab === 'all' ? '#FFFFFF' : 'var(--text-muted)',
                border: activeTab === 'all' ? '1px solid var(--brand-purple)' : '1px solid transparent',
                transition: 'all 0.2s'
              }}
            >
              Todos los productos
            </button>

            <button
              onClick={() => setActiveTab('flash')}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.85rem',
                fontWeight: '700',
                background: activeTab === 'flash' ? 'rgba(255, 0, 60, 0.15)' : 'transparent',
                color: activeTab === 'flash' ? 'var(--brand-red)' : 'var(--text-muted)',
                border: activeTab === 'flash' ? '1px solid var(--brand-red)' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
            >
              <Flame size={16} />
              <span>Ofertas Flash</span>
            </button>

            <button
              onClick={() => setActiveTab('new')}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.85rem',
                fontWeight: '700',
                background: activeTab === 'new' ? 'rgba(124, 58, 237, 0.15)' : 'transparent',
                color: activeTab === 'new' ? 'var(--brand-purple)' : 'var(--text-muted)',
                border: activeTab === 'new' ? '1px solid var(--brand-purple)' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
            >
              <Sparkles size={16} />
              <span>Novedades Tech</span>
            </button>
          </div>

          {/* Right Controls: Sort & Filter Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-main)' }}>{filtered.length}</strong> resultados
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'var(--surface-2)',
                color: 'var(--text-main)',
                border: '1px solid var(--line)',
                padding: '8px 14px',
                borderRadius: 'var(--r-md)',
                fontSize: '0.85rem',
                fontFamily: 'inherit',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="relevance">Ordenar: Relevancia</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Valorados</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'var(--surface-1)',
            borderRadius: 'var(--r-lg)',
            border: '1px solid var(--line)'
          }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>
              No se encontraron productos
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Intenta ajustar tus filtros de búsqueda o cambiar la categoría seleccionada.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
