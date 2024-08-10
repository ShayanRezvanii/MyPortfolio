/** @format */

import { useState } from "react";
import Header from "../Header";
import Introduction from "../../Pages/Introduction";
import Projects from "../../Pages/Projects";
import About from "../../Pages/About";
import Skills from "../../Pages/Skills";

function Container() {
  const [selectedTab, setSelectedTab] = useState("Introduction");
  console.log(selectedTab);

  return (
    <div className=" w-full max-w-[1422px] bg-white/10 border-white/20 px-8 lg:px-14 py-4 z-30  rounded-2xl border backdrop-blur-lg  h-[550px] lg:h-[625px] ">
      <Header selectedTab={(e: any) => setSelectedTab(e)} />
      {selectedTab === "Introduction" ? <Introduction /> : null}
      {selectedTab === "Projects" ? <Projects /> : null}
      {selectedTab === "Skills" ? <Skills /> : null}
      {selectedTab === "About" ? <About /> : null}
    </div>
  );
}

export default Container;
