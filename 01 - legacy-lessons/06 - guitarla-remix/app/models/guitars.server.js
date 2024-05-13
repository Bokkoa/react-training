export async function getGuitars(){
  const res = await  fetch(`${process.env.API_URL}/guitars?populate=image`)
  const result = await res.json()
  return result
}

export async function getGuitarByUrlName(url){
  const res = await  fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
  const result = await res.json()
  return result
}