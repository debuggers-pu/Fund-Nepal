import React from "react";

const HeroSection = () => {
  return (
    <div class="bg-gray-200 ">
    <div class="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div class="max-w-lg">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Fund Nepal</span><br/>
            <span class="block text-indigo-600 xl:inline">Raise Money Online</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Fundraising for the people and causes your care about.</p>
                <div class="mt-6">
                    <a href="#"
                        class="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-blue-400">
                        Get Started</a>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <img class="object-cover w-full max-w-2xl rounded-md lg:h-full"
                src="https://source.unsplash.com/user/erondu/1600x900" alt="Fund nepal "/>
        </div>
    </div>
</div>
  );
};

export default HeroSection;
