import React, {useState, useContext} from "react";
import Wallets from "./Wallets";
import Products from "./Products";
import Adventure from "./Adventure";
import Footer from "./Footer";
import Nft from "./Nft";
import illust from '../assets/illust.svg'
import { WalletModal } from "../App";

const Home = () => {
  const {showConnectWallet} = useContext(WalletModal)
  return (
    <main className="relative mt-[80px] md:mt-[133px]">
      <section className="font-[Nunito] w-full flex flex-col-reverse justify-between items-center mb-[67px]  px-8 md:px-[80px]  md:flex-row md:gap-x-[99px] lg:px-[100px]">
        <div className=" w-full mt-6 md:max-w-4/5 xl:w-[646px] md:mt-0">
          <h1 className="font-bold text-center text-3xl mb-4 md:text-[56px] md:text-left md:leading-[78px] md:mb-12">
            Rent a <span className="text-[#a02279]">Place </span>away from{" "}
            <span className="text-[#a02279]">Home</span> in the{" "}
            <span className="text-[#a02279]">Metaverse</span>
          </h1>
          <p className="text-blackPrimary text-xl text-center md:text-left md:text-2xl mb-12">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className=" w-full flex">
            <input
              className="w-3/5 h-12 border border-[#A3A3A3] outline-none pl-[12px] rounded-l-[8px] md:w-[390px] md:h-[54px] placeholder:text-[#B8B8B8]"
              type="text"
              placeholder="Search for location"
            />
            <button
              className="w-2/5 h-12 rounded-r-[8px] bg-[#a02279] text-white md:w-[230px] md:h-[54px]"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="w-full md:hidden xl:flex ">
          <img
            className="w-full "
            src={illust}
            alt="adventure location images"
          />
        </div>
      </section>
      <Products />
      <Adventure />
      <Nft />
      <Footer />
    </main>
  );
};

export default Home;
