import React from 'react'

const AboutCard = (props) => {
  return (
    <div className="w3-card w3-margin w3-margin-top">
    <img src={props.Image} style={{ width: "100%" }} alt='image'/>
    <div className="w3-container w3-white">
      <h4>
        <b>{props.heading}</b>
      </h4>
      <p>{props.about}</p>
    </div>
  </div>
  )
}

export default AboutCard