import React, { useState } from "react";

const DashboardPreview = ({ title, description, imageUrl, date, content }) => {
  const sliceContent = content.slice(0, 250);
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="w3-card-4 w3-margin w3-white">
      <img
        src={imageUrl || "https://www.w3schools.com/w3images/woods.jpg"}
        alt="Preview"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <div className="w3-container">
        <h3>
          <b>{title || "Title Heading"}</b>
        </h3>
        <h5>
          {description || "Title Description ,"}{" "}
          <span className="w3-opacity">{date}</span>
        </h5>
      </div>
      <div className="w3-container"> 
        <div>
          {showFullContent ? (
            <p style={{ wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal'}}>
              {content ||
                " Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi noncongue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sedvitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}
            </p>
          ) : (
            <p style={{ wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal'}}>
              {sliceContent ||
                " Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi noncongue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sedvitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}
            </p>
          )}
        </div>
        <div className="w3-row">
          <div className="w3-col m8 s12">
            <p>
              <button
                className="w3-button w3-padding-large w3-white w3-border"
                onClick={handleReadMoreClick}
              >
                {showFullContent ? <b>READ LESS</b> : <b>READ MORE »</b>}
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

export default DashboardPreview;
