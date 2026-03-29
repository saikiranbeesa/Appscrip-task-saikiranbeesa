# Product Store - Next.js E-Commerce App

A modern, fully responsive e-commerce product discovery platform built with **Next.js**, **React**, and **vanilla CSS**. Features dynamic product filtering, sorting, and search functionality powered by the FakeStore API.

## 🎯 Features

- **Responsive Design**: Desktop, tablet, and mobile optimized layouts
- **Product Filtering**: Filter by categories (Electronics, Jewelry, Men's Clothing, Women's Clothing)
- **Advanced Sorting**: Sort by price (low-high, high-low) and name (A-Z, Z-A)
- **Product Search**: Real-time search functionality
- **Dynamic Product Grid**: Responsive grid that adapts from 4 columns (desktop) to 1 column (mobile)
- **Header Navigation**: Sticky navigation with search bar and cart icon
- **Hero Section**: Engaging product discovery banner
- **Footer**: Complete footer with social links, contact info, and company links
- **Performance Optimized**: Fast loading with efficient state management

## 📦 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Pure CSS (no frameworks - vanilla CSS with CSS Modules)
- **API**: FakeStore REST API (https://fakestoreapi.com/products)
- **Runtime**: Node.js

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd product-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
product-store/
├── app/
│   ├── components/
│   │   ├── Header.tsx               # Navigation header
│   │   ├── Header.module.css
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── Hero.module.css
│   │   ├── Filter.tsx               # Category & sort filters
│   │   ├── Filter.module.css
│   │   ├── ProductCard.tsx          # Individual product card
│   │   ├── ProductCard.module.css
│   │   ├── ProductGrid.tsx          # Product grid container
│   │   ├── ProductGrid.module.css
│   │   ├── ProductContainer.tsx     # Main product section
│   │   ├── ProductContainer.module.css
│   │   ├── Footer.tsx               # Footer
│   │   └── Footer.module.css
│   ├── page.tsx                     # Main page with logic
│   ├── page.module.css
│   ├── layout.tsx                   # Root layout
│   └── globals.css                  # Global styles
├── public/                          # Static assets
├── next.config.js                   # Next.js configuration
├── tsconfig.json                    # TypeScript config
├── package.json                     # Dependencies
└── README.md                        # This file
```

## 🎨 Component Overview

### Header Component
- Logo display
- Navigation menu (Home, Products, About, Contact)
- Search input for product search
- Shopping cart icon

### Hero Section
- Prominent "Discover Our Products" heading
- Subheading with description
- Call-to-action button

### Filter Sidebar
- Category selection (radio buttons)
- Sort options dropdown:
  - Default
  - Price: Low to High
  - Price: High to Low
  - Name: A to Z
  - Name: Z to A

### Product Grid
- Responsive grid layout (4 cols desktop → 1 col mobile)
- Smooth hover effects
- Product cards with images, titles, prices, and categories

### Product Card
- Product image with background
- Category badge
- Product title (truncated to 2 lines)
- Price display
- Add to Cart button
- Hover animations

### Footer
- About section
- Contact information
- Quick links
- Social media icons

## 🔄 State Management

Main logic in `page.tsx`:
- Fetch products from FakeStore API on component mount
- Manage filter state (category, sort, search)
- Real-time filtering and sorting based on user input
- Performance optimized with useEffect dependencies

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (4 columns)
- **Laptop**: 992px-1199px (3 columns)
- **Tablet**: 768px-991px (2 columns)
- **Mobile**: Below 768px (2 columns, then 1 column)
- **Small Mobile**: 480px and below (1 column)

## 🎯 Filtering & Sorting Logic

**Filtering:**
- Category filter: Shows only products from selected category
- Search filter: Text search across product titles
- Filters are combinable (can search within a category)

**Sorting:**
- Price (ascending/descending)
- Alphabetical (A-Z/Z-A)
- Default (API order)

## 🚢 Build & Deployment

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel (recommended):
```bash
npx vercel
```

## 🔧 Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## ✨ Key Features Implementation

### Real-time Search
Users can type in the search box and products filter instantly across all categories.

### Dynamic Category Filtering
Radio buttons allow single category selection with instant filtering.

### Smart Sorting
Products automatically resort when sort option changes without losing filters.

### Image Optimization
External product images from FakeStore API are properly handled and displayed.

### Sticky Header
Navigation stays visible while scrolling for easy access to search and categories.

## 📊 API Integration

**Fetch Products:**
```typescript
GET https://fakestoreapi.com/products
```

Returns array of products with:
- id: Product ID
- title: Product name
- price: Product price
- image: Product image URL
- category: Product category

## 🎨 Styling Approach

All styling uses **pure vanilla CSS** with CSS Modules:
- No external CSS frameworks like Bootstrap or Tailwind
- CSS Modules for component-scoped styling
- Responsive design with media queries
- Smooth transitions and hover effects
- Mobile-first responsive design

## 🐛 Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Images not loading:**
- Check that FakeStore API is accessible
- Verify next.config.js remote image settings

**Build errors:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📝 Future Enhancements

- Product detail page
- Shopping cart persistence
- User authentication
- Wishlist feature
- Product reviews/ratings
- Filter by price range
- Product recommendations
- Payment integration

## 📄 License

Open source project. Feel free to use and modify.

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

---

**Built with ❤️ using Next.js and React**
