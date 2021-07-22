import React from "react";
import './formLayout.scss';

const FormLayout = (props) => {
  return(
    <div className="formLayout">
      <div className="formLayout_content">{props.children}</div>
    </div>    
  )
}

export default FormLayout;