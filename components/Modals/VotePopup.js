import React from "react";
import styles from "./Popup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import MyTimer from "../GamblerStats/Timer";

export default function Modal({ setOpenModal, time, clickedGreen }) {
  console.log(clickedGreen);
  return (
    <>
      <div className="fixed inset-0 z-20 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-90"
          onClick={() => setOpenModal(false)}
        >
          <div className="flex mt-5 justify-center w-full text-[60px] lg:hidden">
            <AiFillCloseCircle onClick={() => setOpenModal(false)} />
          </div>
        </div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div
            className={`relative w-full max-w-lg p-4 mx-auto rounded-md shadow-lg bg-[#2A2A2A]`}
          >
            {/* <div className="flex text-white rounded-full items-left">
              <AiFillCloseCircle onClick={() => setOpenModal(false)} />
            </div> */}
            <div className="flex justify-between ">
              <div className="flex flex-col text-white">
                <h1 className="text-xl font-bold">TSLA</h1>
                <small className=" text-xs text-[#707070] font-bold">
                  TSLA INC
                </small>
              </div>

              <div className="flex flex-col text-white">
                <div>
                  <h1 className="text-xl font-bold ">$390.15</h1>
                </div>

                <div className="flex items-center">
                  <IoMdPlay className="text-red-600 rotate-90" />
                  <p className="text-red-500"> 3.23 (0.83%)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center py-5 mt-3 ">
              <h1 className="font-bold">July 17</h1>
              <p className="font-bold">Opening Gap Direction?</p>
              <div className="flex gap-2 px-5 mt-8 sm:items-center sm:flex ">
                <button
                  className={
                    clickedGreen === false
                      ? "px-5 py-5 bg-[rgb(22,163,74,.10)] rounded-md w-fit"
                      : "px-5 py-5 bg-green-600 rounded-md w-fit"
                  }
                >
                  <IoMdPlay className="text-white -rotate-90" />
                </button>

                <button
                  className={
                    clickedGreen
                      ? "px-5 py-5 bg-[rgb(220,38,38,.10)] rounded-md w-fit"
                      : "px-5 py-5 bg-red-600 rounded-md w-fit"
                  }
                >
                  <IoMdPlay className="text-white rotate-90 " />
                </button>
                <div>
                  <p onClick={() => setOpenModal(false)}>Cancel</p>
                </div>
              </div>
              <div className="flex flex-col w-full pt-10 ">
                <label>Analysis (optional)</label>
                <textarea
                  className="bg-[#434343] rounded-sm border-0"
                  type="text"
                />
              </div>
              <div className="pt-10">
                <button className="bg-[#278AEC] px-5 py-2 rounded-sm">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
