import React, { useEffect, useState } from "react";
import "../styles/Posts.scss";
import Post from "./Post";
import Button from "./Button";

interface PostType {
  id: string;
  created_at: string;
  category: {
    name: string;
  };
  title: string;
  content: string;
}

interface ButtonProps {
  submitButtonText: string;
  handleSubmit: () => void;
}

// The Posts component fetches posts from the API, and displays them using the Post component.
const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState<number>(1);

  // The loadPosts function fetches the posts from the API. It takes a page number as an argument, and returns a Promise. It uses the fetch API to make a GET request to the API. It uses the page number to set the url of the request. It uses the token provided in the environment variable to authenticate the request. If the response is successful, it parses the response into a JSON object. It then sets the posts state variable using the data from the response.
  const loadPosts = async (pageNum: number): Promise<void> => {
    const url = `https://frontend-case-api.sbdev.nl/api/posts?page=${pageNum}&perPage=4&sortBy=created_at&sortDirection=desc&searchPhrase=test%20ber&categoryId=1`;
    // console.log(import.meta.env);
    const headers = {
      token: import.meta.env.VITE_APP_TOKEN,
    };

    try {
      const response = await fetch(url, { headers: headers });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPosts((oldPosts) => [...oldPosts, ...data.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMorePosts = (): void => {
    loadPosts(page + 1).then(() => setPage((oldPage) => oldPage + 1));
  };

  // The useEffect hook is used to call the loadPosts function with page number 1 on the initial render. This is to avoid making a request to the API when the page is first loaded.
  useEffect(() => {
    if (page === 1) {
      //on initial render
      loadPosts(page);
    }
  }, []);

  return (
    <div id="PostsComponentParent">
      <div id="PostsParent">
        {posts.map((post: PostType) => (
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
};

export default Posts;
