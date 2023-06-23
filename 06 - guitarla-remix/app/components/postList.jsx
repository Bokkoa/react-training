import Post from "./post"

export const PostList = ({posts}) => {
  return (
    <>
      <h2 className="heading">BLOG</h2>
      <div className="blog">
        {posts.map(post => (
          <Post
            post={post.attributes}
            key={post.id}
          />
        ))}
      </div>
    </>
  )
}
