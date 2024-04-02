import React, { useState, useEffect } from "react";
import { CryptoPrizeUrl } from "../utility/constants";
import ShimmerUi from "../utility/ShimmerUi";
const CryptoPrize = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapping object for currency symbols
  const currencySymbols = {
    USD: "$",
    GBP: "£",
    EUR: "€",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CryptoPrizeUrl);
        const data = await response.json();
        setBitcoinPrices(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ShimmerUi/>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const Bitcoin = bitcoinPrices.bpi;

  return (
    <div className="container mx-auto text-white">
      <h2 className=" text-orange-600 text-3xl font-semibold text-center mt-6 mb-4">
        CRYPTOCURRENCY PRICES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(Bitcoin).map(([currency, price]) => (
          <div
            key={currency}
            className="bg-orange-400 p-4 rounded-md shadow-md hover:bg-white hover:text-black transition duration-600 cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-[#226423] mb-2">
              {currency}
            </h3>
            <span className="text-xl">
              {currencySymbols[currency]} {price.rate}
            </span>
            <p className="text-xl"> {price.description}</p>
            <p className="text-right text-s text-black">
              {bitcoinPrices.time.updated}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPrize;
