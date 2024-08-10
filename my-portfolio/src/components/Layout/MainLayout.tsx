/** @format */

import React from "react";
import elipse from "../../../public/Icons/Eclipse.png";
import pill from "../../../public/Icons/Pill-Blue-Glossy.svg";
import pillYellow from "../../../public/Icons/SuperToroid-Yellow-Glossy.svg";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-dvh flex justify-center items-center w-full px-6 lg:px-10 bg-black overflow-hidden relative">
      <img
        src={elipse}
        className="absolute object-fill -top-12 -left-52 rotate-[180] w-[723px] h-[723px] rounded-full "
      />
      {children}

      <img
        src={pill}
        className="absolute select-none object-fill top-[570px] left-0 xl:left-6 rotate-[180] z-40 w-[80px] h-[122px] xl:w-[143px] xl:h-[222px] "
      />

      <img
        src={pillYellow}
        className="absolute select-none object-fill top-[390px] lg:top-[610px] right-0 bottom-4 z-20 rotate-[180] w-[222px] h-[222px] animate-moveHorizontal"
      />
    </div>
  );
}

export default MainLayout;
