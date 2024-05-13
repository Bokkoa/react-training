import { Link, useLocation } from "@remix-run/react"
import cartImg from '../../public/img/cart.png'
function Navigation() {
  const location = useLocation();
  return (
    <nav className="navigation">
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'active' : ''}
      >Home</Link>
      <Link 
        to="/about" 
        className={location.pathname === '/about' ? 'active' : ''}
      >About Us</Link>
      <Link 
        to="/guitars" 
        className={location.pathname === '/guitars' ? 'active' : ''}
      >Guitars</Link>
      <Link 
        className={location.pathname === '/posts' ? 'active' : ''}
        to="/posts" 
      >Blog</Link>
      <Link 
        to="/cart" 
      >
        <img src={cartImg} alt="purchase cart" />
      </Link>
    </nav>
  )
}

export default Navigation