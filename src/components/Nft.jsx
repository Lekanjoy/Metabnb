import React from 'react'
import frame from '../assets/frame.svg'

const Nft = () => {
  return (
    <section className="  bg-[#a02279] w-full text-center  border border-black flex flex-col-reverse items-center justify-between p-8 md:text-left md:h-[774px] md:p-[80px] md:flex-row md:gap-x-20 lg:p-[100px]  lg:gap-x-[122px]">
      <div className="">
        <h1 className="font-bold mt-12  text-white text-5xl mb-[35px]  md:whitespace-nowrap  md:mt-0">
          Metabnb NFTs
        </h1>
        <p className="text-white text-lg leading-[35px] mb-[58px] md:max-w-[415px]">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="text-[#a02279] bg-white rounded-[8px] w-[156px] h-[48px] text-center hover:scale-110 ease-in-out duration-300">
          {" "}
          Learn more
        </button>
      </div>
      <div className="">
        <img src={frame} alt="NFT Frames" />
      </div>
    </section>
  );
}

export default Nft