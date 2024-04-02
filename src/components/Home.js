import React from "react";
import { Link } from "react-router-dom";
import PopulationData from "./PopulationData";
import CryptoPrize from "./CryptoPrize";
import Wallet from "./Wallet";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row m-4">
      {/* Left div */}
      <div className="md:w-1/2 mb-4 md:mr-2">
        <Link to="/graph">
          <div className="bg-green-100 p-4 rounded-md shadow-md h-full">
            <PopulationData />
          </div>
        </Link>
      </div>
      {/* Right div */}
      <div className="md:w-1/2">
        <Link to="/card">
          <div className="bg-green-100 p-4 rounded-md shadow-md mb-4">
            <CryptoPrize />
          </div>
        </Link>
        <Link to="/wallet">
          <div className="bg-green-100 p-4 rounded-md shadow-md">
            <Wallet />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
