import Cart from '../components/Cart';
import CartSummary from '../components/CartSummary';

export default function CartPage({ cart, deleteToCart, setCart }) {
  return (
    <main style={{ padding: '20px' }}>
      <Cart cart={cart} deleteToCart={deleteToCart} />
      <CartSummary cart={cart} setCart={setCart} />
    </main>
  );
}
