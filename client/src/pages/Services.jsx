import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getpost } from "../axios";

const Services = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const getposts = async () => {
			const res = await getpost();
			if (res.data) {
				setPosts(res.data.posts);
				console.log(res.data.posts);
			}
		};
		getposts();

		return () => {};
	}, []);

	return (
		<div className="post_wrapper py-25 px-20">
			<div className="grid grid-cols-3 gap-2">
				{posts.map((data, key) => (
					//Card
					<div className="border-2 rounded-lg bg-gray-100 mr-5 mt-5 mb-5 ">
						<img
							src={`http://localhost:5000/${data.image.split("\\")[1]}`}
							alt="services2"
							className="object-cover h-[300px] w-full"
						/>
						<div className="p-5">
							<h3 className="text-2xl font-bold text-green-800 py-2">
								{data.title.length > 30
									? data.title.slice(0, 30).concat("....")
									: data.title}
							</h3>
							<p className="bg-gray-100 text-sm text-black">
								{data.description.length > 250
									? data.description.slice(0, 250).concat("........")
									: data.description}
							</p>

							<NavLink
								to={`/${data._id}`}
								className="inline-block px-3 py-2 mt-4 font-semibold text-center text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-blue-400"
							>
								Read More
							</NavLink>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
