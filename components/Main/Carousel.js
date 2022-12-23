import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel
    autoPlay
    interval="7000"
    infiniteLoop={true}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      {/* <div className="flex flex-col-reverse items-center  lg:flex-row lg:min-w-[1200px] lg:justify-around  lg:items-start "> */}
      <div className="grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] grid-cols-1">
        <div className="">
          <img
            className="h-[314px] w-full object-contain xl:h-[500px]"
            src="updateVoting.png"
            alt=""
          />
        </div>
        <div className="order-first md:order-none">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 md:text-[3.125rem]">
              Vote on Opening Gap Direction
            </h1>
            <span className="block text-[14px] md:text-[2.5rem] mb-5">
              Think you know how to predict{" "}
              <span className="font-bold">Earnings Gaps?</span>
            </span>
            <span className="block text-[12px] text-center mb-3 md:text-[2.5rem] ">
              Prove it.
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      {/* <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around "> */}
      <div className="grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] grid-cols-1">
        <div className="px-3">
          <img
            className="h-[314px] object-contain xl:h-[500px]"
            src="watchlistCreationPhoto.png"
            alt=""
          />
        </div>
        <div className="order-first md:order-none">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 md:text-[3.125rem]">
              Watchlist Creation
            </h1>
            <span className="block text-[14px] mb-5  md:text-[2.5rem] ">
              Create custom watchlist to track your favorite stocks
            </span>
            <span className="block text-[14px] text-center md:text-[2.5rem] mb-3">
              ...all containing LIVE sentiment data
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#2181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      {/* <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around "> */}
      <div className="grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] grid-cols-1">
        <div className="px-3">
          <img
            className="h-[314px] object-contain xl:h-[500px]"
            src="exclusiveSentimentPhoto.png"
            alt=""
          />
        </div>
        <div className="order-first pr-3 md:order-none">
          <div className="flex flex-col items-center pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 xl:text-left  text-center md:text-[3.125rem]">
              Exclusive Sentiment Data
            </h1>

            <span className="block text-[14px]  text-left md:text-[2.5rem]">
              Gain insight into Gap Gambler’s sentiment database
            </span>
            <span className="block text-[14px] mb-5 text-center md:text-[2.5rem]">
              and interact with like-minded traders from around the world
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      {/* <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around "> */}
      <div className="grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] grid-cols-1">
        <div className="px-3 ">
          <img
            className="h-[314px] w-full object-contain xl:h-[500px]"
            src="inDepth.png"
            alt=""
          />
        </div>
        <div className="order-first pr-3 md:order-none">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 md:text-[3.125rem]">
              In-Depth Tools and Information
            </h1>
            <span className="block mb-5 text-[14px] md:text-[2.5rem]">
              Access company news, calendars, charts, and fundamentals. All in
              one place{" "}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      {/* <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around "> */}
      <div className="grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] grid-cols-1">
        <div className="px-3 ">
          <img
            className="h-[314px] w-full object-contain xl:h-[500px]"
            src="performance.png"
            alt=""
          />
        </div>
        <div className="order-first pr-3 md:order-none">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 md:text-[3.125rem]">
              Performance Tools
            </h1>
            <span className="block text-[14px] md:text-[2.5rem]">
              Track your gambles with in-depth statistics showing
            </span>
            <span className="block text-[14px] md:text-[2.5rem]">
              your performance within each market sector and
            </span>
            <span className="block mb-5 text-[14px] md:text-[2.5rem]">
              individual companies
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      {/* <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around "> */}
      <div className="grid md:grid-cols-[400px_minmax(900px,_1fr)_100px] grid-cols-1">
        <div className="px-3">
          <img
            className="h-[314px] object-contain xl:h-[500px]"
            src="topGambler.png"
            alt=""
          />
        </div>
        <div className="order-first pr-3 md:order-none">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 md:text-[3.125rem]">
              Become a Top Gambler
            </h1>
            <span className="block mb-5 text-[14px] md:text-[2.5rem] max-w-[376px] mx-auto md:max-w-none">
              Compete to earn your spot at the top of the leaderboard. And don’t
              worry... Top Gamblers will be rewarded
            </span>
            {/* <span className="block mb-5 text-[14px] md:text-[2.5rem]">
              And don’t worry... Top Gamblers will be rewarded
            </span> */}
          </div>
        </div>
      </div>
    </div>
  </Carousel>
);
