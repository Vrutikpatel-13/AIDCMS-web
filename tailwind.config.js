/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/css/input.css",
    "./*.html",
    "./pages/**/*.html",
    "./auth/**/*.html",
    "./servers/**/*.html",
    "./network/**/*.html",
    "./storage-capacity/**/*.html",
    "./energy-cooling/**/*.html",
    "./ai-optimization/**/*.html",
    "./alerts/**/*.html",
    "./analytics/**/*.html",
    "./integrations/**/*.html",
    "./administration/**/*.html",
    "./governance/**/*.html",
    "./assets/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00BFFF',
        'background-light': '#f5f7f8',
        'background-dark': '#121212',
        'surface-dark': '#1E1E1E',
        'border-dark': '#314d68',
        'accent-green': '#39FF14',
        'text-light': '#E0E0E0',
        'text-medium': '#90adcb',
        'status-high': '#2ECC71',
        'status-medium': '#F39C12',
        'status-low': '#E74C3C',
        "neon-blue": "#4D96FF",
        "neon-green": "#00FFA3",
        "success": "#39FF14",
        "error": "#FF4136",
        "primary": "#0dccf2",
        "accent-warning": "#ffc107",
        "accent-critical": "#dc3545",
        "panel-dark": "#182b34",
        "border-dark": "#315668",
        "status-green": "#0bda57",
        "status-red": "#fa5f38",
        "status-yellow": "#FFBF00",
        "anomaly-green": "#39FF14",
        "anomaly-blue": "#00BFFF",
        "high-usage": "#FF8C00",
        "medium-usage": "#4A90E2",
        "low-usage": "#2E8B57",
        "high-severity": "#ff2d78",
        "medium-severity": "#ffab00",
        "low-severity": "#0ddff2",
      },
      fontFamily: {
        display: ['Inter', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
