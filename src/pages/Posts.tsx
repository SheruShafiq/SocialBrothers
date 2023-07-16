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
import Pagination from "../components/Pagination";
import GrowBox from "../components/GrowBox";

function Posts() {
  const [navMenuItems, setNavMenuItems] = React.useState<NavMenuItems[]>([]);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url = `https://frontend-case-api.sbdev.nl/api/posts?page=${currentPage}&perPage=8&sortBy=created_at&sortDirection=desc&searchPhrase=test%20ber&categoryId=1`;

    const headers = {
      token: import.meta.env.VITE_APP_TOKEN,
    };

    fetch(url, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data); // Replace the existing posts with the new page of posts
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]); // Run the effect whenever currentPage changes

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

  // A simple pagination component

  return (
    <div id="Parent">
      <Header logo={Logo} navMenuItems={navMenuItems} title="Blog" />
      <div id="postsViewParent">
        <div id="postsView">
          {posts?.map((post: any) => (
            <Post
              key={post.id}
              date={post.created_at}
              category={post.category.name}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
        <div id="paginationNavigator">
          <Pagination
            totalPosts={102}
            postsPerPage={8}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <GrowBox />
      <Footer />
    </div>
  );
}

export default Posts;
