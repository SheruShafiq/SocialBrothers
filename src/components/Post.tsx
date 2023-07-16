import React, { useState, useEffect } from "react";
import "../styles/Post.scss";

export type PostProps = {
  date: string;
  category: string;
  title: string;
  content: string;
};

function Post(props: PostProps) {
  const { date, category, title, content } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading delay for 2 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div id="postParent">
      <div id="bannerImg" className={isLoading ? "is-loading" : ""}>
        {isLoading ? (
          <></>
        ) : (
          <>
            <p id="bannerText">{date}</p>
            <p id="bannerText">{category}</p>
          </>
        )}
      </div>
      <div id="postInfo" className={isLoading ? "is-loading" : ""}>
        {isLoading ? (
          <>
            <h1 className="skeleton-text" id="postTitle" />
            <p className="skeleton-text" id="postContent" />
          </>
        ) : (
          <>
            <h1 id="postTitle">{title}</h1>
            <p id="postContent">{content}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Post;
