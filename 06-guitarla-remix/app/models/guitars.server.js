export async function getGuitars(){
  const res = await  fetch(`${process.env.API_URL}/guitars?populate=image`)
  const result = await res.json()
  return result
}