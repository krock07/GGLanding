import React from "react";
import Link from "next/link";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="h-auto mt-2 ">
      <div className="flex justify-center gap-4 pb-5">
        <AiOutlineTwitter className="text-white" />
        <AiOutlineInstagram className="text-white" />
      </div>
      <div className="px-5">
        <div className="flex text-[#707070] text-[14px] justify-around">
          <p>About</p>
          <p>Rules</p>
          <p>Disclaimer</p>
          <Link href="/contact">
            <p className="cursor-pointer">Contact</p>
          </Link>
        </div>
        <div className="flex text-[#707070] text-[14px] justify-around">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Disclosures</p>
          <p>Advertise</p>
        </div>
      </div>
      <div className=" pt-5 px-5 flex text-[#707070] text-[12px]">
        <small>
          ©2022 Gap Gambler. All rights reserved. Market Data by Xignite and
          BATS BZX Real-Time Price
        </small>
      </div>
    </div>
  );
};

export default Footer;
