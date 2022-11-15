import React from "react";
import AdventuresLocation from "./AdventuresLocation";
import desertKing from "../assets/Adventures assets/Desert King.svg";
import desertKing2 from '../assets/Adventures assets/Frame 151 (8).svg'
import desertKing3 from '../assets/Adventures assets/Frame 151 (9).svg'
import desertKing4 from '../assets/Adventures assets/Frame 151 (10).svg'
import desertKing5 from '../assets/Adventures assets/Frame 151 (11).svg'
import desertKing6 from '../assets/Adventures assets/Frame 151 (12).svg'
import desertKing7 from '../assets/Adventures assets/Frame 151 (13).svg'
import desertKing8 from "../assets/Adventures assets/Frame 151 (14).svg";

const Adventure = () => {
  return (
    <section className="bg-white  px-8 mt-5 pt-10 pb-[53px] md:px-[80px]  lg:px-[100px] xl:h-[963px]">
      <h2 className="font-bold text-3xl md:text-5xl text-center mb-[43px]">
        Inspiration for your next adventure
      </h2>
      <div className="grid grid-cols-1 gap-y-6 gap-x-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AdventuresLocation
          img={desertKing}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />
        <AdventuresLocation
          img={desertKing2}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing3}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />
        <AdventuresLocation
          img={desertKing4}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing5}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />
        <AdventuresLocation
          img={desertKing6}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing7}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />
        <AdventuresLocation
          img={desertKing8}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
      </div>
    </section>
  );
};

export default Adventure;
