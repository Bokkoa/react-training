import { useLoaderData } from "@remix-run/react"
import { GuitarList } from "~/components/guitarList"
import { getGuitars } from "~/models/guitars.server"
import { getPosts } from "~/models/posts.server"
import { getCourse } from "~/models/course.server"

import guitarStyles from '~/styles/guitars.css'
import postsStyles from '~/styles/blog.css'
import courseStyles from '~/styles/course.css'
import { PostList } from "~/components/postList"
import { Course } from "~/components/course"

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: guitarStyles
    },{
      rel: 'stylesheet',
      href: postsStyles
    },
    {
      rel: 'stylesheet',
      href: courseStyles
    }
  ]
}
export function meta(){

}

export async function loader(){

  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ])

  console.log(guitars)
  console.log(posts)
  console.log(course)
  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  }
}

function Index() {

  const {guitars, posts, course} = useLoaderData()

  return (
    <>
      <main className="container">
      <GuitarList guitars={guitars} />
      </main>
      <Course
        course={course.attributes}
      />
      <section className="container">
        <PostList
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index