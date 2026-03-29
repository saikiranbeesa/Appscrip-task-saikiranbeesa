import React from 'react';
import styles from './ProductCard.module.css';

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

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <span className={styles.category}>{product.category}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.meta}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {product.rating && (
            <span className={styles.rating}>⭐ {product.rating.rate}</span>
          )}
        </div>
        <button className={styles.addBtn}>ADD TO CART</button>
      </div>
    </div>
  );
};
