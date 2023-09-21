import React from "react";
import HeroImg from "../img/hero_img.png";
const HeroComponent = () => {
  return (
    <section
      className="md:h-screen grid grid-cols-1 md:grid-cols-2 w-full "
      id="home"
    >
      <div className="md:w-[80%] flex-1 flex flex-col md:items-start items-center justify-center md:h-[75%] gap-6">
        <p className="mt-10 text-[2rem] md:text-left lg:text-[3.5rem] font-bold tracking-wide md:leading-tight text-lightYellow">
          Problem Given by government of Gujarat
        </p>

        <p className="text-justify text-white font-bold text-sm flex flex-wrap gap-1">
        Currently large no of training programs is organized, and certificates are provided. There is no mechanism to validate digital certificate.so create a system in which custom digital certificate generate. User can store certificate in digital locker system other organization will validate certificate. Use opensource software and blockchain technology. Expected Output: Blockchain Based Certificate generation and validation Certificate can be added in Digital Loker System Users: Government Office, Student, Industry, Institutes
        </p>
        <div className="mt-5">
          <a className="mt-10 rounded-lg bg-white py-3 px-9 text-lg font-semibold text-bgColor hover:shadow-lg duration-100 transition-all ease-in-out cursor-pointer" target="_blank" href="https://sih.gov.in/sih2023PS">
            Official Site
          </a>
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
