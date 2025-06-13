import { useState } from 'react';

export default function ProductItem({ product, addToCart }) {
  const [addedMessage, setAddedMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000); // esconde após 2s
  };

  return (
    <div
      style={{
        width: '300px',
        backgroundColor: '#b08c51',
        borderRadius: '10px',
        paddingBottom: 30,
        padding: 20,
      }}
    >
      <h3
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        {product.nome}
      </h3>
      <p
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Preço: R$ {product.preco.toFixed(2)}
      </p>
      <button
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: '#b08c51',
          backgroundColor: 'white',
          border: 'none',
          width: '140px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleAddToCart}
      >
        Adicionar ao Carrinho
      </button>

      {addedMessage && (
        <p
          style={{
            marginTop: '10px',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: '#ffffff',
            fontSize: '14px',
          }}
        >
          ✅ Produto adicionado ao carrinho!
        </p>
      )}
    </div>
  );
}
