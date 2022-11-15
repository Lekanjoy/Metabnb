import React from "react";
import metabnbLogo from "../assets/footer assets/metaFooter.svg";
import facebook from "../assets/footer assets/facebook.png";
import insta from "../assets/footer assets/insta.png";
import twitter from "../assets/footer assets/twitter.png";
import copyright from "../assets/footer assets/copyright.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E] relative flex justify-center items-center flex-col px-8 pt-[63px] pb-[37px] lg:flex-row lg:px-[100px] lg:items-start lg:justify-start lg:h-[322px] lg:gap-x-[187px]">
      <div className="flex flex-col items-center lg:items-start">
        <img
          className="w-[233px] mb-20 lg:mb-[100px]"
          src={metabnbLogo}
          alt="Metabnb Logo"
        />
        <div className="flex flex-col absolute bottom-0 mb-4 lg:mb-0 lg:relative">
          <div className="flex gap-x-[41px] mb-[57px]">
            <img src={facebook} alt="facebook icon" />
            <img src={insta} alt="instagram icon" />
            <img src={twitter} alt="twitter icon" />
          </div>
          <div className="flex items-center gap-x-[10px]">
            <img src={copyright} alt="Copyright icon" />
            <span className="text-[#F7F7F7]">2022 Metabnb</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-center mb-32 flex-col lg:text-left lg:justify-between lg:flex-row lg:gap-x-[217px]">
        <div className="flex flex-col mb-8 lg:mb-0">
          <h5 className="text-lg font-bold text-white mb-[23px]">Community</h5>
          <p className="list">NFT</p>
          <p className="list">Tokens</p>
          <p className="list">Landlords</p>
          <p className="list">Discord</p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-0">
          <h5 className="text-lg font-bold text-white mb-[23px]">Places</h5>
          <p className="list">Castle</p>
          <p className="list">Farms </p>
          <p className="list">Beach</p>
          <p className="list">Learn more</p>
        </div>
        <div className="flex flex-col">
          <h5 className="text-lg font-bold text-white mb-[23px]">About us</h5>
          <p className="list">Road map</p>
          <p className="list">Creators</p>
          <p className="list">Career</p>
          <p className="list">Contact us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
