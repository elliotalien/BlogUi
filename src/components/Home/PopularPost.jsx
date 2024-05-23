import React from "react";
import Post from "./Post";
import { PopularPosts } from "../../Data/data";
import { v4 as uuidv4 } from "uuid";

const PopularPost = () => {
  return (
    <>
      <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
          <h4>Popular Posts</h4>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">
          {PopularPosts.map((data) => (
            <Post
              key={uuidv4()}
             {...data}
            />
          ))}
        </ul>
      </div>
      <hr />
    </>
  );
};

export default PopularPost;
