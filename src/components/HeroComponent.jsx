import React from "react";
import HeroImg from "../img/hero_img.png";
const HeroComponent = () => {
  return (
    <section
      className=" h-screen grid grid-cols-1 md:grid-cols-2 w-full md:px-20"
      id="home"
    >
      <div className="md:w-[80%] flex-1 flex flex-col md:items-start items-center justify-center md:h-[75%] gap-6">
        <p className="mt-10 text-[2rem] md:text-left lg:text-[3.5rem] font-bold tracking-wide md:leading-tight text-lightYellow">
          Problem Given by government of Gujarat
        </p>

        <p className="text-justify text-white font-bold text-sm flex flex-wrap gap-1">
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a
        </p>
        <div>
          <p className="mt-10 rounded-lg bg-white py-3 px-9 text-lg font-semibold text-bgColor hover:shadow-lg duration-100 transition-all ease-in-out cursor-pointer">
            Official Site
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center relative md:h-[75%] ">
        {/* Image */}
        <img src={HeroImg} />
      </div>
    </section>
  );
};

export default HeroComponent;
