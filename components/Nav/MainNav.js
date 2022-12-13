import React, { useState } from "react";
import Image from "next/image";
import Popup from "../Modals/Popup";

const MainNav = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="lg:pt-3">
      <nav className="bg-[#2A2A2A] py-5 flex align-center justify-center lg:w-[1200px] lg:rounded-[50px] lg:mx-auto ">
        <div className="container flex justify-around align-center lg:items-center lg:justify-between lg:px-8 ">
          <div>
            <img
              className="object-contain w-[150px] "
              src="/GGHorizontal.svg"
              alt="Picture of the author"
            />
          </div>

          <div>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className=" bg-[#278AEC] text-white font-bold text-[10px] rounded h-[20.87px] w-[65.96px] lg:w-[138px]"
            >
              Join list
            </button>
            {showModal && <Popup setOpenModal={setShowModal} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
