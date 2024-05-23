import React from 'react'

const Post = (props) => {
  return (
    <li className="w3-padding-16">
    <img src={props.Image} alt={props.heading} className="w3-left w3-margin-right" style={{ width: 50 }} />
    <span className="w3-large">{props.heading}</span>
    <br />
    <span>{props.description}</span>
  </li>  )
}

export default Post