import { useLoaderData } from '@remix-run/react';
import { getPostsByUrl } from '~/models/posts.server';
import { formatDate } from '~/utils/helpers';

export async function loader({params}){
  const { postUrl } = params;
  const post = await getPostsByUrl(postUrl)

  if(post.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Post not found'
    })
  }
  return post
}

export function meta({data}){

  if(!data){
    return {
      title: 'GuitarLA - Post not found',
      description: 'Post - Post not found'
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.name}`,
    description: `Post, Post - Post ${data.data[0].attributes.name}`
  }
}

function PostUrl() {
  const post = useLoaderData()
  const { title, image, content, publishedAt} =  post.data[0]?.attributes
  return (
    <article className='post mt-3'>
      <img src={image.data.attributes.url} alt={`post ${title}`} className="image" />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </article>
  )
}

export default PostUrl