import React from "react";

function Footer() {
  return (
    <footer class="p-4 bg-slate-50 sm:p-6 ">
      <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
          <div class=" md:mb-0">
            <p href="#" class="flex items-center mb-4">
              <span class="self-center text-2xl font-semibold whitespace-nowrap">Contact Us</span>
            </p>
            <div class="flex items-center">
              <a class="flex items-center" href="">
                <img src="https://www.gsshop.id/img/logo-youtube.png" class="mr-3 h-8" alt="FlowBite Logo" />
                <p>Youtube</p>
              </a>
              <a class="flex items-center ms-3" href="">
                <img src="https://www.gsshop.id/img/logo-facebook.png" class="mr-3 h-8" alt="FlowBite Logo" />
                <p>Facebook</p>
              </a>
            </div>
            <div class="flex items-center">
              <a href="" class="flex items-center">
                <img src="https://www.gsshop.id/img/logo-twitter.png" class="mr-3 h-8" alt="FlowBite Logo" />
                <p>Twitter</p>
              </a>
              <a class="flex items-center ms-5" href="">
                <img src="https://www.gsshop.id/img/logo-instagram.png" class="mr-3 h-8" alt="FlowBite Logo" />
                <p>Instagram</p>
              </a>
            </div>

          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="https://flowbite.com" class="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
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
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer