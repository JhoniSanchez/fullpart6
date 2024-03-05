import { useState } from "react"
// import "../../src/app.css"
import blogs from "../services/blogs"

const Blog = ({ blog, dele }) => {
  const [like, setlikes] = useState(0)
  const [visible, setvisible] = useState(false)

  const uplikes = async (id, data) => {
    setlikes(() => like + 1)
    await blogs.update(id, data)
  }
  let aa = like === 0 ? 1 : like+1
  const date = {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes + aa,
  }

  return (
    <div className="blog">
      <h3 style={{ "display": "inline" }}>{blog.title}</h3>
      {visible && <div><div>{blog.url}</div><div>{blog.author}</div>
        <button onClick={() => uplikes(blog.id, date)}>Likes: {like+blog.likes}</button></div>}
      <button onClick={() => { dele(blog.id, blog.title) }}>Delete</button>
      <button onClick={() => { setvisible(!visible) }}>{visible ? "Ocultar" : "Mostrar"}</button>
    </div>
  )
}



export default Blog