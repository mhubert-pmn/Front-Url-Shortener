import React from "react";
import './form.scss';

const Form = (props) => {
  return(
    <div className="form">
      {props.children}
      <p>{props.text} <a href={props.link}>{props.link_text}</a></p>
    </div>    
  )
}

export default Form;