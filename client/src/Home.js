import React, { useState, useEffect } from 'react'
import Web3 from "web3";

function Home() {
    const [currentaccount, setCurrentaccount] = useState("");

    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])
    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };
    const loadBlockchaindata = async () => {
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setCurrentaccount(account);
    }
    return (
        <div className="homebg">
            <div className="project-title"> <h1>Pharmaceutical Supply Chain</h1>
                <span>Responsibilities include oversight of all aspects of Pharmacy purchasing including medication procurement, inventory management, contracting, and participation in and compliance with the 3408 Federal Drug Discount Program for all covered entities.</span>
                <br/>
                <br/>
                <span><b>Current Account Address:</b> {currentaccount}</span>
            </div>
        </div>
    )
}

export default Home
