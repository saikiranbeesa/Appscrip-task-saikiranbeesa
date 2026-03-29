import React from 'react';
import styles from './ProductGrid.module.css';
import { ProductCard } from './ProductCard';

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

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <p>Loading products...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className={styles.gridContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
