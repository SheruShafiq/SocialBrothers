import React from "react";
import "../styles/Post.scss";

export type PostProps = {
  date: string;
  category: string;
  title: string;
  content: string;
};

function Post(props: PostProps) {
  const { date, category, title, content } = props;

  return (
    <div id="postParent">
      <div id="bannerImg">
        <p id="bannerText">{date}</p>
        <p id="bannerText">{category}</p>
      </div>
      <div id="postInfo">
        <h1 id="postTitle">{title}</h1>
        <p id="postContent">{content}</p>
      </div>
    </div>
  );
}

export default Post;
