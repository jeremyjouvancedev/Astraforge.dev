import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'astra-black': '#0a0a0f',
        'astra-dark': '#111118',
        'astra-darker': '#1a1a24',
        'astra-cyan': '#00f0ff',
        'astra-green': '#00ff41',
        'astra-amber': '#ffb000',
        'astra-text': '#e0e0e0',
        'astra-text-dim': '#8a8a9a',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'Courier New', 'monospace'],
        body: ['var(--font-ibm-plex-mono)', 'IBM Plex Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'scan-line': 'scan-line 8s linear infinite',
        'glitch': 'glitch 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-in': 'slide-in 0.8s ease-out',
      },
      keyframes: {
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 240, 255, 0.6)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
};

export default config;
