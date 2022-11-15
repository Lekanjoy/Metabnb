import React from 'react'
import AdventuresLocation from '../AdventuresLocation';
import Footer from '../Footer';
import location from '../../assets/PlaceToStay assets/location.svg'
import desertKing from '../../assets/PlaceToStay assets/Frame 151 (8).svg'
import desertKing2 from '../../assets/PlaceToStay assets/Frame 151 (9).svg'
import desertKing3 from '../../assets/PlaceToStay assets/Frame 151 (10).svg'
import desertKing4 from '../../assets/PlaceToStay assets/Frame 151 (11).svg'
import desertKing5 from '../../assets/PlaceToStay assets/Frame 151 (12).svg'
import desertKing6 from '../../assets/PlaceToStay assets/Frame 151 (13).svg'
import desertKing7 from '../../assets/PlaceToStay assets/Frame 151 (14).svg'
import desertKing8 from '../../assets/PlaceToStay assets/Frame 151 (15).svg'
import desertKing9 from '../../assets/PlaceToStay assets/Frame 151 (16).svg'
import desertKing10 from '../../assets/PlaceToStay assets/Frame 151 (17).svg'
import desertKing11 from '../../assets/PlaceToStay assets/Frame 151 (18).svg'
import desertKing12 from '../../assets/PlaceToStay assets/Frame 151 (19).svg'
import desertKing13 from '../../assets/PlaceToStay assets/Frame 151 (20).svg'
import desertKing14 from '../../assets/PlaceToStay assets/Frame 151 (21).svg'
import desertKing15 from '../../assets/PlaceToStay assets/Frame 151 (22).svg'
import desertKing16 from "../../assets/PlaceToStay assets/Frame 151 (23).svg";

const PlaceToStay = () => {
  return (
    <section className="mt-[135px] ">
      <div className="flex gap-x-10 items-center  whitespace-nowrap mb-[77px] w-full overflow-x-auto px-8 md:px-[100px] md:gap-x-12">
        <p className="text-[#434343] text-xl">Resturant</p>
        <p className="text-[#434343] text-xl">Cottage</p>
        <p className="text-[#434343] text-xl">Castle</p>
        <p className="text-[#434343] text-xl">fantast city</p>
        <p className="text-[#434343] text-xl">beach</p>
        <p className="text-[#434343] text-xl">Carbins</p>
        <p className="text-[#434343] text-xl">Off-grid</p>
        <p className="text-[#434343] text-xl">Farm</p>
        <div className="flex justify-between px-[13px] text-[#333333] gap-x-[42px] items-center border border-[#B4B4B4] rounded-lg min-w-[161px] h-12">
          <p>Location</p>
          <img className="w-6 h-6" src={location} alt="Location icon" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-6 gap-x-12 pb-[92px] px-8 md:px-[100px]  md:place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        />{" "}
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
        />{" "}
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
        />{" "}
        <AdventuresLocation
          img={desertKing8}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing9}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing10}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing11}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing12}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing13}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing14}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing15}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />{" "}
        <AdventuresLocation
          img={desertKing16}
          name="Desert king"
          distance="2345km away"
          price="1MBT per night"
          availability="available for 2weeks stay"
        />
      </div>
      <Footer />
    </section>
  );
}

export default PlaceToStay