import React, { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import CarouselItems from "./CarouselItems";

const fadeAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";

  let slideStyle = {
    position: "absolute",
    display: "block",
    zIndex: 1,
    minHeight: "100%",
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
  };

  if (!state.swiping) {
    slideStyle = {
      ...slideStyle,
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
  }

  return {
    slideStyle,
    selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
    prevStyle: { ...slideStyle },
  };
};

export default () => (
  <Carousel
    autoPlay
    swiping={false}
    interval="7000"
    infiniteLoop={true}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    // animationHandler={fadeAnimationHandler}
  >
    <CarouselItems
      img="updateVoting.png"
      heading="  Vote on Opening Gap Direction"
      description=" Think you know how to predict"
      d2=" Earnings Gaps?"
      d3="  Prove it."
    />
    <CarouselItems
      img="watchList.png"
      heading="     Watchlist Creation"
      description="               Create custom watchlist to track your favorite stocks ...all containing LIVE sentiment data"
    />
    <CarouselItems
      img="exclusiveSentiment.png"
      heading="        Exclusive Sentiment Data"
      description="                Gain insight into Gap Gambler’s sentiment database"
      d3="and interact with like-minded traders from around the world"
    />
    <CarouselItems
      img="inDepth.png"
      heading="         In-Depth Tools and Information"
      description="                 Access company news, calendars, charts, and fundamentals. All in
              one place"
    />
    <CarouselItems
      img="performance.png"
      heading="           Performance Tools"
      description="              Track your gambles with in-depth statistics showing  your performance within each market sector and  individual companies"
    />
    <CarouselItems
      img="topGambler.png"
      heading="                Become a Top Gambler"
      description="              The Compete to earn your spot at the top of the leaderboard. 
      And don’t worry... Top Gamblers will be rewarded "
    />

    {/* <div className="py-10 bg-[#181818] w-full  mx-auto">
      <div className="grid max-w-screen-xl grid-cols-1 mx-auto bg-red-500  md:grid-cols-[minmax(400px,_400px)_1fr] ">
        <div className="md:pl-[100px]">
          <img
            className="h-[314px] w-full object-contain md:h-[500px]"
            src="updateVoting.png"
            alt=""
          />
        </div>
        <div className="order-first bg-red-700 md:order-none ">
          <div className="flex flex-col pt-5 text-white md:pt-16">
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
    </div> */}

    {/* <div className="py-10 bg-[#181818] w-full  mx-auto">
      <div className="grid max-w-screen-xl grid-cols-1 mx-auto bg-red-500  md:grid-cols-[minmax(400px,_400px)_1fr] ">
        <div className="md:pl-[100px]">
          <img
            className="h-[314px] w-full object-contain md:h-[500px]"
            src="watchlist.png"
            alt=""
          />
        </div>
        <div className="order-first bg-red-700 md:order-none ">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 md:text-[3.125rem]">
              Watchlist Creation
            </h1>
            <span className="block text-[14px] md:text-[2.5rem] mb-5">
              Create custom watchlist to track your favorite stocks
            </span>
            <span className="block text-[12px] text-center mb-3 md:text-[2.5rem] ">
              ...all containing LIVE sentiment data
            </span>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div className="py-10 bg-[#181818] w-full  mx-auto">
      <div className="grid max-w-screen-xl grid-cols-1 mx-auto bg-red-500  md:grid-cols-[minmax(400px,_400px)_1fr] ">
        <div className="md:pl-[100px]">
          <img
            className="h-[314px] w-full object-contain md:h-[500px]"
            src="updateVoting.png"
            alt=""
          />
        </div>
        <div className="order-first bg-red-700 md:order-none ">
          <div className="flex flex-col pt-5 text-white xl:pt-16">
            <h1 className="text-[24px] font-bold mb-5 md:text-[3.125rem]">
              Exclusive Sentiment Data
            </h1>
            <span className="block text-[14px] md:text-[2.5rem] mb-5">
              Gain insight into Gap Gambler’s sentiment database
            </span>
            <span className="block text-[12px] text-center mb-3 md:text-[2.5rem] ">
              and interact with like-minded traders from around the world
            </span>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div className="py-10 bg-[#2181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
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
    </div> */}

    {/* <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
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
    </div> */}

    {/* <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
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
    </div> */}
    {/* <div className="flex flex-col-reverse  lg:flex-row lg:min-w-[1200px]  lg:justify-around "> */}

    {/* <div className="py-10 bg-[#181818] grid grid-cols-1  lg:grid-cols-2 max-w-6xl lg:max-w-[1200px] mx-auto">
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
          </div>
        </div>
      </div>
    </div> */}
  </Carousel>
);
