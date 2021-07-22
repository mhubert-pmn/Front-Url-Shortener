import React from "react";
import { Link } from "react-router-dom";
import FormHeader from "../FormHeader/FormHeader";
import FormLayout from "../FormLayout/FormLayout";
import './form.scss';

const Form = ({ children, title, subtitle, text, link, link_text, ...props }) => {
  return(
    <FormLayout>
        <FormHeader title={title} subtitle={subtitle} />

        <div className="form">
          {children}
          <p>{text} <Link to={link}>{link_text}</Link></p>
      </div>
    </FormLayout>  
  )
}

export default Form;