import React, {useContext} from 'react'
import cancel from '../assets/Connect Wallet assets/icon-close.svg'
import down from "../assets/Connect Wallet assets/Down Chevron.svg";
import metaMask from '../assets/Connect Wallet assets/metaMask.svg'
import walletCoin from '../assets/Connect Wallet assets/walletCoin.svg'

import { WalletModal } from '../App';

const Wallets = () => {

 const { setShowConnectWallet } = useContext(WalletModal);

 // Handle Wallets modal display
 const handleShowModal = () => {
   setShowConnectWallet((prevState) => !prevState);
   console.log("modal closed");
 };

  return (
    <div className="bg-white w-full rounded-2xl z-20 shadow-lg md:w-[600px] md:h-[326px]">
      <div className="flex justify-between items-center px-8 pb-8 pt-6 mb- border-b border-[#CFD8DC]">
        <h4 className="font-bold text-[#333333] text-2xl ">Connect Wallet</h4>
        <img
          onClick={handleShowModal}
          src={cancel}
          alt="cancel icon"
          className="cursor-pointer"
        />
      </div>

      <div className=" px-8 pb-8 pt-6">
        <h5 className="mb-4 text-[#333333]">Choose your preferred wallet:</h5>
        <div className="w-full flex flex-col gap-y-4 cursor-pointer">
          <div className="flex justify-between items-center bg-[#F8F9FA] border border-[#CFD8DC] rounded-[12px] py-3 px-5">
            <div className="flex items-center gap-x-4">
              <img src={metaMask} alt="metamask logo" />
              <h6 className="font-semibold text-lg text-black">Metamask</h6>
            </div>
            <img src={down} alt=" icon down" />
          </div>
          <div className="flex justify-between items-center border border-[#CFD8DC] rounded-[12px] py-3 px-5">
            <div className="flex items-center gap-x-4">
              <img src={walletCoin} alt="walletcoin logo" />
              <h6 className="font-semibold text-lg text-black">
                WalletConnect
              </h6>
            </div>
            <img src={down} alt=" icon down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallets