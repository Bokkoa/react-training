import { useLoaderData } from "@remix-run/react"
import { GuitarList } from "~/components/guitarList"
import { getGuitars } from "~/models/guitars.server"
import { getPosts } from "~/models/posts.server"

import guitarStyles from '~/styles/guitars.css'
import postsStyles from '~/styles/blog.css'
import { PostList } from "~/components/postList"

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: guitarStyles
    },{
      rel: 'stylesheet',
      href: postsStyles
    }
  ]
}
export function meta(){

}

export async function loader(){

  const [guitars, posts] = await Promise.all([
    getGuitars(),
    getPosts()
  ])

  console.log(guitars)
  console.log(posts)
  return {
    guitars: guitars.data,
    posts: posts.data
  }
}

function Index() {

  const {guitars, posts} = useLoaderData()

  return (
    <>
      <main className="container">
      <GuitarList guitars={guitars} />
      </main>
      <section className="container">
        <PostList
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index