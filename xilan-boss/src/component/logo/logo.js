import React from "react";
import ImageLogo from "./logo.png";
import "./logo.css";

class Logo extends React.Component {
  render() {
    return <img src={ImageLogo} className={"logo-container"} />;
  }
}

export default Logo;
