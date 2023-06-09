import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-slate-50 sm:p-6 ">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className=" md:mb-0 pe-10">
            <p href="#" className="flex items-center mb-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Contact Us</span>
            </p>
            <div className="flex items-center">
              <a className="flex items-center" href="">
                <img src="https://www.gsshop.id/img/logo-youtube.png" className="mr-3 h-8" alt="FlowBite Logo" />
                <p>Youtube</p>
              </a>
              <a className="flex items-center ms-3" href="">
                <img src="https://www.gsshop.id/img/logo-facebook.png" className="mr-3 h-8" alt="FlowBite Logo" />
                <p>Facebook</p>
              </a>
            </div>
            <div className="flex items-center ">
              <a href="" className="flex items-center">
                <img src="https://www.gsshop.id/img/logo-twitter.png" className="mr-3 h-8" alt="FlowBite Logo" />
                <p>Twitter</p>
              </a>
              <a className="flex items-center ms-5" href="">
                <img src="https://www.gsshop.id/img/logo-instagram.png" className="mr-3 h-8" alt="FlowBite Logo" />
                <p>Instagram</p>
              </a>
            </div>

          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <p href="#" className="flex items-center mb-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Newsletter</span>
              </p>
              <p href="#" className="flex items-center mb-4">
                <span className=" text-sm font-semibold">Daftar untuk mendapatkan berita terakhir, game rilis dan penawaran menarik.</span>
              </p>
              <form>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Subscribe!</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address..." required />
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                </div>
              </form>
            </div>
            <div>
              <img src="https://www.gsshop.id/img/logo-ps5.jpg" />
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>

        </div>
      </div>
    </footer>
  )
}

export default Footer