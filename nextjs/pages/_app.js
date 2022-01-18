import '../styles/globals.css'

const products = [
  'tooth paste',
  'tooth brush',
  'mouth wash',
  'dental floss',
  'mouth guard'
]

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} incrementBy={1} products={products} />
}

export default MyApp
