'use client';

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductContainer } from './components/ProductContainer';
import { Footer } from './components/Footer';
import styles from './page.module.css';

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

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentSort, setCurrentSort] = useState<string>('default');
  const [searchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);

        // Extract unique categories
        const uniqueCategories = [...new Set(data.map((p: any) => p.category))];
        setCategories(uniqueCategories as string[]);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Filter by multiple categories
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    switch (currentSort) {
      case 'price-low':
        // NEWEST FIRST is mapped here in UI, keeping logic same or we can sort by ID
        result.sort((a, b) => b.id - a.id);
        break;
      case 'price-high':
        // POPULAR -> sort by rating count
        result.sort((a, b) => (b.rating?.count || 0) - (a.rating?.count || 0));
        break;
      case 'name-asc':
        // PRICE: HIGH TO LOW
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-desc':
        // PRICE: LOW TO HIGH
        result.sort((a, b) => a.price - b.price);
        break;
      default:
        // RECOMMENDED -> original order
        break;
    }

    setFilteredProducts(result);
  }, [products, selectedCategories, currentSort, searchQuery]);

  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <ProductContainer
        products={filteredProducts}
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoriesChange={setSelectedCategories}
        onSortChange={setCurrentSort}
        currentSort={currentSort}
        isLoading={isLoading}
        searchQuery={searchQuery}
      />
      <Footer />
    </div>
  );
}
