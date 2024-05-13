import { Outlet } from '@remix-run/react'
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

// WORKS AS LAYOUT BECAUSE HAVE THE SAME NAME AS THE FOLDER (/posts)
const Blog = () => {

  return (
    <main className="container">
     <Outlet />
    </main>
  )
}

export default Blog