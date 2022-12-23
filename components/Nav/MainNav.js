import React, { useState } from "react";
import Image from "next/image";
import Popup from "../Modals/Popup";

const MainNav = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="pt-3">
      <nav className="bg-[#2A2A2A]   flex items-center justify-center h-[39px] w-[calc(100vw-1rem)] rounded-[5px] mx-auto lg:w-[1200px] md:h-[91px] lg:rounded-[50px] lg:mx-auto ">
        <div className="container flex items-center pl-[2rem] pr-[1rem] justify-between lg:items-center lg:justify-between lg:px-8 ">
          <div>
            <img
              className="object-contain w-[150px] md:w-[250px] "
              src="/GGHorizontal.svg"
              alt="Picture of the author"
            />
          </div>

          <div>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] bg-[#278AEC] text-white font-bold text-[10px] rounded-[10px] h-[20.87px] w-[65.96px] lg:w-[188px] lg:h-[54px] md:text-[22px]"
            >
              JOIN NOW
            </button>
            {showModal && <Popup setOpenModal={setShowModal} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
