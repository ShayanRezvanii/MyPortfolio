/** @format */

import React from "react";
import Saly from "../../../public/Icons/Saly-13.svg";
import SuperToroid from "../../../public/Icons/SuperToroid-Purple-Glossy.svg";
function About() {
  return (
    <div className="text-white justify-between flex w-full  lg:px-14 mt-6">
      <div className=" w-full xl:max-w-[590px]">
        <p className=" w-full text-justify tracking-wide text-sm  xl:text-lg">
          Hello, my name is Shayan Rezvani, and I'm 21 years old. I live in
          Tehran, and I've been passionate about computers since I was a child.
          I started programming at the age of 19, and since then, I've
          specialized in front-end development. However, I've also worked as a
          full-stack developer on some projects. I'm excited about the endless
          possibilities in the world of technology and always eager to learn and
          grow in this field.
        </p>
      </div>
      <div className=" relative hidden xl:block">
        <img src={Saly} className="w-[467px] h-[467px]" />
        <img
          src={SuperToroid}
          className="w-[79px] top-0 animate-moveHorizontal left-20 absolute h-[57px]"
        />
      </div>
    </div>
  );
}

export default About;
