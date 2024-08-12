/** @format */

import Saly from "../../../public/Icons/Saly-13.svg";
import SuperToroid from "../../../public/Icons/SuperToroid-Purple-Glossy.svg";

function Skills() {
  return (
    <div className="  justify-between flex w-full px-4 lg:px-14 mt-6">
      <div className=" h-fit">
        <ul className=" list-disc flex gap-2 flex-col">
          <li className=" text-white text-sm tracking-widest">{`Html & CSS`}</li>
          <li className=" text-white text-sm tracking-widest">{`JavaScript`}</li>
          <li className=" text-white text-sm tracking-widest">{`React.js`}</li>
          <li className=" text-white text-sm tracking-widest">{`Next.js`}</li>
          <li className=" text-white text-sm tracking-widest">{`Node.js`}</li>
          <li className=" text-white text-sm tracking-widest">{`MongoDB`}</li>
          <li className=" text-white text-sm tracking-widest">{`Express.js`}</li>
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

export default Skills;
