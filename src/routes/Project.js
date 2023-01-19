import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImgProjects from "../components/heroProjects/HeroImgProjects";
import Work from "../components/myWorks/Work";

function Project() {
  return (
    <div>
      <Navbar />
      <HeroImgProjects heading="PROJECTS." text="Some of my recent works" />
      <Work />
      <Footer />
    </div>
  );
}

export default Project;
