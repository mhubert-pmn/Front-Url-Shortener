import React from "react";
import './formHeader.scss';

const FormHeader = (props) => {
  return(
    <div className="formHeader">
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>  
    </div>    
  )
}

export default FormHeader;