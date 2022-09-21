import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Footer from "./Footer";
import Quill from "../components/Quill";

const HomePage = () => {
	return (
		<div>
			<HeroSection />
			<Services />
			<Quill />
			<Footer />
		</div>
	);
};

export default HomePage;
