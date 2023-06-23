import { useLoaderData } from '@remix-run/react'
import { PostList } from '~/components/postList'
import { getPosts } from '~/models/posts.server'

export function meta(){
  return {
    title: 'GuitarLA - Our blog',
    description: 'GuitarLA, Music blog and guitar selling'
  }
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()

  return (
    <PostList posts={posts} />
  )
}

export default Blog