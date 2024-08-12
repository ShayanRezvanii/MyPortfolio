/** @format */

import { Call, Setting2 } from "iconsax-react";
import Saly from "../../../public/Icons/Saly-13.svg";

import SuperToroid from "../../../public/Icons/SuperToroid-Purple-Glossy.svg";

export default function Introduction() {
  return (
    <div className=" w-full px-0 xl:px-14 mt-6">
      <div className=" flex w-full items-center justify-between">
        <div>
          <p className=" text-lg lg:text-4xl font-bold text-white">
            {`Hello! , I'm Shayan Rezvani`}
          </p>
          <p className="text-lg lg:text-4xl text-white my-2 font-bold">
            I'm{" "}
            <span className="  bg-clip-text text-transparent bg-gradient-to-l from-orange-500 to-orange-700">
              FrontEnd Developer
            </span>
          </p>
          <p className="  text-lg lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-bl  from-pink-400 to-violet-600">
            {"Welcome :)"}
          </p>
          <p className=" w-full max-w-[387px] text-sm lg:text-lg  text-white mt-6 tracking-widest">
            I'm excited about the endless possibilities in the world of
            technology and always eager to learn and grow in this field.
          </p>
          <div className=" w-full flex  gap-3">
            <a href="tel:09105293253">
              <button className=" bg-orange-500 text-sm xl:text-base px-4 lg:px-8 text-center flex gap-3 rounded-md mt-10 py-2 text-white">
                <Call variant="Bold" className=" text-white" />
                Contact me
              </button>
            </a>
            <a href="https://github.com/ShayanRezvanii">
              <button className=" bg-white  text-sm xl:text-base px-4 lg:px-8 text-center flex mt-10 gap-3 rounded-md lg:mt-10 py-2 text-black">
                <Setting2 variant="Bold" className=" text-black" />
                GitHub
              </button>
            </a>
          </div>
        </div>
        <div className=" relative hidden lg:block">
          <img src={Saly} className="w-[467px] h-[467px] " />
          <img
            src={SuperToroid}
            className="w-[79px] top-0 animate-moveHorizontal left-20 absolute h-[57px]"
          />
        </div>
      </div>
    </div>
  );
}
