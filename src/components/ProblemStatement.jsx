import React from "react";
import PS1 from "../img/ps1.png";
import PS2 from "../img/ps2.png";
import PS3 from "../img/ps3.png";
import Card from "./Card";

const ProblemStatement = () => {
  return (
    <div>
      <div className="md:mt-24 mt-12 p-8 flex flex-col items-center justify-center gap-2 text-center md:mb-52 ">
        <p className="font-semibold text-2xl md:text-4xl">Problem Statement</p>
        <p>
          Businesses generally promote their brand, products, and services by
          identifying audience.
        </p>

        <div className="mt-24 w-full flex flex-col md:flex-row items-center justify-center gap-5">
          <Card
            img={PS1}
            title="Problem"
            subtitle="Businesses generally promote their brand, products, and services by identifying audience or users."
          />
          <Card
            img={PS2}
            title="System Users"
            subtitle="When you have important information to pass onto your people, text messaging can be a great way to do it."
          />
          <Card
            img={PS3}
            title="Innovation"
            subtitle="Texting can sometimes come across as an impersonal way to communicate, it 
can be highly beneficial."
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
