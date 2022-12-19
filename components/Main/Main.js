import Image from "next/image";
import React, { useState } from "react";
import MainLayout from "../MainLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./Carousel";
import { ImCheckmark } from "react-icons/im";
import Popup from "../Modals/Popup";
import Footer from "../Footer/Footer";
import NewForm from "../Form/NewForm";
const Main = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <MainLayout>
      {/* top section */}
      <main>
        <div className="flex flex-col-reverse items-center justify-center xl:mx-auto xl:flex-row-reverse xl:container xl:justify-between xl:max-w-[1200px]">
          <div className="my-5">
            <img
              src="/lapTop.png"
              alt="Gap Gambler"
              className=" h-[250px] xl:h-[450px]"
            />
          </div>
          <div className="relative lg:flex lg:flex-col lg:align-center lg:justify-center mb-7 ">
            <h1 className="font-bold text-center text-white ">
              <span className="block pt-20 mb-2 xl:text-[40px] xl:pt-0">
                {" "}
                The OFFICIAL
              </span>
              <span className="block xl:text-[40px] xl:w-[600px]">
                Catalyst Sentiment Platform
              </span>
            </h1>
            {/* <img
              className=" w-[100px] xl:w-[200px] xl:h-[124px] object-cover absolute xl:top-[160px] xl:left-[50px]"
              src="/candleBottom.png"
              alt=""
            />
            <img
              className="w-[50px] top-5 right-[40.5%] xl:w-[100px] xl:h-[124px] object-cover absolute xl:top-[-130px] xl:left-[400px]"
              src="/candleTop.png"
              alt=""
            /> */}

            <div className="flex justify-center mt-5 mb-7 ">
              <button className="font-bold text-white text-[10px] px-1 py-1 capitalize bg-[#278aec] rounded-[3px] lg:px-11 lg:py-2">
                JOIN LIST
              </button>
            </div>
          </div>
        </div>

        {/* SECOND SECTION */}

        <div className="bg-[#181818]">
          <Carousel />
        </div>

        {/* More main page content here... */}
        <div className="flex justify-center pt-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-white text-[24px] xl:text-4xl ">
              Become a Beta Tester 🔥
            </h1>
            <div className="w-full pt-5 mx-auto xl:m-0">
              <div className="flex items-center justify-center md:justify-start xl:gap-5 xl:mb-5 ">
                <ImCheckmark className="text-[#278AEC]" />{" "}
                <span className="text-base text-white xl:text-2xl">
                  Username Reservation{" "}
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start xl:mb-5 xl:gap-5 ">
                <ImCheckmark className="text-[#278AEC]" />{" "}
                <span className="text-base text-white xl:text-2xl">
                  Weekly Cash Prizes{" "}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start xl:gap-5 xl:mb-5 ">
                <ImCheckmark className="text-[#278AEC]" />{" "}
                <span className="text-base text-white xl:text-2xl">
                  FREE Premium Membership{" "}
                </span>
              </div>
              <NewForm />
            </div>
          </div>
        </div>

        <div className="pt-10 bg-[#181818] text-white">
          <Footer />
        </div>
        {/* <div className="pt-10 bg-[#2A2A2A] sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mt-12 -mb-16 sm:-mb-48 lg:ml-48 lg:relative">
                <div className="h-auto max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img
                    className="w-full lg:absolute lg:inset-y-[-50px] lg:left-0 lg:h-[420px] lg:w-auto lg:max-w-none"
                    src="/blackPhoneFront.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                    <span className="block">Become a Top Gambler</span>
                  </h1>
                  <p className="mt-5 text-white ">
                    Compete to earn your spot at the top of the leaderboard
                  </p>
                  <p className="mt-5 text-white">
                    Don’t worry, Top Gamblers are rewarded each week.
                  </p>

                  <div className="mt-10 sm:mt-12">
                    <div className="flex justify-center">
                      <div className="flex gap-4 mt-3 sm:mt-0 sm:ml-3">
                        <div className="w-8 h-8 border-2 border-white rounded-full" />
                        <div className="w-8 h-8 border-2 border-white rounded-full" />
                        <div className="w-8 h-8 border-2 border-white rounded-full" />
                        <div className="w-8 h-8 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="pt-10">
          <div className="flex justify-center align-center">
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
              Sign Up Now to Gain Early Access to Beta
            </h1>
          </div>
          <div className="my-10 sm:mt-12">
            <div className="flex justify-center">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full px-12 py-3 font-medium text-white bg-[#278AEC] rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>{" "} */}
      </main>
    </MainLayout>
  );
};

export default Main;
