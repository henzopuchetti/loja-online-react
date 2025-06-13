import ProductList from '../components/ProductList';

export default function Home({ addToCart }) {
  return (
    <main style={{ padding: '20px' }}>
      <ProductList addToCart={addToCart} />
    </main>
  );
}
