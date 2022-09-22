import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import CreatePost from "./CreatePost";
import { useSelector } from "react-redux";

const HomePage = () => {
	const postmodal = useSelector(state => state.modal.postModal);
	return (
		<div>
			<HeroSection />
			<Services />
			{postmodal ? <CreatePost /> : ""}
		</div>
	);
};

export default HomePage;
