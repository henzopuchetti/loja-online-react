import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        borderBottom: '1px solid #ccc',
        backgroundColor: '#b08c51',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ margin: 0, fontFamily: 'sans-serif', fontWeight: 'bold', color: "white"}}>Loja Online</h1>

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          fontSize: '18px',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
          Produtos
        </Link>
        <Link to="/cart" style={{ fontSize: '24px', textDecoration: 'none', color: "white"}}>
          🛒
        </Link>
      </nav>
    </header>
  );
}
