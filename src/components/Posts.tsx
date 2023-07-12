import React from "react";
import "../styles/Posts.scss";
import Post from "./Post";

function Posts() {
  return (
    <div id="PostsParent">
      <Post
        date="12-16-2019"
        category="Tech"
        title="Heading"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget metus blandit, pharetra nisi eu, aliquet leo. risus, id lobortis massa ultrices nec."
      />
      <Post
        date="12-16-2019"
        category="Tech"
        title="Heading"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget metus blandit, pharetra nisi eu, aliquet leo. risus, id lobortis massa ultrices nec."
      />
    </div>
  );
}

export default Posts;
