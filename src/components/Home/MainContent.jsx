import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import PopularPost from "./PopularPost";
import Tag from "./Tag";
import AboutCard from "./AboutCard";
import axios from "axios";
import { aboutdata } from "../../Data/data";
import { v4 as uuidv4 } from "uuid";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const MainContent = () => {
  const [postdata, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://blog-api-27t6.onrender.com/getposts");
        setPostData(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w3-row">
        <div className="w3-col l8 s12">
          {postdata.slice().reverse().map((data) => (
            <Blog key={uuidv4()} {...data} date={formatDate(data.date)} />
          ))}
          <hr />
        </div>
        <div className="w3-col l4">
          {aboutdata.map((data) => (
            <AboutCard {...data}  key={uuidv4()}/>
          ))}
          <hr />
          <PopularPost />
          <Tag />
        </div>
      </div>
      <br />
    </>
  );
};

export default MainContent;
