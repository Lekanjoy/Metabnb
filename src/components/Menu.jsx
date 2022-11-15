import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { WalletModal } from '../App'

const Menu = ({handleToggleMenu}) => {
  const {setShowConnectWallet} = useContext(WalletModal);
  
  // Handle Wallets modal display
  const handleShowModal = () => {
  setShowConnectWallet(prevState => !prevState)
  console.log('modal');
  }
  return (
    <nav onClick={handleToggleMenu} className="flex flex-col cursor-pointer rounded-xl pt-12 pb-6 px-8 text-center w-[90%] gap-y-4 ease-in-out duration-500 h-[400p] absolute top-[120px] left-0 z-10 bg-white shadow-md border md:hidden">
        <Link to="/" className="text-blackPrimary p-3 hover:text-[#a02279] hover:scale-110 ease-in-out duration-300 ">Home</Link>
        <Link to="/placetostay" className="text-blackPrimary p-3 hover:text-[#a02279] hover:scale-110 ease-in-out duration-300 ">Place to stay</Link>
        <Link to="/nft" className="text-blackPrimary p-3 hover:text-[#a02279] hover:scale-110 ease-in-out duration-300">NFTs</Link>
        <Link to="" className="text-blackPrimary p-3 hover:text-[#a02279] hover:scale-110 ease-in-out duration-300 ">Community</Link>
      <button onClick={handleShowModal} className="grid place-items-center place-content-center text-white bg-[#a02279] mt-5 rounded-[10px] p-3 hover:opacity-80 md:hidden ">Connect wallet</button>
      </nav>
  )
}

export default Menu