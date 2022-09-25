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
	}, []);

	return (
		<div>
			<div className="post_wrapper py-25 px-20">
				<div className="grid grid-cols-3 gap-2">
					{posts.map((data, key) => (
						//Card
						<div className="border-2 rounded-lg bg-gray-100 mr-5 mt-5 mb-5 p-2 ">
							<div className="flex flex-col justify-between items-stretch">
								<div>
									<img
										src={`http://localhost:5000/${data.image.split("\\")[1]}`}
										alt="services2"
										className="object-cover h-[300px] w-full"
									/>
									<div className="p-5">
										<h3 className="text-2xl font-bold text-cyan-800 py-2">
											{data.title.length > 30
												? data.title.slice(0, 30).concat("....")
												: data.title}
										</h3>
										<p className="bg-gray-100 text-sm text-black">
											{data.description.length > 250
												? data.description.slice(0, 250).concat("........")
												: data.description}
										</p>
									</div>
									<div className="flex justify-between items-center my-2 ">
										<p className="mt-2 mx-3 inline-block bg-gray-200 rounded-full px-3 py-1">
											Total Donation:
											<span className="text-xls font-semibold">
												{data.amountCollected}$
											</span>
										</p>
										<p className="mt-2 mx-3 inline-block bg-gray-200 rounded-full px-3 py-1">
											{" "}
											Pleged:
											<span className="text-xls font-semibold ">
												{data.amount}$
											</span>
										</p>
									</div>
								</div>
								<div>
									<NavLink
										to={`/${data._id}`}
										className="inline-block w-full px-3 py-2 mt-4 font-semibold text-center text-white transition-colors duration-200 transform bg-[#38bdf8] rounded-md hover:bg-blue-400"
									>
										Read More
									</NavLink>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="container my-15 px-6 mx-auto border-2 bg-gray-100">
				<section className="mb-25 text-gray-800 text-center">
					<h2 className="text-3xl font-bold mb-12 my-4">
						NEPAL'S MOST VISITED AND TRUSTED CROWDFUNDING PLATFORM
					</h2>
					<div className="grid gap-x-3 grid-cols-3">
						<div className="mb-12">
							<h3 className="text-2xl font-bold text-[#38bdf8] mb-4">
								{posts.length}
							</h3>
							<h5 className="text-lg font-medium text-gray-500">Campaigns</h5>
						</div>

						<div className="mb-12">
							<h3 className="text-2xl font-bold text-[#38bdf8] mb-4">65%</h3>
							<h5 className="text-lg font-medium text-gray-500">Growth</h5>
						</div>

						<div className="mb-12">
							<h3 className="text-2xl font-bold text-[#38bdf8] mb-4">
								800000000
							</h3>
							<h5 className="text-lg font-medium text-gray-500">Donated</h5>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Services;
