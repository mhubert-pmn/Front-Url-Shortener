import React from "react";
import { Header } from "./Header/Header";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="background">
      <Header />
      <div className="propsLayout">{props.children}</div>
      <div className="opacity"></div>
    </div>
  );
}

export default Layout;
