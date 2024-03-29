import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import React from 'react'

function PostList() {
    const posts=useSelector(selectAllPosts)

    const renderedPosts=posts.map(post=>
        (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0,100)}</p>
                <p className="postCredit" >
                </p>
            </article>
        ))
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostList