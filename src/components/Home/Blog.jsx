import React, { useState } from "react";

const Blog = (props) => {
  const sliceContent = props.description.slice(0, 250);
  const [showFullContent, setShowFullContent] = useState(false);

  const ReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="w3-card-4 w3-margin w3-white" style={{marginBottom:"50px"}}>
      <img
        src={props.imageUrl}
        alt="Nature"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
      />
      <div className="w3-container">
        <h3>
          <b>{props.titleheading}</b>
        </h3>
        <h5>
          {props.titledescription}{'   ,'}
          <span className="w3-opacity">{props.date}</span>
        </h5>
      </div>
      <div className="w3-container">
        {showFullContent ? <p>{props.description}</p> : <p>{sliceContent}</p>}
        <div className="w3-row">
          <div className="w3-col m8 s12">
            <p>
              <button
                className="w3-button w3-padding-large w3-white w3-border"
                onClick={ReadMoreClick}
              >
                {showFullContent ? <b>READ LESS </b> : <b>READ MORE »</b>}
              </button>
            </p>
          </div>
          <div className="w3-col m4 w3-hide-small">
            <p>
              <span className="w3-padding-large w3-right">
                <b>Comments &nbsp;</b> <span className="w3-tag">0</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
