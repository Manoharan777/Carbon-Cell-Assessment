import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CryptoPrize from "./components/CryptoPrize";
import Home from "./components/Home";
import PopulationData from "./components/PopulationData";
import SideNavigation from "./components/SideNavigation";
import Wallet from "./components/Wallet";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-white">
        {/* Render SideNavigation always */}
        <SideNavigation />

        {/* Render the rest of the components based on route */}
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graph" element={<PopulationData />} />
            <Route path="/card" element={<CryptoPrize />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
