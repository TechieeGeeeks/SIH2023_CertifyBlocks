import React, { useState } from "react";
import SIHLOG from "../img/SIH2023.png";
import MenuIcon from "../img/menu_icon.svg";
const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const menuHandle = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div>
      {/* FOR DESKTOP */}
      <div className="hidden md:flex justify-between bg-white p-6 rounded-lg items-center">
        <div>
          <p className="font-bold text-xl text-bgColor">
            Certify<span className="text-black">Blocks</span>
          </p>
        </div>
        <div>
          <ul className="flex gap-5 text-sm">
            <li className=" cursor-pointer hover:text-bgColor">Idea</li>
            <li className=" cursor-pointer hover:text-bgColor">Solution</li>
            <li className=" cursor-pointer hover:text-bgColor">Process Flow</li>
            <li className=" cursor-pointer hover:text-bgColor">Tech Stack</li>
            <li className=" cursor-pointer hover:text-bgColor">Use Case</li>
          </ul>
        </div>
        <div>
          <img src={SIHLOG} className=" w-350" />
        </div>
      </div>

      {/* FOR MOBILE */}
      <div className="flex md:hidden bg-white justify-between p-3 rounded-lg">
        <p className="font-bold text-lg text-bgColor">
          Certify<span className="text-black">Blocks</span>
        </p>
        <img src={MenuIcon} className=" w-8" onClick={menuHandle} />
        {isMenu && (
          <div className=" absolute right-8 top-24 bg-white p-3 rounded-lg">
            <ul className=" flex flex-col gap-2 text-sm">
              <li className=" cursor-pointer ">Idea</li>
              <li className=" cursor-pointer ">Solution</li>
              <li className=" cursor-pointer ">Process Flow</li>
              <li className=" cursor-pointer ">Tech Stack</li>
              <li className=" cursor-pointer ">Use Case</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
