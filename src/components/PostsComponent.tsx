import React, { useEffect, useState } from "react";
import "../styles/Posts.scss";
import Post from "./Post";
import Button from "./Button";

function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const url =
      "https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=4&sortBy=created_at&sortDirection=desc&searchPhrase=test%20ber&categoryId=1";

    const headers = {
      token: "pj11daaQRz7zUIH56B9Z",
    };

    fetch(url, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data); // Store the fetched posts in state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Run the effect only once, on component mount

  return (
    <div id="PostsParent">
      {posts?.map((post) => (
        <Post
          key={post.id}
          date={post.created_at}
          category={post.category.name}
          title={post.title}
          content={post.content}
        />
      ))}

      <Button
        submitButtonText="Laad meer"
        handleSubmit={() => console.log("hi")}
      />
    </div>
  );
}

export default Posts;
