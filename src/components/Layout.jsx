import React, {useContext} from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import { WalletModal } from '../App'
import Wallets from './Wallets'

const Layout = () => {
  const { showConnectWallet } = useContext(WalletModal);

  return (
    <main className="relative">
      <Header />
      {showConnectWallet && (
        <div className="fixed top-[0] bg-[#150c0c4d] z-20 flex justify-center items-center px-8 w-full h-screen">
          <Wallets />
        </div>
      )}
      <Outlet />
    </main>
  );
}

export default Layout