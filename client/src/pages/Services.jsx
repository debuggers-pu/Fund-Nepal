import React from "react";

const Services = () => {
  return (
    <div class="blogs__wraper  py-20 px-20">
      <div class="flex justify-between items-center ">
        <div class="blogs bg-white mr-5 ">
          <img
            src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="services2"
          />
          <div class="p-5">
            <h1 class="text-2xl font-bold text-green-800 py-2">
              Guide
            </h1>
            <p class="bg-white text-sm text-black">
              The Quick-Start Guide To Recurring Giving 
            </p>
            <a href="#"
                        class="inline-block px-3 py-2 mt-4 font-semibold text-center text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-blue-400">
                        Read More</a>
          </div>
        </div>

        <div class="blogs bg-white mr-5">
          <img
            src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="services2"
          />
          <div class="p-5">
            <h1 class="text-2xl font-bold text-green-800 py-2">
              Templates
            </h1>
            <p class="bg-white text-sm text-black">
              Donor Retention Email Templates
            </p>
            <a href="#"
                        class="inline-block px-3 py-2 mt-4 font-semibold text-center text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-blue-400">
                        Read More</a>
          </div>
        </div>

        <div class="blogs bg-white mr-5">
          <img
            src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="services2"
          />
          <div class="p-5">
            <h1 class="text-2xl font-bold text-green-800 py-2">
              Checklist 
            </h1>
            <p class="bg-white text-sm text-black">
              The Nonprofit Digital Marketing Checklist
            </p>
            <a href="#"
                        class="inline-block px-3 py-2 mt-4 font-semibold text-center text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-blue-400">
                        Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
