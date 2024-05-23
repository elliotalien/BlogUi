import React from "react";
import TagList from "./TagsList";
import { tagdata } from "../../Data/data";
import { v4 as uuidv4 } from "uuid";

const Tag = () => {
  return (
    <div className="w3-card w3-margin">
      <div className="w3-container w3-padding">
        <h4>Tags</h4>
      </div>
      <div className="w3-container w3-white">
        <p>
          <span className="w3-tag w3-black w3-margin-bottom">Travel</span>
          {tagdata.map((data) => (
            <TagList key={uuidv4()} list={data} />
          ))}
        </p>
      </div>
    </div>
  );
};

export default Tag;
