import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImgProjects from "../components/heroProjects/HeroImgProjects";
import Form from "../components/contact/Form";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImgProjects heading="CONTACT ME" text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
