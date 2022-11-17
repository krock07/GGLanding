import React from "react";
import styles from "./Popup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Form from "../Form/SignupForm";

export default function Modal({ setOpenModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div
            className={`relative w-full max-w-lg p-4 mx-auto rounded-md shadow-lg ${styles.bg}`}
          >
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
