 import { useEffect, useState } from 'react'
 import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
 } from '@remix-run/react'
 import styles from '~/styles/index.css'
 import Header from '~/components/header'
 import Footer from '~/components/footer'


 export function meta(){
  return (
    {
      charset: 'utf-8',
      title: 'GuitarLA - Remix',
      viewport: 'width=device-width,initial-scale=1'
    }
  )
 }
 
 export default function App () {
  // resilence for SSR, wait for client side to load local storage
  const cartLocalStorage = typeof window !== 'undefined' && (JSON.parse(localStorage.getItem('cart')) || [])
  const [ cart, setCart ] = useState(cartLocalStorage)


  //LOCAL STORAGE
  useEffect(() => {
    if(typeof window !== 'undefined'){
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  const addToCart = (guitar) => {
    if(cart.some(guitarState => guitarState.id === guitar.id)){
      // the element already exists
      const updatedCart = cart.map( guitarState => {
        if(guitarState.id === guitar.id){
          guitarState.quantity = guitar.quantity
        }
        return guitarState
      })

      setCart(updatedCart)
    } else {
      //new row
      setCart([...cart, guitar])
    }
  }

  const updateQuantity = (guitar) => {
    console.log(guitar)
    const updatedCart = cart.map(guitarState => {
      if(guitarState.id === guitar.id) {
        guitarState.quantity = guitar.quantity;
      }
      return guitarState
    })

    setCart(updatedCart)
  }

  const deleteGuitar = (id) => {
    const updatedCart = cart.filter(guitarState => guitarState.id !== id)
    setCart(updatedCart)
  }
  return (
    <Document>
      <Outlet 
        context={{
          addToCart,
          updateQuantity,
          cart,
          deleteGuitar
        }}
      />
    </Document>
  )
 }

 export function links(){
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: "true"
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
    }
  ]
 }

 function Document({ children }) {
    return (
      <html lang="es">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <Header />
          {children}
          <Footer />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
 }


//  ERROR HANDLING
export function CatchBoundary(){
  const error = useCatch()
  return (
    <Document>
      <p className='error'>
        {error.status} {error.statusText}
      </p>
      <Link className='error-link' to="/">May you want to go back</Link>
    </Document>
  )
}

export function ErrorBoundary({error}){
  return (
    <Document>
      <p className='error'>
        {error.status} {error.statusText}
      </p>
      <Link className='error-link' to="/">May you want to go back</Link>
    </Document>
  )
}