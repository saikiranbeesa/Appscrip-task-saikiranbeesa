"use client";
import React, { useState } from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.topLeft}>
          <h3 className={styles.topTitle}>BE THE FIRST TO KNOW</h3>
          <p className={styles.topSubtitle}>Sign up for updates from mettã muse.</p>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.emailInput}
            />
            <button suppressHydrationWarning type="submit" className={styles.subscribeBtn}>SUBSCRIBE</button>
          </form>
        </div>
        <div className={styles.topRight}>
          <h3 className={styles.topTitle}>CONTACT US</h3>
          <p className={styles.contactText}>+44 221 133 5360</p>
          <p className={styles.contactText}>customercare@mettamuse.com</p>

          <h3 className={styles.topTitle} style={{ marginTop: '1.5rem' }}>CURRENCY</h3>
          <div className={styles.currencyWrapper}>
            <span className={styles.flagEmoji}>🇺🇸</span>
            <span className={styles.currencyText}>• USD</span>
          </div>
          <p className={styles.currencyDisclaimer}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottomSection}>
        <div className={styles.column}>
          <button suppressHydrationWarning className={styles.accordionHeader} onClick={() => toggleSection('metta')}>
            <h3 className={styles.columnTitleLarge}>mettã muse</h3>
            <span className={`${styles.accordionIcon} ${openSection === 'metta' ? styles.open : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </button>
          <ul className={`${styles.linkList} ${openSection === 'metta' ? styles.showOnMobile : ''}`}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliances Docs</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <button suppressHydrationWarning className={styles.accordionHeader} onClick={() => toggleSection('quick')}>
            <h3 className={styles.columnTitle}>QUICK LINKS</h3>
            <span className={`${styles.accordionIcon} ${openSection === 'quick' ? styles.open : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </button>
          <ul className={`${styles.linkList} ${openSection === 'quick' ? styles.showOnMobile : ''}`}>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <button suppressHydrationWarning className={styles.accordionHeader} onClick={() => toggleSection('follow')}>
            <h3 className={styles.columnTitle}>FOLLOW US</h3>
            <span className={`${styles.accordionIcon} ${openSection === 'follow' ? styles.open : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </button>
          <div className={`${styles.socialIcons} ${openSection === 'follow' ? styles.showOnMobileFlex : styles.hideOnMobile}`}>
            <a href="#" className={styles.socialCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" className={styles.socialCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>

          <h3 className={styles.columnTitle} style={{ marginTop: '2.5rem' }}>mettã muse ACCEPTS</h3>
          <div className={styles.paymentIcons}>
            <div className={styles.paymentPill}><span style={{ color: '#4285F4' }}>G</span><span style={{ color: '#EA4335' }}>P</span><span style={{ color: '#FBBC05' }}>a</span><span style={{ color: '#34A853' }}>y</span></div>
            <div className={styles.paymentPill}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#EB001B', position: 'relative', left: 4 }}></div>
              <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#F79E1B', position: 'relative', right: 4, opacity: 0.9 }}></div>
            </div>
            <div className={styles.paymentPill} style={{ color: '#003087', fontWeight: 'bold', fontStyle: 'italic' }}>PayPal</div>
            <div className={styles.paymentPill} style={{ backgroundColor: '#0070CE', color: '#fff', fontWeight: 'bold' }}>AMEX</div>
            <div className={styles.paymentPill} style={{ color: '#000', fontWeight: 'bold' }}> Pay</div>
            <div className={styles.paymentPill} style={{ color: '#000', fontWeight: 'bold', border: '1px solid currentColor' }}><span>O</span> Pay</div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright &copy; 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};
