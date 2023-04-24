import React, { useState, useEffect } from "react";
import Title from "../Title";

export default function JsonPost() {

  const [post, setPost] = useState(null);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => setPost(data));

  }, []);

  return (
    <div>
      <Title title="Json Post" />
      {post ? (
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ):(
            <p>Carregando...</p>
        ) }
    </div>
  );
}