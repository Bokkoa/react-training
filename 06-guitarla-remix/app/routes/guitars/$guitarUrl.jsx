import { useLoaderData } from '@remix-run/react';
import { getGuitarByUrlName } from '~/models/guitars.server'
import styles from '~/styles/guitars.css'


export async function loader({params}){
  const { guitarUrl } = params;
  const guitar = await getGuitarByUrlName(guitarUrl)

  if(guitar.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Guitar not found'
    })
  }
  return guitar
}

export function meta({data}){

  if(!data){
    return {
      title: 'GuitarLA - Guitar not found',
      description: 'Guitars, guitars selling - guitar not found'
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.name}`,
    description: `Guitars, guitars selling - guitar ${data.data[0].attributes.name}`
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

function GuitarUrl() {
  const guitar = useLoaderData()
  const { name, description, image, price } =  guitar.data[0].attributes
  return (
    <main className="container guitar">
      <img src={image.data.attributes.url} alt={`guitar ${name}`} className="image" />
      <div className="content">
        <h3 className="name">{name}</h3>
        <p className="text">{description}</p>
        <p className="price">{price}</p>
      </div>
    </main>
  )
}

export default GuitarUrl