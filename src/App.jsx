import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryChips from './components/CategoryChips';
import ProductGrid from './components/ProductGrid';
import FilterDrawer from './components/FilterDrawer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

function MainApp() {
  const { toast } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('cat-all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [maxPrice, setMaxPrice] = useState(3500);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyFlash, setOnlyFlash] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const resetFilters = () => {
    setSelectedBrand('all');
    setMaxPrice(3500);
    setOnlyInStock(false);
    setOnlyFlash(false);
    setSearchQuery('');
    setSelectedCategory('cat-all');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toast Notification Container */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 300,
          background: 'var(--surface-1)',
          border: '1px solid var(--brand-purple)',
          boxShadow: 'var(--shadow-purple-glow)',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: 'var(--r-md)',
          fontSize: '0.85rem',
          fontWeight: '600',
          animation: 'fadeIn 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-red)' }} />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Header Navigation */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        toggleFilterDrawer={() => setIsFilterDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        <HeroBanner />
        
        <CategoryChips
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductGrid
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          selectedBrand={selectedBrand}
          maxPrice={maxPrice}
          onlyInStock={onlyInStock}
          onlyFlash={onlyFlash}
          toggleFilterDrawer={() => setIsFilterDrawerOpen(true)}
        />

        <TrustSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onlyInStock={onlyInStock}
        setOnlyInStock={setOnlyInStock}
        onlyFlash={onlyFlash}
        setOnlyFlash={setOnlyFlash}
        resetFilters={resetFilters}
      />

      <CartDrawer />
      <ProductModal />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
