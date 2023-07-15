import React, { useEffect, useState } from "react";
import "../styles/Posts.scss";
import Post from "./Post";
import Button from "./Button";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // Set initial page to 1

  const loadPosts = (pageNum) => {
    const url = `https://frontend-case-api.sbdev.nl/api/posts?page=${pageNum}&perPage=4&sortBy=created_at&sortDirection=desc&searchPhrase=test%20ber&categoryId=1`;

    const headers = {
      token: "pj11daaQRz7zUIH56B9Z",
    };

    return fetch(url, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((oldPosts) => [...oldPosts, ...data.data]); // Store the fetched posts in state
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadMorePosts = () => {
    setPage((oldPage) => oldPage + 1); // increment the page number
  };

  useEffect(() => {
    loadPosts(page);
  }, [page]); // Run the effect whenever the page number changes

  return (
    <div id="PostsComponentParent">
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
      </div>
      <div id="postsButton">
        <Button submitButtonText="Laad meer" handleSubmit={loadMorePosts} />
      </div>
    </div>
  );
}

export default Posts;
