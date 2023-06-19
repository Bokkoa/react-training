import { useLoaderData, useOutletContext } from '@remix-run/react';
import { useState } from 'react';
import { getGuitarByUrlName } from '~/models/guitars.server'


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

function GuitarUrl() {
  const {addToCart} = useOutletContext()
  const [quantity, setQuantity] = useState(0)
  const guitar = useLoaderData()
  const { name, description, image, price } =  guitar.data[0].attributes

  const handleSubmit = (e) => {
    e.preventDefault()

    if(quantity < 1){
      alert('You must select a quantity')
      return
    }

    const selectedGuitar = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      quantity
    }
    console.log(selectedGuitar)
    addToCart(selectedGuitar)
  }

  return (
    <div className="guitar">
      <img src={image.data.attributes.url} alt={`guitar ${name}`} className="image" />
      <div className="content">
        <h3 className="name">{name}</h3>
        <p className="text">{description}</p>
        <p className="price">{price}</p>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor='quantity'>Quantity</label>

          <select 
            onChange={e => setQuantity(parseInt(e.target.value))}
            id="quantity">
            <option value="0">--- Select ---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type="submit" 
            value="Add to cart"
          />
        </form>
      </div>
    </div>
  )
}

export default GuitarUrl