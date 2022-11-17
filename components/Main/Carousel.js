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
    <div className="py-10 bg-[#2A2A2A] grid grid-cols-2 max-w-6xl mx-auto">
      <div className="px-3">
        <img
          className="h-[234px] object-contain xl:h-[400px]"
          src="openVoting.png"
          alt=""
        />
      </div>
      <div className="pr-3">
        <div className="flex flex-col pt-5 text-white xl:pt-16">
          <h1 className="text-[14px] font-bold mb-5 xl:text-3xl">
            Vote on Opening Gap Direction
          </h1>
          <span className="block text-[12px] xl:text-2xl mb-5">
            Think you know how to predict earnings gaps?
          </span>
          {/* <span className="block text-[12px] mb-5 xl:text-2xl ">
            predict earnings gaps?
          </span> */}
          <span className="block text-[12px] text-center xl:text-2xl ">
            Prove it.
          </span>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#2A2A2A] grid grid-cols-2 max-w-6xl mx-auto">
      <div className="px-3">
        <img
          className="h-[234px] object-contain xl:h-[400px]"
          src="watchlistCreationPhoto.png"
          alt=""
        />
      </div>
      <div className="pr-3">
        <div className="flex flex-col pt-5 text-white xl:pt-16">
          <h1 className="text-[14px] font-bold mb-5 xl:text-3xl">
            Watchlist Creation
          </h1>
          <span className="block text-[12px]  xl:text-2xl ">
            Create custom watchlist to
          </span>
          <span className="block text-[12px] mb-5 xl:text-2xl ">
            track your favorite stocks
          </span>
          <span className="block text-[12px] text-center xl:text-2xl">
            ...all containing LIVE sentiment data
          </span>
        </div>
      </div>
    </div>
    <div className="py-10 bg-[#2A2A2A] grid grid-cols-2 max-w-6xl mx-auto">
      <div className="px-3">
        <img
          className="h-[234px] object-contain xl:h-[400px]"
          src="exclusiveSentimentPhoto.png"
          alt=""
        />
      </div>
      <div className="pr-3">
        <div className="flex flex-col pt-5 text-white xl:pt-16">
          <h1 className="text-[14px] font-bold mb-5 text-left xl:text-3xl">
            Exclusive Sentiment Data
          </h1>

          <span className="block text-[12px] mb-5 text-left xl:text-2xl">
            Gain insight into Gap Gambler’s sentiment database and interact with
            like-minded traders from around the world
          </span>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#2A2A2A] grid grid-cols-2 max-w-6xl mx-auto">
      <div className="px-3">
        <img
          className="h-[234px] object-contain xl:h-[400px]"
          src="indepthToolPhoto.png"
          alt=""
        />
      </div>
      <div className="pr-3">
        <div className="flex flex-col pt-5 text-white xl:pt-16">
          <h1 className="text-[14px] font-bold mb-5 xl:text-3xl">
            In-Depth Tools and Information
          </h1>
          <span className="block text-[12px] xl:text-2xl ">
            Access company news, calendars,{" "}
          </span>
          <span className="block text-[12px] xl:text-2xl mb-5">
            charts, and fundamentals.
          </span>
          <span className="block text-[12px] text-center xl:text-2xl">
            All in one place
          </span>
        </div>
      </div>
    </div>

    <div className="py-10 bg-[#2A2A2A] grid grid-cols-2 max-w-6xl mx-auto">
      <div className="px-3">
        <img
          className="h-[234px] object-contain xl:h-[400px]"
          src="becomeATopGambler.png"
          alt=""
        />
      </div>
      <div className="pr-3">
        <div className="flex flex-col pt-5 text-white xl:pt-16">
          <h1 className="text-[14px] font-bold mb-5 xl:text-3xl">
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
          <span className="block text-[12px] text-center xl:text-2xl">
            Top Gamblers will be rewarded
          </span>
        </div>
      </div>
    </div>
  </Carousel>
);
