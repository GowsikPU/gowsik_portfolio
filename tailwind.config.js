export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { paper: '#FAF9F6', sand: '#F0EDE7', ink: '#151515', muted: '#77736F', clay: '#A36D5C', beige: '#D9C7B9', line: '#E5E0DA' },
    fontFamily: { display: ['Manrope', 'sans-serif'], body: ['Inter', 'sans-serif'], serif: ['"Playfair Display"', 'serif'] }
  } },
  plugins: []
}
