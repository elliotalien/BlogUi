import React, { useState } from 'react';
import DashboardPreview from './DashboardPreview';
import DashboardForm from './DashboardForm';
import { v4 as uuidv4 } from "uuid";

const DashboardMaincontent = () => {
  const [formData, setFormData] = useState({
    titleheading: '',
    titledescription: '',
    imageurl: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { ...formData, id: uuidv4(), date: new Date().toLocaleDateString() };
    console.log(newPost);
    // Reset form
    setFormData({
      titleheading: '',
      titledescription: '',
      imageurl: '',
      description: ''
    });
  };

  return (
    <div className="w3-row">
      <div className="w3-col l5">
        <DashboardForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="w3-col l6 s12" style={{ marginTop: "58px" }}>
        <DashboardPreview
          title={formData.titleheading}
          description={formData.titledescription}
          imageUrl={formData.imageurl}
          date={new Date().toLocaleDateString()}
          content={formData.description}
        />
      </div>
    </div>
  );
};

export default DashboardMaincontent;
