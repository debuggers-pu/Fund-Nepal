import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import CreatePost from "./CreatePost";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      {/* <CreatePost /> */}
    </div>
  );
};

export default HomePage;
