import Image from "next/image";
import React, { useState } from "react";
import MainLayout from "../MainLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./Carousel";
import UpdatedCarousel from "./UpdatedCarosel";
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
        <div className="bg-[#101010] h-[80vh] md:h-[calc(100vh-13rem)]   mx-auto  xl:max-w-[1300px]">
          {/* <div className="flex flex-col-reverse items-center w-full mt-20 md:flex-row-reverse md:justify-center "> */}
          <div className="grid items-center justify-center grid-cols-1 mt-20 lg:grid-cols-2">
            <div className="flex justify-center order-last my-5 ">
              <img
                src="/lapTop.png"
                alt="Gap Gambler"
                className=" h-[300px] sm:h-[400px] md:h-[450px]"
              />
            </div>
            <div className="relative md:order-first lg:flex lg:flex-col lg:items-center lg:justify-center mb-7 ">
              <h1 className="font-bold text-center text-white ">
                <span className="block md:pt-20 mb-2 text-[24px] md:text-[50px] xl:pt-0">
                  {" "}
                  <span className="text-[24px] md:text-[45px]">The</span>{" "}
                  OFFICIAL
                </span>
                <span className="block text-[24px] md:text-[40px] xl:w-[600px] mt-[18px] mb-[36px]">
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
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className=" shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] font-bold text-white text-[16px]  w-[115px] h-[33px] capitalize bg-[#278aec] rounded-[10px] md:w-[200px] md:h-[68px] md:text-[26px]"
                >
                  JOIN NOW
                </button>
              </div>
              {showModal && <Popup setOpenModal={setShowModal} />}
            </div>
          </div>
        </div>

        {/* SECOND SECTION */}

        <div className="bg-[#181818] md:h-[calc(100vh-3rem)] md:flex md:items-center md:justify-center">
          <Carousel />
        </div>

        {/* More main page content here... */}
        <div className="flex justify-start pt-[53px]  md:pt-[108px] flex-col items-center lg:h-[calc(100vh-5rem)] mb-[51px] lg:mb-0 ">
          <div className="flex flex-col gap-[32px] md:gap-[79px] ">
            <h1 className="font-bold text-white text-[24px] md:text-[50px] ">
              Become a Beta Tester 🔥
            </h1>
            <div className="flex flex-col  w-full gap-[32px] md:gap-[79px]">
              <div className="flex flex-col gap-[39px] md:gap-[79px]">
                <div className="flex items-center gap-3 justify-start md:justify-start md:gap-[51px] ">
                  <ImCheckmark className="text-[#278AEC] w-[42px] h-[29px]" />{" "}
                  <span className="text-base text-white md:text-[40px]">
                    Username Reservation{" "}
                  </span>
                </div>

                <div className="flex items-center justify-start gap-3 md:justify-start md:gap-[51px]">
                  <ImCheckmark className="text-[#278AEC] w-[42px] h-[29px]" />{" "}
                  <span className="text-base text-white md:text-[40px]">
                    Weekly Cash Prizes{" "}
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-start md:justify-start md:gap-[51px] ">
                  <ImCheckmark className="text-[#278AEC] w-[42px] h-[29px]" />{" "}
                  <span className="text-base text-white md:text-[40px]">
                    FREE Premium Membership{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewForm />

        <div className="pt-2 bg-[#181818] text-white">
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
