import React, { useState } from 'react';
import styles from './ProductContainer.module.css';
import { Filter } from './Filter';
import { ProductGrid } from './ProductGrid';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface ProductContainerProps {
  products: Product[];
  categories: string[];
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  onSortChange: (sort: string) => void;
  currentSort: string;
  isLoading: boolean;
  searchQuery: string;
}

export const ProductContainer: React.FC<ProductContainerProps> = ({
  products,
  categories,
  selectedCategories,
  onCategoriesChange,
  onSortChange,
  currentSort,
  isLoading,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 768) {
      setShowSidebar(true);
    }
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <span className={styles.itemCount}>3425 ITEMS</span>
          <button suppressHydrationWarning className={styles.toggleFilterBtn} onClick={() => setShowSidebar(!showSidebar)}>
            <span className={styles.desktopOnly}>
              {showSidebar ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              )}
            </span>
            <span className={`${styles.hideText} ${styles.desktopOnly}`}>{showSidebar ? "HIDE FILTER" : "SHOW FILTER"}</span>
            <strong className={`${styles.mobileFilterText} ${styles.mobileOnly}`}>FILTER</strong>
          </button>
        </div>
        <div className={styles.topBarRight}>
          <div className={styles.sortDropdownWrapper}>
            <button suppressHydrationWarning
              className={styles.sortSelectTop}
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              {[
                  { label: 'RECOMMENDED', value: 'default' },
                  { label: 'NEWEST FIRST', value: 'price-low' },
                  { label: 'POPULAR', value: 'price-high' },
                  { label: 'PRICE : HIGH TO LOW', value: 'name-asc' },
                  { label: 'PRICE : LOW TO HIGH', value: 'name-desc' },
              ].find(opt => opt.value === currentSort)?.label || 'RECOMMENDED'} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}><path d="m6 9 6 6 6-6" /></svg>
            </button>

            {showSortDropdown && (
              <div className={styles.sortDropdownMenu}>
                {[
                  { label: 'RECOMMENDED', value: 'default' },
                  { label: 'NEWEST FIRST', value: 'price-low' },
                  { label: 'POPULAR', value: 'price-high' },
                  { label: 'PRICE : HIGH TO LOW', value: 'name-asc' },
                  { label: 'PRICE : LOW TO HIGH', value: 'name-desc' },
                ].map((opt) => (
                  <button suppressHydrationWarning
                    key={opt.value}
                    className={`${styles.sortOption} ${currentSort === opt.value ? styles.sortOptionActive : ''}`}
                    onClick={() => {
                      onSortChange(opt.value);
                      setShowSortDropdown(false);
                    }}
                  >
                    <span className={styles.checkIcon}>
                      {currentSort === opt.value && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
                    </span>
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        {showSidebar && (
          <Filter
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoriesChange={onCategoriesChange}
          />
        )}
        <div className={styles.gridWrapper}>
          <ProductGrid products={products} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};
