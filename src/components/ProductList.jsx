import { useEffect, useState } from 'react';
import api from '../api';
import ProductItem from './ProductItem';

export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/produtos').then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <h2 style={{fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: "center"}}>Produtos</h2>
      <div >
        <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center'}}
        >
        {products.map((product) => (
            <div
            key={product.id}
            style={{ width: '33.33%', display: 'flex', justifyContent: 'center', padding: '10px 0'}}
            >
            <ProductItem product={product} addToCart={addToCart} />
            </div>
        ))}
        </div>

      </div>
    </div>
  );
}
