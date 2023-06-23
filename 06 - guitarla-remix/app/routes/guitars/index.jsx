import { useLoaderData } from '@remix-run/react'
import { GuitarList } from '~/components/guitarList'
import { getGuitars } from '~/models/guitars.server'

export function meta(){
  return {
    title: 'GuitarLA - Guitar Shop',
    description: 'GuitarLA - Our guitar collection'
  }
}


export async function loader(){
  const guitars = await getGuitars()
  return guitars.data
}


const Shop = () => {
  const guitars = useLoaderData();

  return (
    <GuitarList
      guitars={guitars}
      />
  )
}

export default Shop