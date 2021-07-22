import React from "react";
import { Header } from "./Header/Header";
import "./Layout.scss";

export default function Layout(props) {
  return (
    <div className="background">
      <Header />
      <div className="propsLayout">{props.children}</div>
      <div className="opacity"></div>
    </div>
  );
}
