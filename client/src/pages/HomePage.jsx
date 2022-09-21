import React from "react";
import AddPost from "./AddPost";
import HeroSection from "./HeroSection";
import Services from "./Services";

const HomePage = () => {
	return (
		<div>
			<HeroSection />
			<Services />
			<AddPost />
		</div>
	);
};

export default HomePage;
