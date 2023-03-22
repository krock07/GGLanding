import React from "react";
import styles from "./Popup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Form from "../Form/SignupForm";

export default function Modal({ setOpenModal }) {
  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen py-8 md:px-4">
          <div className="relative w-full md:w-[531px] p-4 mx-auto rounded-[20px] bg-[#2a2a2a] shadow-lg md:h-[531px]">
            <div className="flex text-white rounded-full items-left">
              <AiFillCloseCircle onClick={() => setOpenModal(false)} />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
