/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
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
  		sm: '576px',
  		md: '768px',
  		lg: '992px',
  		xl: '1200px',
  		'2xl': '1440px'
  	},
  	extend: {
  		colors: {
  			primary: '#c14679',
  			title: '#151515',
  			text: '#777777',
  			tab: '#9b9b9b',
  			icon: '#575757',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderColor: {
  			primary: '#c14679',
  			box: '#f3f7f8',
  			title: '#e1e1e1'
  		},
  		fontFamily: {
  			primary: 'Poppins',
  			title: 'Great-vibes',
  			text: 'Lato'
  		},
  		boxShadow: {
  			box: '3px 9px 18px 0 rgba(0, 0, 0, 0.18)',
  			'offer-box': '0 5px 16px 0 rgba(0, 0, 0, 0.15)',
  			'product-box': '0 1px 18px 0 rgba(0, 0, 0, 0.09)',
  			'row-box': '0 0 9px 0 rgba(0, 0, 0, 0.08)',
  			'service-box': '3px 6px 6px 0 rgba(0, 0, 0, 0.11)',
  			'testimonial-box': '0 0 18px 0 rgba(0, 0, 0, 0.13)',
  			'top-comment': '0 0 16px 0 rgba(0, 0, 0, 0.09)',
  			'single-product': '0 0 6px 0 rgba(0, 0, 0, 0.21)',
  			author: '0 3px 18px 0 rgba(0, 0, 0, 0.15)',
  		},
	     dropShadow: {
			'cart': 'drop-shadow(0 0 3px rgba(1, 3, 4, 0.19))',
		 },
  		backgroundColor: {
  			primary: '#c14679',
  			hover: '#8c2f55',
  			badge: '#232322'
  		},
  		backgroundImage: {
  			landing: 'url("/images/main-bg.jpg")',
  			'fresh-cakes': 'url("/images/products-bg.jpg")',
  			'new-products': 'url("/images/newProducts.jpg")',
  			'summer-sale': 'url("/images/parallax-bg.jpg")',
  			'unique-cakes': 'url("/images/bg-cta-1.jpg")',
  			news: 'url("/images/cakes/slice.jpg")',
  			clients: 'url("/images/clients-bg.jpg")',
  			'page-header': 'url("/images/breadcrumbs-bg.jpg")',
  			'offers-bg': 'url("/images/offers-bg.jpg")'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}