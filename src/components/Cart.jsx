export default function Cart({ cart, deleteToCart }) {
  return (
    <div>
      <h2 style={{fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: "center"}}>Carrinho</h2>
      {cart.length === 0 ? (
        <p style={{fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: "center"}}>Seu carrinho está vazio.</p>
      ) : (
        cart.map((item, index) => (
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: "center"}} 
          key={index}>
            {item.nome} - R$ {item.preco.toFixed(2)} 
            <button style={{width: "100px", fontFamily: "sans-serif", fontWeight: "bold", color: "white", backgroundColor: "red", border: "none", borderRadius: "5px", marginTop: "10px"}} 
            onClick={() => deleteToCart(index)}>Remover</button>
          </div>
          
        ))
      )}
    </div>
  );
}
