export async function getPosts(){
  const res = await  fetch(`${process.env.API_URL}/posts?populate=image`)
  const result = await res.json()
  return result
}

export async function getPostsByUrl(url){
  const res = await  fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
  const result = await res.json()
  return result
}