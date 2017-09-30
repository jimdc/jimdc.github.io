import Typography from 'typography'

const fontStack = [
  'Overpass',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Fira Sans',
  'Cantarell',
  'Ubuntu',
  'sans-serif',
]

const typography = new Typography({
  title: 'kbrgl',
  baseFontSize: '14px',
  scaleRatio: 1.1,
  googleFonts: [
    {
      name: 'Overpass',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerColor: '#000',
  headerFontFamily: fontStack,
  bodyColor: '#434343',
  bodyFontFamily: fontStack,
})

export default typography
