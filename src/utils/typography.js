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
  headerColor: '#373d3f',
  headerFontFamily: fontStack,
  bodyColor: '#373d3f',
  bodyFontFamily: fontStack,
})

export default typography
