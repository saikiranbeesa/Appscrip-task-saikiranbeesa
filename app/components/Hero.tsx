import React from 'react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.title}>DISCOVER OUR PRODUCTS</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
    </section>
  );
};
