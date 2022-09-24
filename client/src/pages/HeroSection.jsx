import React from "react";

const HeroSection = () => {
	return (
		<section class="relative bg-center bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]">
			<div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

			<div class="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex">
				<div class="max-w-xl text-center sm:text-left">
					<h1 class="text-3xl font-extrabold sm:text-5xl">
						FOR THE ONE'S
						<strong class="block font-extrabold text-[#38bdf8]">IN NEED</strong>
					</h1>

					<p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
						Your Generosity Makes Every Moment Count
					</p>

					<div class="flex flex-wrap gap-4 mt-8 text-center">
						<a
							href="http://localhost:3000/about-us"
							class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-[#38bdf8] sm:w-auto active:bg-rose-500 hover:bg-blue-600 focus:outline-none focus:ring"
						>
							Learn More
						</a>

						<a
							href="http://localhost:3000/auth/signup"
							class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-[#38bdf8] sm:w-auto hover:text-blue-700 active:text-blue-700 focus:outline-none focus:ring"
						>
							Sign Up
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
