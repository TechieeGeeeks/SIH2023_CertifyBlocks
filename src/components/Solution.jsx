import React from "react";
import SolutionImg from "../img/solution.png";
import MobSolutiob from "../img/solution-mob.png"

const Solution = () => {
  return (
    <div>
      {/* for desk */}
      <div className="hidden md:flex flex-col mt-12 md:mt-0 p-8  text-center md:mb-52">
        <p className="font-semibold text-2xl md:text-4xl">Solution</p>
        <img src={SolutionImg} className="md:mt-24" />
      </div>

      {/* for mob */}

      <div className="md:hidden flex flex-col gap-6 mt-24 text-center">
        <p className="font-semibold text-2xl">Solution</p>
        <img src={MobSolutiob} />
      </div>
    </div>
  );
};

export default Solution;
