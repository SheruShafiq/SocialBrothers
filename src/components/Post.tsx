import React from "react";
import "../styles/Post.scss";

function Post() {
  return (
    <div id="postParent">
      <div id="bannerImg">
        <p id="bannerText">12-16-2019</p>
        <p id="bannerText">Tech</p>
      </div>
      <div id="postInfo">
        <h1 id="postTitle">Heading</h1>
        <p id="postContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget metus blandit, pharetra nisi eu, aliquet leo. risus, id lobortis
          massa ultrices nec.
        </p>
      </div>
    </div>
  );
}

export default Post;
