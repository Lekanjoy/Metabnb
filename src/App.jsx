import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Nft from "./components/Nft";
import PlaceToStay from "./components/pages/PlaceToStay";

export const WalletModal = createContext();

function App() {
  const [showConnectWallet, setShowConnectWallet] = useState(false);

  return (
    <WalletModal.Provider value={{ showConnectWallet, setShowConnectWallet }}>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="nft" element={<Nft />} />
            <Route path="/placetostay" element={<PlaceToStay />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Route>
      </Routes>
    </WalletModal.Provider>
  );
}

export default App;
