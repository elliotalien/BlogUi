import React from 'react';
import axios from 'axios';
import "./style.css";

const DashboardForm = ({ formData, handleChange, resetForm }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formDataToSubmit = {
      titleheading: formData.titleheading,
      titledescription: formData.titledescription,
      description:formData.description,
      imageUrl: formData.imageurl,
    };

    try {
      const response = await axios.post(
        "https://blog-api-27t6.onrender.com/createblog",
        formDataToSubmit
      );
      if (response.status === 200) {
        alert(response.data);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Blog post failed!");
    }
  };

  return (
    <div className="main-block">
      <form onSubmit={handleSubmit}>
        <h1>Create New Post</h1>
        <div className="info">
          <input
            className="fname"
            type="text"
            name="titleheading"
            placeholder="TITLE HEADING"
            value={formData.titleheading}
            onChange={handleChange}
          />
          <input
            type="text"
            name="titledescription"
            placeholder="Title Description"
            value={formData.titledescription}
            onChange={handleChange}
          />
          <input
            type="text"
            name="imageurl"
            placeholder="Image Url"
            value={formData.imageurl}
            onChange={handleChange}
          />
        </div>
        <p>Description</p>
        <div>
          <textarea
            rows={4}
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DashboardForm;
