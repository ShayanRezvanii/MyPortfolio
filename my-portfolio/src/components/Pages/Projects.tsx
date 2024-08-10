/** @format */

import Saly from "../../../public/Icons/Saly-13.svg";
import SuperToroid from "../../../public/Icons/SuperToroid-Purple-Glossy.svg";

function Projects() {
  return (
    <div className="  justify-between flex w-full px-4 lg:px-14 mt-6">
      <div className=" h-fit">
        <ul className=" list-disc flex gap-2 flex-col">
          <li className=" text-white text-xs lg:text-smtracking-widest">{`3Engine.io Web3 - (Front-End)`}</li>
          <li className=" text-white text-xs lg:text-sm tracking-widest">{`Funicket.ir  - (Front-End)`}</li>
          <li className=" text-white text-xs lg:text-sm tracking-widest">{`Digital Synthesys - (Back-End)`}</li>

          <li className=" text-white text-xs lg:text-sm tracking-widest">{`Weather App - (Front-End)`}</li>
          <li className=" text-white text-xs lg:text-sm tracking-widest">{`CafeMenu  - (BackEnd & Front-End)`}</li>
          <li className=" text-white text-xs lg:text-sm tracking-widest">{`Weather App  - (Front-End)`}</li>
          <li className=" text-white text-xs lg:text-sm tracking-widest">{`Login & Register - (BackEnd & Front-End)`}</li>
          <li className=" text-white text-xs lg:text-sm tracking-widest">{`CMS - (BackEnd)`}</li>
        </ul>
      </div>
      <div className=" relative hidden lg:block">
        <img src={Saly} className="w-[467px] h-[467px]" />
        <img
          src={SuperToroid}
          className="w-[79px] animate-moveHorizontal top-0  left-20 absolute h-[57px]"
        />
      </div>
    </div>
  );
}

export default Projects;
