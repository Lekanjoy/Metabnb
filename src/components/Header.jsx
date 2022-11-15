import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/logo.svg";
import hamburger from "../assets/Hamburger Menu.svg";

import { WalletModal } from "../App";

const Header = () => {
const [showMenu, setShowMenu] = useState(false)

const handleToggleMenu = () => {
    setShowMenu(prevState => !prevState)
}



 const { setShowConnectWallet } = useContext(WalletModal);

 // Handle Wallets modal display
 const handleShowModal = () => {
   setShowConnectWallet((prevState) => !prevState);
   console.log("modal opened");
 };

  return (
    <header className="pt-[43px] h-[48px] w-full relative flex justify-between mb-[120px] items-center px-8 md:px-[80px]  lg:px-[100px]">
      <img id="logo" className="max-w-[188px] z-50" src={logo} alt="logo image" />
      <img
      id="hamburger"
        onClick={handleToggleMenu}
        className="lg:hidden cursor-pointer z-50"
        src={hamburger}
        alt="menu icon"
      />
      <nav className="hidden lg:flex lg:flex-row lg:gap-x-12">
        <Link to="/" className="text-white md:text-blackPrimary text-xl ">
          Home
        </Link>
        <Link
          to="/placetostay"
          className="text-white md:text-blackPrimary text-xl "
        >
          Place to stay
        </Link>
        <Link to="/nft" className="text-white md:text-blackPrimary text-xl ">
          NFTs
        </Link>
        <Link to="" className="text-white md:text-blackPrimary text-xl ">
          Community
        </Link>
      </nav>
      <button
        onClick={handleShowModal}
        className="hidden  place-items-center place-content-center  text-white lg:grid bg-[#a02279] rounded-[10px] w-[170px] h-12"
      >
        Connect wallet
      </button>
      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed z-40 left-0 w-full h-screen bg-[#150c0c4d] top-0">
          <Menu handleToggleMenu={handleToggleMenu} />
        </div>
      )}
      {/* Mobile Menu */}
    </header>
  );
};

export default Header;
