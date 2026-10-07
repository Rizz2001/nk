import React from 'react';
import { CATEGORIES } from '../data/products';
import { 
  Zap, 
  Laptop, 
  Cpu, 
  Smartphone, 
  Monitor, 
  Headphones, 
  Keyboard 
} from 'lucide-react';

const iconMap = {
  Zap,
  Laptop,
  Cpu,
  Smartphone,
  Monitor,
  Headphones,
  Keyboard
};

export default function CategoryChips({ selectedCategory, setSelectedCategory }) {
  return (
    <section style={{ padding: '0 0 28px' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          overflowX: 'auto',
          paddingBottom: '8px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Zap;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 18px',
                  borderRadius: 'var(--r-pill)',
                  background: isSelected 
                    ? 'var(--brand-red)' 
                    : 'var(--surface-1)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                  border: isSelected 
                    ? '1px solid var(--brand-red)' 
                    : '1px solid var(--line)',
                  whiteSpace: 'nowrap',
                  fontWeight: isSelected ? '700' : '500',
                  fontSize: '0.85rem',
                  boxShadow: isSelected 
                    ? '0 0 15px var(--brand-red-glow)' 
                    : 'none',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'var(--brand-purple)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'var(--line)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <IconComponent size={18} color={isSelected ? '#FFFFFF' : 'var(--brand-purple)'} />
                <span>{cat.name}</span>
                {cat.count && (
                  <span style={{
                    fontSize: '0.75rem',
                    opacity: 0.75,
                    background: isSelected ? 'rgba(255,255,255,0.2)' : 'var(--surface-2)',
                    padding: '2px 8px',
                    borderRadius: 'var(--r-pill)'
                  }}>
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
