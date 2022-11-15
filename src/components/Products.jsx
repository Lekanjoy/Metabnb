import React from "react";
import metamask from "../assets/metamask.svg";
import mbToken from "../assets/MBtoken.svg";
import openSea from "../assets/openSea.svg";

const Products = () => {
  return (
    <div className="py-[10px] px-8  h-[70px] bg-[#a02279] flex gap-x-8 justify-between md:gap-x-[264px] md:px-[100px]">
      <img className="min-w-[64px] md:max-w-[215px]" src={mbToken} alt="MBToken logo" />
      <img className="min-w-[64px] md:max-w-[215px]" src={metamask} alt="Metamask logo" />
      <img className="min-w-[64px] md:max-w-[215px]" src={openSea} alt="OpenSea logo" />
    </div>
  );
};

export default Products;
