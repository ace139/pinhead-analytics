import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: '#FFFFFF',
        secondary: '#F8FAFC',
        accent: '#0066CC',
        magenta: '#E91E63',
        text: '#1A202C',
        'text-muted': '#4A5568',
        'text-secondary': '#718096',
        surface: '#FFFFFF',
        'surface-light': '#F7FAFC',
        'surface-lighter': '#EDF2F7',
        border: '#E2E8F0',
        'border-light': '#CBD5E0',
        
        // Keep dark theme colors for potential future use
        'dark-primary': '#0A0B0F',
        'dark-accent': '#00D9FF',
        'dark-magenta': '#FF0080',
        'dark-text': '#FFFFFF',
        'dark-surface': '#111318',
        'dark-surface-light': '#1A1D23',
        'dark-surface-lighter': '#242831',
        'dark-text-muted': '#9CA3AF',
        'dark-text-secondary': '#6B7280',
        'dark-border': '#2D3748',
        'dark-border-light': '#374151'
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(0, 102, 204, 0.3), 0 0 60px rgba(0, 102, 204, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 50px rgba(0, 102, 204, 0.5), 0 0 100px rgba(0, 102, 204, 0.2)' 
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 102, 204, 0.3)',
        'glow-lg': '0 0 50px rgba(0, 102, 204, 0.4)',
        'glow-magenta': '0 0 30px rgba(233, 30, 99, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(0, 102, 204, 0.1)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 102, 204, 0.2)',
        'light': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'light-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
      }
    },
  },
  plugins: [typography],
}