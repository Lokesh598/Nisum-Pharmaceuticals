import React, { useState, useEffect } from 'react'
import Web3 from "web3";
import SupplyChainABI from "./artifacts/SupplyChain.json"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function OrderMedicine() {
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])

    const [currentaccount, setCurrentaccount] = useState("");
    const [loader, setloader] = useState(true);
    const [SupplyChain, setSupplyChain] = useState();
    const [MED, setMED] = useState();
    const [MedName, setMedName] = useState();
    const [MedDes, setMedDes] = useState();
    const [MedComs, setMedComs] = useState();
    const [MedQuant, setMedQuant] = useState();
    const [MedStage, setMedStage] = useState();


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
        setloader(true);
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setCurrentaccount(account);
        const networkId = await web3.eth.net.getId();
        const networkData = SupplyChainABI.networks[networkId];
        if (networkData) {
            const supplychain = new web3.eth.Contract(SupplyChainABI.abi, networkData.address);
            setSupplyChain(supplychain);
            var i;
            const medCtr = await supplychain.methods.medicineCtr().call();
            const med = {};
            const medStage = [];
            for (i = 0; i < medCtr; i++) {
                med[i] = await supplychain.methods.MedicineStock(i + 1).call();
                medStage[i] = await supplychain.methods.showStage(i + 1).call();
            }
            setMED(med);
            setMedStage(medStage);
            setloader(false);
        }
        else {
            window.alert('The smart contract is not deployed to current network')
        }
    }
    if (loader) {
        return (
            <div className="spinner-button">
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
        )

    }

    const handlerChangeNameMED = (event) => {
        setMedName(event.target.value);
    }
    const handlerChangeDesMED = (event) => {
        setMedDes(event.target.value);
    }
    const handlerChangeComs = (event) => {
        setMedComs(event.target.value);
    }
    const handlerChangeQuant = (event) => {
        setMedQuant(event.target.value);
    }
    const handlerSubmitMED = async (event) => {
        event.preventDefault();
        try {
            var reciept = await SupplyChain.methods.addMedicine(MedName, MedDes,MedComs, MedQuant).send({ from: currentaccount });
            console.log(reciept);
            if (reciept) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }
    return (
        <div>
            <form onSubmit={handlerSubmitMED} className="m-20">
                <input className="form-control-sm m-r-15" type="text" onChange={handlerChangeNameMED} placeholder="Medicine Name" required />
                <input className="form-control-sm m-r-15" type="text" onChange={handlerChangeDesMED} placeholder="Medicine Description" required />
                <input className="form-control-sm m-r-15" type="text" onChange={handlerChangeComs} placeholder="Medicine Composition" required />
                <input className="form-control-sm m-r-15" type="text" onChange={handlerChangeQuant} placeholder="Medicine Quantity" required />
                <button className="btn btn-outline-success btn-sm" onSubmit={handlerSubmitMED}>Add Order</button>
            </form>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th style={{width:"10%"}}>ID</th>
                        <th style={{width:"10%"}}>Name</th>
                        <th style={{width:"10%"}}>Description</th>
                        <th style={{width:"10%"}}>Composition</th>
                        <th style={{width:"10%"}}>Quantity</th>
                        <th style={{width:"10%"}}>Current Stage</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(MED).map(function ([key, value]) { 
                        return (
                            <tr key={key}>
                             
                                <td style={{width:"10%"}}>{MED[key]?.id}</td>
                                <td style={{width:"10%"}}>{MED[key]?.name?.length > 40 ? MED[key]?.name?.substring(1, 40)+"..."  : MED[key]?.name}</td>
                                <td style={{width:"10%"}}>{MED[key]?.description?.length > 40 ? MED[key]?.description?.substring(1, 40)+"..."  : MED[key]?.description}</td>
                                <td style={{width:"10%"}}>{MED[key]?.compositions?.length > 40 ? MED[key]?.compositions?.substring(1, 40)+"..."  : MED[key]?.compositions}</td>
                                <td style={{width:"10%"}}>{MED[key]?.quantity}</td>
                                <td style={{width:"10%"}}>{MedStage[key]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default OrderMedicine;
 