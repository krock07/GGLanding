import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel
    autoPlay
    infiniteLoop={true}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px] lg:justify-around ">
        <div className="px-3">
          <img
            className="h-[234px] object-contain xl:h-[500px]"
            src="updateVoting.png"
            alt=""
          />
        </div>
        <div className="pr-3">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 xl:text-3xl">
              Vote on Opening Gap Direction
            </h1>
            <span className="block text-[12px] xl:text-2xl mb-5">
              Think you know how to predict{" "}
              <span className="font-bold">Earnings Gaps?</span>
            </span>
            {/* <span className="block text-[12px] mb-5 xl:text-2xl ">
            predict earnings gaps?
          </span> */}
            <span className="block text-[12px] text-center mb-3 xl:text-2xl ">
              Prove it.
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around ">
        <div className="px-3">
          <img
            className="h-[234px] object-contain xl:h-[500px]"
            src="watchlistCreationPhoto.png"
            alt=""
          />
        </div>
        <div className="pr-3 lg:w-[600px]">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 xl:text-3xl">
              Watchlist Creation
            </h1>
            <span className="block text-[12px]  xl:text-2xl ">
              Create custom watchlist to
            </span>
            <span className="block text-[12px] mb-5 xl:text-2xl ">
              track your favorite stocks
            </span>
            <span className="block text-[12px] text-center xl:text-2xl mb-3">
              ...all containing LIVE sentiment data
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#2181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around ">
        <div className="px-3">
          <img
            className="h-[234px] object-contain xl:h-[500px]"
            src="exclusiveSentimentPhoto.png"
            alt=""
          />
        </div>
        <div className="pr-3">
          <div className="flex flex-col items-center pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 xl:text-left  text-center xl:text-3xl">
              Exclusive Sentiment Data
            </h1>

            <span className="block text-[12px] mb-5 text-left xl:text-2xl">
              Gain insight into Gap Gambler’s sentiment database and
            </span>
            <span className="block text-[12px] mb-5 text-left xl:text-2xl">
              interact with like-minded traders from around the world
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around ">
        <div className="px-3">
          <img
            className="h-[234px] object-contain xl:h-[500px]"
            src="indepthToolPhoto.png"
            alt=""
          />
        </div>
        <div className="pr-3">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 xl:text-3xl">
              In-Depth Tools and Information
            </h1>
            <span className="block text-[12px] xl:text-2xl ">
              Access company news, calendars,{" "}
            </span>
            <span className="block text-[12px] xl:text-2xl mb-5">
              charts, and fundamentals.
            </span>
            <span className="block text-[12px] text-center mb-3 xl:text-2xl">
              All in one place
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
      <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around ">
        <div className="px-3">
          <img
            className="h-[234px] object-contain xl:h-[500px]"
            src="becomeATopGambler.png"
            alt=""
          />
        </div>
        <div className="pr-3">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 xl:text-3xl">
              Become a Top Gambler
            </h1>
            <span className="block text-[12px] xl:text-2xl ">
              Compete to earn your spot at{" "}
            </span>
            <span className="block text-[12px] mb-5 xl:text-2xl">
              the top of the leaderboard
            </span>
            <span className="block text-[12px] text-center xl:text-2xl">
              And don’t worry...
            </span>
            <span className="block text-[12px] text-center mb-3 xl:text-2xl">
              Top Gamblers will be rewarded
            </span>
          </div>
        </div>
      </div>
    </div>
  </Carousel>
);
