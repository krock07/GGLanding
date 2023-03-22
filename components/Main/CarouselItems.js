import React from "react";

// center phone on mobile

const CarouselItems = ({
  img,
  heading,
  description,
  description2,
  d2,
  d3,
  d4,
  d5,
}) => {
  return (
    <div className="py-5 lg:py-10 bg-[#181818] w-full  mx-auto">
      {/* <div className="flex flex-col-reverse items-center  lg:flex-row lg:min-w-[1200px] lg:justify-around  lg:items-start "> */}
      <div className="grid max-w-screen-xl grid-cols-1 mx-auto    md:grid-cols-[minmax(300px,_300px)_1fr] lg:grid-cols-[minmax(400px,_400px)_1fr] 2xl:grid-cols-[minmax(600px,_600px)_1fr] 2xl:max-w-[1440px] ">
        <div className="md:pl-[100px]">
          <img
            className="h-[400px] w-full object-contain md:h-[600px] 2xl:h-[700px] "
            src={img}
            alt=""
          />
        </div>
        <div className="order-first md:order-none ">
          <div className="flex flex-col pt-5 text-white md:pt-28 lg:pt-16">
            <h1 className="text-[24px] font-black mb-5 md:text-[30px] lg:text-[3.125rem]">
              {heading}
            </h1>
            <span className="block font-bold text-[16px] md:text-[20px] lg:text-[1.8rem] mb-5 max-w-[358px] mx-auto md:max-w-none">
              {description2}
            </span>
            <span className="block font-bold text-[16px] text-center mb-3 md:text-[20px] lg:text-[1.8rem] ">
              {d5}
            </span>
            <span className="block font-bold text-[16px] md:text-[20px] lg:text-[2rem] mb-5 max-w-[358px] mx-auto md:max-w-none">
              {description}
              <span className="font-black">{d2}</span>
            </span>
            <span className="block font-bold text-[16px] text-center mb-3 md:text-[20px] lg:text-[2rem] ">
              {d3}
            </span>
            <span className="block font-bold text-[16px] text-center mb-3 md:text-[20px] lg:text-[2rem] ">
              {d4}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItems;
