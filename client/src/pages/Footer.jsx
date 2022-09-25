import React from "react";
import { NavLink } from "react-router-dom";
import images2 from "../uploads/logo.png"

const Footer = () => {
	return (
		<footer class="p-4 bg-white sm:p-6 dark:bg-gray-800 bottom-0">
			<div class="flex justify-between">
				<div class="mb-6 md:mb-0">
					<a href="#/" class="flex items-center">
						<img
							src={images2}
							class="mr-3 h-8"
							alt="FlowBite Logo"
						/>
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							FundNepal
						</span>
					</a>
				</div>

				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Payment Partners
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<a href="#/" class="hover:underline">
								E-Sewa
							</a>
						</li>
						<li class="mb-4">
							<a href="#/" class="hover:underline">
								Khalti
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Useful Links
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<NavLink to="./about-us" class="hover:underline">
								About Us
							</NavLink>
						</li>
						<li class="mb-4">
							<a href="ourteam" class="hover:underline">
								Team Member
							</a>
						</li>
						
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Follow us
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<a
								href="https://github.com/debuggers-pu/fundnepal"
								class="hover:underline "
							>
								Github
							</a>
						</li>
						<li>
							<a
								href="https://discord.com/channels/754563132604809266/754657282876506133"
								class="hover:underline"
							>
								Discord
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Contact Us
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">fundnepal@gmail.com</li>
						<li class="mb-4">+977-986770944 / +977-9814161764</li>
						<li class="mb-4">+977-9860102334 / +977-9817141892</li>
						<li class="mb-4">
							FundNepal – A Crowdfunding Platform,Bijaypur,Pokhara,Nepal
						</li>
					</ul>
				</div>
			</div>
			<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2022{" "}
				<a href="#/" class="hover:underline">
					FundNepal™
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
};

export default Footer;
