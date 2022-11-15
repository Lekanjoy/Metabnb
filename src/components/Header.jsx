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
    <header className="pt-[43px] h-[48px] w-full relative flex justify-between items-center  px-8 md:px-[100px]">
      <img className="max-w-[188px]" src={logo} alt="logo image" />
      <img
        onClick={handleToggleMenu}
        className="md:hidden cursor-pointer"
        src={hamburger}
        alt="menu icon"
      />
      <nav className="hidden md:flex md:flex-row md:gap-x-12">
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
        className="hidden  place-items-center place-content-center  text-white md:grid bg-[#a02279] rounded-[10px] w-[170px] h-12"
      >
        Connect wallet
      </button>
      {/* Mobile Menu */}
      {showMenu && <Menu handleToggleMenu={handleToggleMenu} />}
      {/* Mobile Menu */}
    </header>
  );
};

export default Header;
