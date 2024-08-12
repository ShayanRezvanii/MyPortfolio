/** @format */

import { motion } from "framer-motion";
import { Add, HambergerMenu, Moon } from "iconsax-react";
import { useState } from "react";
interface HeaderProps {
  selectedTab: (value: string) => void;
}

function Header({ selectedTab }: HeaderProps) {
  const [activeTab, setActiveTab] = useState("Introduction");
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    selectedTab(tab);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex justify-between w-full h-fit py-7 lg:px-14">
      <h1 className="font-bold text-white">SHAYAN !</h1>
      <div className=" hidden lg:flex w-fit justify-center gap-8">
        <div
          className={`relative text-white min-w-[67px] pb-1 cursor-pointer text-center ${
            activeTab === "Introduction" ? "after:animate-expand" : ""
          }`}
          onClick={() => handleTabClick("Introduction")}
        >
          Introduction
          <div
            className={`${
              activeTab === "Introduction" ? "w-full" : "w-0"
            } absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out`}
          />
        </div>
        <div
          className={`relative text-white min-w-[67px] pb-1 cursor-pointer text-center ${
            activeTab === "Projects" ? "after:animate-expand" : ""
          }`}
          onClick={() => handleTabClick("Projects")}
        >
          Projects
          <div
            className={`${
              activeTab === "Projects" ? "w-full" : "w-0"
            } absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out`}
          />
        </div>
        <div
          className={`relative text-white min-w-[67px] pb-1 cursor-pointer text-center ${
            activeTab === "Skills" ? "after:animate-expand" : ""
          }`}
          onClick={() => handleTabClick("Skills")}
        >
          Skills
          <div
            className={`${
              activeTab === "Skills" ? "w-full" : "w-0"
            } absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out`}
          />
        </div>
        <div
          className={`relative text-white min-w-[67px] pb-1 cursor-pointer text-center ${
            activeTab === "About" ? "after:animate-expand" : ""
          }`}
          onClick={() => handleTabClick("About")}
        >
          About
          <div
            className={`${
              activeTab === "About" ? "w-full" : "w-0"
            } absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out`}
          />
        </div>
      </div>
      <Moon
        size={24}
        variant="Bold"
        className="text-white hidden lg:block cursor-pointer"
      />

      <div className=" lg:hidden relative ">
        {/* {!isOpen ? (
          <HambergerMenu
            onClick={() => setIsOpen(true)}
            className=" text-white"
            size={28}
          />
        ) : (
          <Add
            onClick={() => setIsOpen(false)}
            size={28}
            className=" rotate-45 text-white"
          />
        )} */}

        <HambergerMenu
          onClick={() => setIsOpen(true)}
          className={`text-white transition-transform duration-300 ease-in-out absolute top-0 left-0 ${
            isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
          size={28}
        />
        {/* Add Icon */}
        <Add
          onClick={() => setIsOpen(false)}
          size={28}
          className={`text-white transition-transform duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 scale-100 rotate-45"
              : "opacity-0 scale-0 rotate-0"
          }`}
        />

        {isOpen ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className=" bg-neutral-800 top-10 flex justify-center  border-white/20 rounded-2xl  min-h-[210px] min-w-[160px] right-0 absolute border "
          >
            <div className=" flex flex-col justify-center p-3  items-center w-full gap-6">
              <div
                className={`relative text-white min-w-[67px] pb-1 cursor-pointer text-center ${
                  activeTab === "Introduction" ? "after:animate-expand" : ""
                }`}
                onClick={() => {
                  handleTabClick("Introduction");
                  setIsOpen(false);
                }}
              >
                Introduction
                <div
                  className={`${
                    activeTab === "Introduction" ? "w-full" : "w-0"
                  } absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out`}
                />
              </div>
              <div
                className={`relative text-white min-w-[67px] pb-1 cursor-pointer text-center ${
                  activeTab === "Projects" ? "after:animate-expand" : ""
                }`}
                onClick={() => {
                  handleTabClick("Projects");
                  setIsOpen(false);
                }}
              >
                Projects
                <div
                  className={`${
                    activeTab === "Projects" ? "w-full" : "w-0"
                  } absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out`}
                />
              </div>

              <div
                className={`relative text-white min-w-[67px] pb-1 cursor-pointer text-center ${
                  activeTab === "Skills" ? "after:animate-expand" : ""
                }`}
                onClick={() => {
                  handleTabClick("Skills");
                  setIsOpen(false);
                }}
              >
                Skills
                <div
                  className={`${
                    activeTab === "Skills" ? "w-full" : "w-0"
                  } absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out`}
                />
              </div>
              <div
                className={`relative text-white min-w-[67px] pb-1 cursor-pointer text-center ${
                  activeTab === "About" ? "after:animate-expand" : ""
                }`}
                onClick={() => {
                  handleTabClick("About");
                  setIsOpen(false);
                }}
              >
                About
                <div
                  className={`${
                    activeTab === "About" ? "w-full" : "w-0"
                  } absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ease-out`}
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
      {/* <Sun1 size={24} variant="Bold" className=" text-white" /> */}
    </div>
  );
}

export default Header;
