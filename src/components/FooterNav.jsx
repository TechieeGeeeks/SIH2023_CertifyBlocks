import React, { useState } from "react";
import SIHLOG from "../img/SIH2023.png";
const FooterNav = () => {

  return (
    <div>
      {/* FOR DESKTOP */}
      <div className="hidden md:flex justify-between shadow-lg bg-white p-6 rounded-lg items-center">
        <div>
          <p className="font-bold text-xl text-bgColor">
            Certify<span className="text-black">Blocks</span>
          </p>
        </div>
       
        <div>
          <img src={SIHLOG} className=" w-350" />
        </div>
      </div>

      {/* FOR MOBILE */}
      <div className="flex md:hidden bg-white justify-center shadow-lg items-center p-3 rounded-lg">
        <p className="font-bold text-lg text-bgColor">
          Certify<span className="text-black">Blocks</span>
        </p>
        
       
      </div>
    </div>
  );
};

export default FooterNav;
