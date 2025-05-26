import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundColor: '#080b2a',
        primary: '#15bffd',
        lightBlue: '#15bffd',
        borderColor: '#15bffd',
      },

        fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        clash: ['"Clash Display"', 'sans-serif'],
        clashRegular: ['"Clash Display Regular"', 'sans-serif'],
        Studio: ['"Studio Pro"', 'sans-serif'],
      },

      animation:{
          'animate-img': 'animateImg 1.6s linear infinite',
      },
      keyframes: {
           animateImg: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      }
    },
    
  },
  
  plugins: [],
} satisfies Config;
