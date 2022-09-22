import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Footer from "./Footer";
import CreatePost from "./CreatePost";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Footer />
      <CreatePost />
    </div>
  );
};

export default HomePage;
