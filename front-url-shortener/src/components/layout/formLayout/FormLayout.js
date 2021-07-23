import React from "react";
import './formLayout.scss';

const FormLayout = (props) => {
  return(
    <div className="formLayout">
      {props.children}
    </div>    
  )
}

export default FormLayout;