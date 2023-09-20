import React from "react";
import Marquee from "react-fast-marquee";
import {BiLogoFlutter, BiLogoReact, BiLogoAws, BiLogoMongodb, BiLogoNodejs} from 'react-icons/bi'
import {FaFigma} from 'react-icons/fa'
import {SiBlockchaindotcom, SiSolidity, SiExpress, SiPostman} from 'react-icons/si'

const TechStack = () => {
  return (
    <div className=" mt-12">
      <div className="flex flex-col mt-12 md:mt-0 p-8  text-center md:mb-52">
        <p className="font-semibold text-2xl md:text-4xl">Tech Stacks</p>
      </div>
      <div className="flex flex-col gap-10 mb-12">
      <Marquee speed={200} autoFill="true">
        <BiLogoFlutter className=" text-5xl md:text-9xl ml-6"/>
        <BiLogoReact className=" text-5xl md:text-9xl ml-6"/>
        <FaFigma className=" text-5xl md:text-9xl ml-6"/>
        <BiLogoAws className=" text-5xl md:text-9xl ml-6"/>
        <BiLogoMongodb className=" text-5xl md:text-9xl ml-6"/>
        
      </Marquee>

      <Marquee speed={200} autoFill="true" >
      <SiBlockchaindotcom className=" text-5xl md:text-9xl ml-8" />
        <SiSolidity className=" text-5xl md:text-9xl  ml-8"/>
        <BiLogoNodejs className=" text-5xl md:text-9xl ml-8"/>
        <SiExpress className=" text-5xl md:text-9xl ml-8"/>
        <SiPostman className=" text-5xl md:text-9xl ml-8"/>
      </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
