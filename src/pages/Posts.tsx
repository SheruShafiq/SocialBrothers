import React, { useEffect, useState } from "react";
import "../styles/Posts.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { NavMenuItems } from "./Home";
import Logo from "../assets/logo.svg";
import Post from "../components/Post";
import "../styles/PostsComponent.scss";
import { useLocation } from "react-router-dom";

function Posts() {
  const [navMenuItems, setNavMenuItems] = React.useState<NavMenuItems[]>([]);
  const [posts, setPosts] = useState();

  useEffect(() => {
    const url =
      "https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=8&sortBy=created_at&sortDirection=desc&searchPhrase=test%20ber&categoryId=1";

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

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setNavMenuItems([
        { heading: "Home", url: "/", active: true },
        { heading: "Blog", url: "/Posts", active: false },
      ]);
    } else if (location.pathname === "/Posts") {
      setNavMenuItems([
        { heading: "Home", url: "/", active: false },
        { heading: "Blog", url: "/Posts", active: true },
      ]);
    }
  }, [location]);
  return (
    <div id="Parent">
      <Header logo={Logo} navMenuItems={navMenuItems} />
      <div id="postsViewParent">
        <div id="postsView">
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
      </div>
      <div id="pageNav"></div>
      <Footer />
    </div>
  );
}

export default Posts;
