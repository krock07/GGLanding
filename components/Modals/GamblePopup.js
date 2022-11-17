import React, { useState } from "react";
import styles from "./Popup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import MyTimer from "../GamblerStats/Timer";
import VotePopup from "../Modals/VotePopup";

export default function Modal({ setOpenModal, time }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [clickedGreen, setClickedGreen] = useState(false);
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
                  onClick={() => {
                    setShowAnswer(true);
                    setClickedGreen(true);
                    // alert("Modal clicked");
                  }}
                  className="px-5 py-5 bg-green-600 rounded-md w-fit"
                >
                  <IoMdPlay className="text-white -rotate-90" />
                </button>
                {showAnswer && (
                  <VotePopup
                    setOpenModal={setOpenModal}
                    clickedGreen={clickedGreen}
                  />
                )}

                <button
                  onClick={() => {
                    setShowAnswer(true);

                    // alert("Modal clicked");
                  }}
                  className="px-5 py-5 bg-red-600 rounded-md w-fit "
                >
                  <IoMdPlay className="text-white rotate-90" />
                </button>
                {showAnswer && (
                  <VotePopup
                    setOpenModal={setOpenModal}
                    clickedGreen={clickedGreen}
                  />
                )}
              </div>
              <div className="pt-10">
                <MyTimer expiryTimestamp={time} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
