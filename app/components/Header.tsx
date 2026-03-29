import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <div className={styles.logoIcon}>
          <button suppressHydrationWarning className={styles.hamburgerBtn} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <img src="https://res.cloudinary.com/dqrtznrtf/image/upload/v1774723011/Logo_dev6gc.png" alt="Logo" className={styles.logoImage} />
        </div>

        <div className={styles.logoText}>

          <h1>LOGO</h1>
        </div>

        <div className={styles.rightSection}>
          <button suppressHydrationWarning className={styles.iconBtn} aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button suppressHydrationWarning className={styles.iconBtn} aria-label="Wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
          <button suppressHydrationWarning className={styles.iconBtn} aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
          <button suppressHydrationWarning className={`${styles.iconBtn} ${styles.hideOnMobile}`} aria-label="Profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <div className={`${styles.languageSelector} ${styles.hideOnMobile}`}>
            <span>ENG</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      <nav className={styles.bottomNav}>
        <a href="#shop">SHOP</a>
        <a href="#skills">SKILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
      </nav>

      <div className={styles.mobileBreadcrumb}>
        HOME <span className={styles.breadcrumbDivider}>|</span> <span className={styles.breadcrumbActive}>SHOP</span>
      </div>
    </header>
  );
};
