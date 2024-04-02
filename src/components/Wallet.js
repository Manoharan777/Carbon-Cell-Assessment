import React, { useState } from "react";
import Web3 from "web3";
import { WalletPng, UserPng } from "../utility/constants";
const Wallet = () => {
  const [status, setStatus] = useState("Not connected");
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Enable MetaMask Ethereum provider
        await window.ethereum.enable();
        // Create Web3 instance
        const web3 = new Web3(window.ethereum);
        // Get accounts
        const accounts = await web3.eth.getAccounts();
        // Set account and status
        setAccount(accounts[0]);
        setStatus("Connected");
      } else {
        // MetaMask not detected
        setStatus("MetaMask not detected");
      }
    } catch (error) {
      // Handle connection error
      console.error(error);
      setStatus("Connection failed");
    }
  };

  return (
    <div className="container mx-auto mt-3 text-center text-black">
      <h2 className=" text-orange-600 text-3xl font-semibold text-center mb-4">
        MetaMask Wallet Integration
      </h2>
      <img src={WalletPng} alt="wallet" className="mx-auto mb-2" />

      <div className="text-center mb-4">
        <button
          onClick={connectWallet}
          className="px-6 py-5 text-xl bg-orange-400 text-white rounded-md focus:outline-none hover:bg-green-600 "
        >
          CONNECT WALLET
        </button>
      </div>
      <div className="text-center">
        <p>
          <span className="text-red">NOTE: </span> Make sure Installed MetaMask
          extension and connected with Network
        </p>
        <p
          className={
            status === "Connected"
              ? "text-white bg-green-600 p-2 m-2 rounded text-2xl"
              : "text-white bg-red-600 p-2 m-2 text-2xl rounded mb-2 "
          }
        >
          Status: {status}
        </p>
        {account && (
          <div className="bg-orange-600 text-white mx-auto w-96 m-4 p-3 rounded-lg shadow-lg ">
            <img src={UserPng} alt="user" />
            <p className="my-10">Connected Account: {account}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
