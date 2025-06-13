import { useState } from 'react';

export default function CartSummary({ cart, setCart }) {
  const [message, setMessage] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.preco, 0);

  const handleCheckout = () => {
    setMessage(true);
    setCart([]); // limpa carrinho
    setTimeout(() => setMessage(false), 2000); // oculta mensagem após 2s
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Resumo da Compra
      </h2>
      <p
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Total: R$ {total.toFixed(2)}
      </p>
      <button
        style={{
          width: '200px',
          height: '30px',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'green',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
        }}
        disabled={cart.length === 0}
        onClick={handleCheckout}
      >
        Finalizar Compra
      </button>

      {message && (
        <p
          style={{
            marginTop: '10px',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'green',
            fontSize: '14px',
          }}
        >
          ✅ Compra realizada!
        </p>
      )}
    </div>
  );
}
