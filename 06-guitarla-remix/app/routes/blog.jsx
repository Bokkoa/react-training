import { useLoaderData } from '@remix-run/react'
import { PostList } from '~/components/postList'
import { getPosts } from '~/models/posts.server'
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const posts = await getPosts()
 
  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()

  return (
    <main className="container">
      <PostList posts={posts} />
    </main>
  )
}

export default Blog