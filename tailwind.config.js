/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    container: {
     center: true,
     padding: {
      DEFAULT: '1rem',
      xl: '2rem'
     }
    },
    
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '992px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1200px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        "primary": '#c14679',
        "title": '#151515',
        "text": '#777777',
        'tab': '#9b9b9b',
        "icon": '#575757'
      },
      borderColor: {
        'primary': '#c14679',
        'box': '#f3f7f8',
        'title': '#e1e1e1'
      },
      fontFamily: {
        'primary': 'Poppins',
        'title': 'Great-vibes',
        'text': 'Lato'
      },
      boxShadow: {
        'box': '3px 9px 18px 0 rgba(0, 0, 0, 0.18)',
        'offer-box': '0 5px 16px 0 rgba(0, 0, 0, 0.15)',
        'product-box': '0 1px 18px 0 rgba(0, 0, 0, 0.09)',
        
      },
      backgroundColor: {
        "primary": '#c14679',
        
        'hover': '#8c2f55',
        'badge': '#232322'
      },
      backgroundImage: {
        'landing': 'url("/images/main-bg.jpg")',
        'fresh-cakes': 'url("/images/products-bg.jpg")',
        'new-products': 'url("/images/newProducts.jpg")',
        'summer-sale': 'url("/images/parallax-bg.jpg")',
        'unique-cakes': 'url("/images/bg-cta-1.jpg")',
        'news': 'url("/images/cakes/slice.jpg")',
        'clients': 'url("/images/clients-bg.jpg")',
        'page-header': 'url("/images/breadcrumbs-bg.jpg")'
      }
    },
  },
  plugins: [],
}