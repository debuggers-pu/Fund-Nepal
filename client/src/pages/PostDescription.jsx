import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { getpostbyid } from "../axios";
import Moment from "moment";

const PostDescription = () => {
	const [amount, setAmount] = useState(0);
	const [post, setPost] = useState("");
	const { id } = useParams();
	const makePayment = async token => {
		const body = {
			token,
			amount,
			postid: id,
		};
		const headers = {
			"Content-Type": "application/json",
		};
		return await fetch(`http://localhost:5000/api/payment`, {
			method: "POST",
			headers,
			body: JSON.stringify(body),
		})
			.then(response => {
				console.log("RESPONSE ", response);
				const { status } = response;
				console.log("STATUS ", status);
			})
			.catch(error => console.log(error));
	};

	useEffect(() => {
		const getPost = async () => {
			const post = await getpostbyid({ id: id });
			if (post) {
				setPost(post.data.post);
			}
		};
		getPost();
	}, []);

	return post ? (
		<div className="text-gray-600 body-font">
			<div className="max-w-screen-md px-4 py-6 mx-auto my-5 border-2">
				<h1 className="text-3xl text-gray-900 font-medium title-font mb-2">
					{post.title}
				</h1>
				<img
					src={`http://localhost:5000/${post.image.split("\\")[1]}` || ""}
					alt="services2"
					className="object-cover w-full"
				/>
				<div className="pl-6">
					<p className="text-gray-500  font-medium title-font mb-6">
						{post.description}
					</p>

					<div className="flex mt-4 ">
						<input
							type="number"
							placeholder="Enter the amount to donate."
							className="rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-50 text-sm mb-2"
							onChange={e => setAmount(e.target.value)}
						/>
						<StripeCheckout
							stripeKey="pk_test_51LkrgoSFgx4gzLZVXoWjL4ZKFQFC8GeMkvZaaBY1wne0PhCBBuTLjxmBr8AckotVKbCjktlUgU4WhOVxuuJHmjPi00gr2KEpKC"
							token={makePayment}
							name="Donate Now"
							amount={amount * 100}
						>
							<button className="inline-flex border-0 py-5 px-4 text-center text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-blue-400 ">
								Donate Now
							</button>
						</StripeCheckout>
					</div>
					<div className="flex justify-between items-center my-2 ">
						<p className="mt-2 mx-3">
							Total Donation:
							<span className="text-xls font-semibold">
								{post.amountCollected}$
							</span>
						</p>
						<p className="mt-2 mx-3">
							{" "}
							Pleged:
							<span className="text-xls font-semibold ">{post.amount}$</span>
						</p>
						<p>Created At: {Moment(post.createdAt).format("YYYY/MM/DD")}</p>
					</div>
				</div>
			</div>
			<div className="bg-white py-6">
				<div className="max-w-screen-md px-4 py-6 mx-auto border-2">
					<h1 className="text-gray-800 text-xl  font-semibold mb-2 ">
						About the Campaign
					</h1>
					<p className="text-gray-500  font-medium title-font mb-6 ">
						Their vision and goal is to provide treatment for people with drug
						addiction, help and guide them through their recovery process and
						provide medication and treatment for drug users infected with
						HIV/Aids and hepatitis. But most importantly, they also provide job
						opportunities for recovered addicts, based on their skills and
						capabilities and reintegrate them to the society and their families
						as normal citizens. They charge people for the services, according
						to their financial conditions, and even provide free services to
						some exeptional people who cannot afford to pay even the minimum of
						charges. The government of Nepal fund a few of those drug users who
						are below the poverty line, but the funding recieved is not enough.
						Through the funding provided by the govt., they are able to treat
						about 8 to 10 people, free of cost. Their main focus is to provide
						free services( treatment and medication) for at least 20 to 30
						grassroot level drug users(for now), and try to expand the numbers
						upto about a hundred people, per year, and a little support from
						your side would help them achieve their goal.
					</p>
					<h2 className="text-gray-800 text-xl  font-semibold mb-2 ">
						Mission and vision:
					</h2>
					<ul class="list-disc list-inside text-gray-500 text-lg mb-6">
						<li>
							Make recovery program accessible to drug users through our center.
						</li>
						<li>
							Produce spiritually awakened and productive and responsible member
							of society.
						</li>
						<li>Offer basic to advanced level educational training.</li>
						<li>Remain a non-profitable, non political</li>
						<li>
							Create an informational environment on drug use aggravating
							tohazardous diseases such as HIV and Hepatitis.
						</li>
						<li>
							Increase the quality life intravenous Drug Users and People Living
							with HIV/AIDS
						</li>
					</ul>
					<p className="text-gray-500  font-medium title-font mb-6 "></p>
				</div>
			</div>
			<div className="p-5">
				<div className="max-w-screen-md px-4 py-6 mx-auto border-2">
					<div className="bg-white p-5 modal__content rounded">
						<img
							src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
							alt=""
							className="w-6 rounded-full absolute pin-l pin-t ml-2 mt-2"
						/>
						<div className="modal__header mb-4">
							<div className="p-2 rounded-full bg-purple-lightest inline-block">
								<i className="fas fa-comments text-2xl text-purple-dark"></i>
							</div>
						</div>
						<div className="modal__body">
							<p className="text-grey-darkest font-medium mb-1 text-base">
								Leave a Comment
							</p>
							<small className="text-grey-dark tracking-wide font-light">
								Type your Comment Below
							</small>
							<div className="mt-4 border border-grey w-full border-1 rounded p-2 relative focus:border-red">
								<input
									type="text"
									class="pl-8 text-grey-dark font-light w-full text-sm  tracking-wide outline-none"
									placeholder="Type your commnet..."
								/>
							</div>
						</div>
						<div className="modal__footer mt-6">
							<div className="text-right">
								<button className="border-2 border-purple p-3  text-center text-white transition-colors duration-200 transform bg-red-700 rounded-md">
									Cancel
								</button>
								<button className="border-2 border-purple p-3  text-center text-white transition-colors duration-200 transform bg-green-500 rounded-md">
									Submit Comment
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<p>Loading</p>
	);
};

export default PostDescription;
