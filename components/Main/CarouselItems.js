import React from "react";

const CarouselItems = ({ img, heading, description, d2, d3 }) => {
  return (
    <div className="py-10 bg-[#181818] w-full  mx-auto">
      {/* <div className="flex flex-col-reverse items-center  lg:flex-row lg:min-w-[1200px] lg:justify-around  lg:items-start "> */}
      <div className="grid max-w-screen-xl grid-cols-1 mx-auto   md:grid-cols-[minmax(300px,_300px)_1fr] lg:grid-cols-[minmax(400px,_400px)_1fr] ">
        <div className="md:pl-[100px]">
          <img
            className="h-[314px] w-full object-contain md:h-[500px]"
            src={img}
            alt=""
          />
        </div>
        <div className="order-first md:order-none ">
          <div className="flex flex-col pt-5 text-white md:pt-28 lg:pt-16">
            <h1 className="text-[24px] font-bold mb-5 md:text-[30px] lg:text-[3.125rem]">
              {heading}
            </h1>
            <span className="block text-[14px] md:text-[20px] lg:text-[2.5rem] mb-5 max-w-[358px] mx-auto md:max-w-none">
              {description}
              <span className="font-bold">{d2}</span>
            </span>
            <span className="block text-[12px] text-center mb-3 md:text-[20px] lg:text-[2.5rem] ">
              {d3}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItems;
