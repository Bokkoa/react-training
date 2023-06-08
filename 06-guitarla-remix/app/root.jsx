 import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload
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
  return (
    <Document>
      <Outlet />
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
      crossOrigin: true
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