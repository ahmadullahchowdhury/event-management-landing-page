import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './view/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backdropBlur: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        'custom-red': '0px 1px 4px 1px rgba(177, 0, 0, 0.25)',
        'button-shadow-black': '0px 1px 4px 1px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        custom: ['Kumbh Sans', 'sans-serif']
      },
      letterSpacing: {
        normal: '0',
        wide: '7.5px',
        custom: '4.48px'
      },
      colors: {
        primary: '#FBFBFB',
        primary_2: '#FFFFFF', //dark color
        secondary_1: '#E6A147',
        secondary_2: '#F26F9C',
        neutral: '#202020',
        neutral_2: '#000000', //dark color
        text_color: '#383E45',
        contact_bg: '#ECECEC',
        contact_text: '#ADADAD',
        footer_bg: '#F8F8F8',

        /* DARK THEME COLOR*/
        dark_primary_higher: '#212529',
        dark_primary_lower: '#343a40',
        dark_secondary_higher: '#E6A147',
        dark_secondary_lower: '#ECA5A5',
        dark_neutral_higher: '#fafafa',
        dark_neutral_lower: '#d7dce0',
        dark_text_color: '#e6ecf2',

        /* FIXED COLOR */
        error_text: '#ef233c'
      }
    },
    variants: {
      extend: {
        backdropBlur: ['responsive'] // or other variants you want to enable
      }
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.on-scrollbar': {
          '-ms-overflow-style': 'none',
          '-ms-overflow-width': 'none'
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
export default config;
