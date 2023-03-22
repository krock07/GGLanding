import React, { useState } from "react";
import Image from "next/image";
import Popup from "../Modals/Popup";
import NavBtn from "../../public/navBtn.png";
import styles from "./MainNav.module.css";
import Link from "next/link";
const MainNav = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="pt-3">
      <nav className="bg-[#2A2A2A]   flex items-center justify-center h-[39px] w-[calc(100vw-1rem)] rounded-[5px] mx-auto lg:w-[1200px] md:h-[70px] lg:rounded-[50px] lg:mx-auto ">
        <div className="container flex items-center pl-[2rem] pr-[1rem] justify-between md:items-center lg:justify-between lg:px-8 ">
          <div>
            <Link href="/">
              <img
                className="object-contain w-[150px] md:w-[250px]  "
                src="/GGHorizontal.svg"
                alt="Picture of the author"
              />
            </Link>
          </div>

          <div>
            <Link href="/signup.js">
              <Image
                // onClick={() => {
                //   setShowModal(true);
                // }}
                src={NavBtn}
                width={98}
                height={27}
                className={styles.navBtn}
              />
            </Link>
            <Link href="/signup">
              <Image
                // onClick={() => {
                //   setShowModal(true);
                // }}
                src={NavBtn}
                width={188}
                height={54}
                className={styles.heroBtn}
              />
            </Link>

            {/* <button
              onClick={() => {
                setShowModal(true);
              }}
              className="shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] bg-[#278AEC] text-white font-bold text-[10px] rounded-[10px] h-[20.87px] w-[65.96px] lg:w-[188px] lg:h-[54px] md:text-[22px]"
            >
              JOIN NOW
            </button> */}
            {showModal && <Popup setOpenModal={setShowModal} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
