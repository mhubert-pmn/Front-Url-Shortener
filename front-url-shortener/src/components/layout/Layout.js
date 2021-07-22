import React from "react";
import { Header } from "./Header/Header";
import "./Layout.scss";

export default function Layout(props) {
  return (
    <div class="background">
      <Header />
      <div class="propsLayout">{props.children}</div>
      <div class="opacity"></div>
    </div>
  );
}
