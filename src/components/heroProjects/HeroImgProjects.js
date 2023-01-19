import "./HeroImgProjectsStyles.css";

import React, { Component } from "react";

//to pass a value instate to const I use class that allowed me to use this. props
class HeoImgProjects extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeoImgProjects;
