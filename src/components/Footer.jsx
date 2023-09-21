import React from "react";
import FooterNav from "./FooterNav";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div className=" md:p-12 p-8 flex justify-center relative bg-bgColor">
      <div className="w-[80%] absolute -top-7">
        <FooterNav />
      </div>

      {/* For Desktop */}
      <div className="hidden text-white md:flex gap-12 justify-center items-center ">
        <div className=" text-white">
          <div className="mt-24 ">
            <p className="font-bold text-4xl text-lightYellow">
              Certify<span className="text-white">Blocks</span>
            </p>
            <p className=" text-sm font-light mt-4">
              This is a big one and i consider it one of the most important
              things for a business.
            </p>
          </div>
        </div>
        <div className="mt-24">
          <p className="w-full text-xl mb-6">Quick Links</p>
          <ul className=" flex flex-col gap-2 text-sm">
            <li className=" cursor-pointer ">
              <ScrollLink
                to="problemStatement"
                spy={true}
                smooth={false}
                offset={-70}
                duration={500}
              >
                <p>Problem Statement</p>
              </ScrollLink>
            </li>
            <li className=" cursor-pointer ">
              <ScrollLink
                to="Solution"
                spy={true}
                smooth={false}
                offset={-70}
                duration={500}
              >
                <p>Solution</p>
              </ScrollLink>
            </li>
            {/* <li className=" cursor-pointer ">Process Flow</li> */}
            <ScrollLink
              to="tech-stack"
              spy={true}
              smooth={false}
              offset={-70}
              duration={500}
            >
              <p>Tech Stack</p>
            </ScrollLink>
            {/* <li className=" cursor-pointer ">Use Case</li> */}
          </ul>
        </div>
      </div>

      {/* For Mobile */}
      <div className="md:hidden w-screen">
        <div className="md:mt-24 mt-12 text-white ">
          <div>
            <p className="font-bold text-xl text-lightYellow">
              Certify<span className="text-white">Blocks</span>
            </p>
            <p className=" text-sm font-light mt-4">
              This is a big one and i consider it one of the most important
              things for a business.
            </p>
          </div>
          <div className="mt-8">
            <p className="mb-3">Quick Links:</p>
            <ul className=" flex flex-col gap-2 text-sm">
              <li className=" cursor-pointer ">
                <ScrollLink
                  to="problemStatement"
                  spy={true}
                  smooth={false}
                  offset={-70}
                  duration={500}
                >
                  <p>Problem Statement</p>
                </ScrollLink>
              </li>
              <li className=" cursor-pointer ">
                <ScrollLink
                  to="Solution"
                  spy={true}
                  smooth={false}
                  offset={-70}
                  duration={500}
                >
                  <p>Solution</p>
                </ScrollLink>
              </li>
              {/* <li className=" cursor-pointer ">Process Flow</li> */}
              <ScrollLink
                to="tech-stack"
                spy={true}
                smooth={false}
                offset={-70}
                duration={500}
              >
                <p>Tech Stack</p>
              </ScrollLink>
              {/* <li className=" cursor-pointer ">Use Case</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
