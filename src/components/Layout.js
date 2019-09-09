import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
  // const children = props.children; props.children;
}
export default Layout;
