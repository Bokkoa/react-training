import { useLoaderData } from '@remix-run/react'
import Guitar from '~/components/guitar'
import { getGuitars } from '~/models/guitars.server'

export async function loader(){
  const guitars = await getGuitars()
  return guitars.data
}


const Shop = () => {
  const guitars = useLoaderData();

  return (
    <main className="container">
      <h2 className="heading">Our collection</h2>
      {guitars.length && (
        <div className="guitars-grid">
          {guitars.map(guitar => (
            <Guitar key={guitar.id} guitar={guitar}/>
          ))}
        </div>
      )

      }
    </main>
  )
}

export default Shop