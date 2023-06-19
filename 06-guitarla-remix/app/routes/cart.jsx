import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/cart.css'
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta(){
  return {
    title: 'GuitarLA - Cart',
    description: 'Guitar selling, music, blog, purchase cart, shop'
  }
}

export function Cart(){
  const { cart, updateQuantity } = useOutletContext()
  return (
    <main className="container">
      <h1 className="heading">
        Purchase cart
      </h1>

      <div className="content">
        <div className="cart">
          <h2>Articles</h2>
          {cart.length === 0 ? 'Empty cart' :
            cart.map(product => (
              <div key={product.id} className='product'>
                <div>
                  <img src={product.image} alt={`Model ${product.name}`}  />
                </div>
                <div>
                  <p className="name">{product.name}</p>
                  <p>Quantity:</p>
                  <select 
                    className='select'
                    onChange={e => updateQuantity({
                      quantity: +e.target.value,
                      id: product.id
                    })}
                    value={product.quantity}>
                    <option value="0">--- Select ---</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <p className='price'>$<span>{product.price}</span></p>
                  <p className='subtotal'>Subtotal: $<span>{product.quantity * product.price}</span></p>
                </div>
              </div>
            ))}
        </div>
        <aside className="resume">
          <h3>Order summary</h3>
          <p>Total: $</p>
        </aside>
      </div>
    </main>
  )
}

export default Cart