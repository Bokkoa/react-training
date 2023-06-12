import { useLoaderData } from '@remix-run/react'
import Guitar from '~/components/guitar'
import { GuitarList } from '~/components/guitarList'
import { getGuitars } from '~/models/guitars.server'
import styles from '~/styles/guitars.css'

export function meta(){
  return {
    title: 'GuitarLA - Guitar Shop',
    description: 'GuitarLA - Our guitar collection'
  }
}


export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const guitars = await getGuitars()
  return guitars.data
}


const Shop = () => {
  const guitars = useLoaderData();

  return (
    <main className="container">
      <GuitarList />
    </main>
  )
}

export default Shop