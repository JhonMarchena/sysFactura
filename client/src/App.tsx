import { Link } from 'react-router'

function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center gap-4">
      <Link to="/home">Home</Link>
      <Link to="/factura">Factura</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/sucursales">Clientes</Link>
      <Link to="/users">Usuarios</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default App
