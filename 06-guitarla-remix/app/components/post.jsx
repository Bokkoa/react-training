import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

export default function Post ({post}) {
  const { content, image, title, url, publishedAt} = post
  return (
    <article className="post">
      <img src={image.data.attributes.formats.medium.url} alt={`post ${title}`} className="image" />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="resume">
          {content}
        </p>
        <Link className="link" to={`/posts/${url}`}>Read post</Link>
      </div>
    </article>
  )
}
