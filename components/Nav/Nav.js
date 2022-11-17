/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { BsChevronRight } from "react-icons/bs";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="lg:bg-[#252525] bg-transparent  ">
      {({ open }) => (
        <>
          <div className="container px-2 mx-auto sm:px-4 lg:px-8 ">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <div>
                    <img
                      src="/chartIcon.png"
                      className="block object-cover"
                      alt=""
                    />
                  </div>

                  {/* <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-10 h-10 text-white" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-10 h-10 text-white" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
                </div>
                <div className="hidden lg:flex-shrink-0 lg:flex lg:items-center">
                  <h1 className="text-2xl font-medium text-white">
                    Gap
                    <span className="text-[#707070] font-medium text-2xl">
                      Gambler
                    </span>
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  {/* <label htmlFor="search" className="sr-only md:hidden">
                    Search
                  </label> */}
                  <div className="relative ">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <SearchIcon
                        className="hidden w-5 h-5 text-[#707070] lg:block"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="relative ">
                      <div className="absolute inset-y-0 flex items-center justify-center object-contain w-full pointer-events-none lg:hidden">
                        <img src="/Icon.png" className="w-[56px] h-[33px]" />
                      </div>
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="hidden text-white lg:block lg:w-full lg:pl-10 lg:pr-3 lg:py-2 lg:border lg:border-gray-[#707070] bg-[#252525] lg:rounded-[25px] lg:leading-5  lg:placeholder-gray-500 lg:focus:outline-none lg:focus:placeholder-gray-400 lg:focus:ring-1 lg:focus:ring-[#707070] lg:focus:border-[#707070] sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    href="/market"
                    className=" text-[#7D7D7D] hover:border-gray-300  inline-flex border-b-2  items-center px-1 pt-1 text-sm font-medium"
                  >
                    <h1 className=" cursor-pointer text-[#7D7D7D] hover:border-gray-300  inline-flex border-b-2  items-center px-1 pt-1 text-sm font-medium">
                      Market Sentiment
                    </h1>
                  </Link>
                  <Link
                    href="/earningscalendar"
                    className="border-transparent text-[#7D7D7D] hover:border-gray-300  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Earning Calender
                  </Link>
                  <Link
                    href="/topgamblers"
                    className="border-transparent text-[#7D7D7D] hover:border-gray-300  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Top Gamblers
                  </Link>
                  {/* <a
                    href="#"
                    className="border-transparent text-[#7D7D7D] hover:border-gray-300  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Daily Gamble
                  </a> */}
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                {/* <div>
                  <img src="/chartIcon.png" className="block h-10 w-" alt="" />
                </div> */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block w-10 h-10 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block w-10 h-10 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <div className="lg:flex lg:flex-col lg:text-right">
                  {/* <span className="text-[#7D7D7D] text-xs"> Welcome</span> */}
                  {/* username will go here */}
                  {/* <span className="text-sm text-white">Alexander</span> */}
                  <Menu as="div" className="relative flex-shrink-0 ml-4">
                    <div>
                      <Menu.Button
                        type="button"
                        className="flex-shrink-0 p-1 text-[#7D7D7D] rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 w-64 py-5 mt-2 origin-top-right bg-black border rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-fit">
                        <div className="flex items-center justify-between w-full px-2 pb-2 text-white ">
                          <h1>Notifications (3)</h1>
                          <p className="text-[12px] text-[#707070] ">
                            Ignore All
                          </p>
                        </div>
                        <Menu.Item>
                          <div className="flex text-white text-[10px] px-2 gap-3 items-center border-b-[1px] border-[#707070] py-1">
                            <img
                              src="https://images.pexels.com/photos/5340253/pexels-photo-5340253.jpeg?cs=srgb&dl=pexels-cameron-yartz-5340253.jpg&fm=jpg"
                              alt=""
                              className="object-cover w-8 h-8 rounded-full"
                            />
                            <p>gmblr54 started following you</p>
                            <BsChevronRight className="text-xs flex-1 text-[#707070]" />
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="flex px-2 text-white text-[10px] gap-3 items-center border-b-[1px] border-[#707070] py-1">
                            <img
                              src="https://images.pexels.com/photos/5340253/pexels-photo-5340253.jpeg?cs=srgb&dl=pexels-cameron-yartz-5340253.jpg&fm=jpg"
                              alt=""
                              className="object-cover w-8 h-8 rounded-full"
                            />
                            <p>gmblr54 started following you</p>
                            <BsChevronRight className="text-xs flex-1 text-[#707070]" />
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="flex px-2 text-white text-[10px] gap-3 items-center border-b-[1px] border-[#707070] py-1">
                            <img
                              src="https://images.pexels.com/photos/5340253/pexels-photo-5340253.jpeg?cs=srgb&dl=pexels-cameron-yartz-5340253.jpg&fm=jpg"
                              alt=""
                              className="object-cover w-8 h-8 rounded-full"
                            />
                            <p>gmblr54 started following you</p>
                            <BsChevronRight className="text-xs flex-1 text-[#707070]" />
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative flex-shrink-0 ml-4">
                  <div>
                    <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 border-2 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-black border rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-white"
                            )}
                          >
                            Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-white"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="flex justify-center">
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-red-600"
                              )}
                            >
                              Sign out
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="z-10 min-h-full lg:hidden ">
            <div className="absolute z-10 w-screen h-auto pb-3 mx-3 bg-[#101010] ">
              <div className="flex flex-col items-center px-4">
                <div className="flex-shrink-0 mt-10">
                  <img
                    className="border-2 border-white rounded-full h-14 w-14"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="pb-10 ml-3">
                  <div className="text-[18px] text-white font-bold">
                    Tom Cook
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-10 ">
                <div className="flex items-center justify-between">
                  <div>
                    <a className="block uppercase px-4 py-2 text-[18px] font-bold text-white hover:text-gray-800 hover:bg-gray-100">
                      <Link
                        // as="a"
                        href="/"
                      >
                        Market Sentiment
                      </Link>
                    </a>
                  </div>
                  <div className="px-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                {/* <button
                  as="a"
                  href="#"
                  className="block uppercase px-4 py-2 text-[18px] font-bold text-white hover:text-gray-100 "
                >
                  market sentiment
                </button> */}
                <div className="flex items-center justify-between">
                  <div>
                    <a className="block uppercase px-4 py-2 text-[18px] font-bold text-white hover:text-gray-800 hover:bg-gray-100">
                      <Link
                        // as="a"
                        href="/"
                      >
                        Watchlist
                      </Link>
                    </a>
                  </div>
                  <div className="px-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                {/* <a className="block uppercase px-4 py-2 text-[18px] font-bold text-white hover:text-gray-800 hover:bg-gray-100">
                <Link
                  as="a"
                  href="news"
                  
                >
                  Events Calendar
                </Link>
                </a> */}
                <div className="flex items-center justify-between">
                  <div>
                    <a className="block uppercase px-4 py-2 text-[18px] font-bold text-white hover:text-gray-800 hover:bg-gray-100">
                      <Link
                        // as="a"
                        href="/"
                      >
                        Events Calendar
                      </Link>
                    </a>
                  </div>
                  <div className="px-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <a className="block uppercase px-4 py-2 text-[18px] font-bold text-white hover:text-gray-800 hover:bg-gray-100">
                      <Link
                        // as="a"
                        href="/"
                      >
                        Top 10
                      </Link>
                    </a>
                  </div>
                  <div className="px-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                {/* <Disclosure.Button
                  as="a"
                  href="#"
                  className="block uppercase px-4 py-2 text-[18px] font-bold text-white hover:text-gray-800 hover:bg-gray-100"
                >
                Top 10
                </Disclosure.Button> */}
                <div className="flex items-center justify-between">
                  <div>
                    <a className="block uppercase px-4 py-2 text-[18px] font-bold text-white hover:text-gray-800 hover:bg-gray-100">
                      <Link
                        // as="a"
                        href="/"
                      >
                        earnings tournament™️
                      </Link>
                    </a>
                  </div>
                  <div className="px-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                {/* <Disclosure.Button
                  as="a"
                  href="#"
                  className="block uppercase px-4 py-2 text-[18px] font-bold text-white hover:text-gray-800 hover:bg-gray-100"
                >
                earnings tournament™️
                </Disclosure.Button> */}
                <div className="flex items-end justify-center ">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block uppercase  px-4 pt-80 text-[22px] font-bold text-[#838383] hover:text-gray-800 hover:bg-gray-100"
                  >
                    sign out
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
