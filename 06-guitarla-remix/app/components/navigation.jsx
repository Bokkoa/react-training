import { Link, useLocation } from "@remix-run/react"

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
        to="/shop" 
        className={location.pathname === '/shop' ? 'active' : ''}
      >Shop</Link>
      <Link 
        className={location.pathname === '/blog' ? 'active' : ''}
        to="/blog" 
      >Blog</Link>
    </nav>
  )
}

export default Navigation