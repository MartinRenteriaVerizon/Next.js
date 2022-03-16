// import Layout from '../components/Layout';
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "dental floss",
  "mouth guard",
];

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
      <Component {...pageProps} incrementBy={1} products={products} />
    // </Layout>
  );
}

export default MyApp;
