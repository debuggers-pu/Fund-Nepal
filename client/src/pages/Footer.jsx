import React from 'react'

const Footer = () => {
  return (
    
<footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
    <div class="flex justify-between">
        <div class="mb-6 md:mb-0">
            <a href="#" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FundNepal</span>
            </a>
        </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Payment Partners</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">E-Sewa</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Useful Links</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">About Us</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Contact Us</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">How It Works</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">FAQs</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://github.com/debuggers-pu/fundnepal" class="hover:underline ">Github</a>
                    </li>
                    <li>
                        <a href="https://discord.com/channels/754563132604809266/754657282876506133" class="hover:underline">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" class="hover:underline">FundNepal™</a>. All Rights Reserved.
    </span>
</footer>

  )
}

export default Footer;