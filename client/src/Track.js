import React, { useState, useEffect } from 'react'
import Web3 from "web3";
import SupplyChainABI from "./artifacts/SupplyChain.json"
import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Track() {
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])
    const [showMain, setShowMain] = useState(true);
    const [selectedRed, setSelectedRec] = useState({});
    const [loader, setloader] = useState(true);
    const [SupplyChain, setSupplyChain] = useState();
    const [MED, setMED] = useState();
    const [MedStage, setMedStage] = useState();
    const [ID, setID] = useState();
    const [RMS, setRMS] = useState();
    const [MAN, setMAN] = useState();
    const [DIS, setDIS] = useState();
    const [RET, setRET] = useState();

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
                med[i + 1] = await supplychain.methods.MedicineStock(i + 1).call();
                medStage[i + 1] = await supplychain.methods.showStage(i + 1).call();
            }
            setMED(med);
            setMedStage(medStage);
            const rmsCtr = await supplychain.methods.rmsCtr().call();
            const rms = {};
            for (i = 0; i < rmsCtr; i++) {
                rms[i + 1] = await supplychain.methods.RMS(i + 1).call();
            }
            setRMS(rms);
            const manCtr = await supplychain.methods.manCtr().call();
            const man = {};
            for (i = 0; i < manCtr; i++) {
                man[i + 1] = await supplychain.methods.MAN(i + 1).call();
            }
            setMAN(man);
            const disCtr = await supplychain.methods.disCtr().call();
            const dis = {};
            for (i = 0; i < disCtr; i++) {
                dis[i + 1] = await supplychain.methods.DIS(i + 1).call();
            }
            setDIS(dis);
            const retCtr = await supplychain.methods.retCtr().call();
            const ret = {};
            for (i = 0; i < retCtr; i++) {
                ret[i + 1] = await supplychain.methods.RET(i + 1).call();
            }
            setRET(ret);
            setloader(false);
        } else {
            window.alert('The smart contract is not deployed to current network')
        }
    }

    if (loader) return (
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

    const trackDetails = async (event, ID, obj) => {
        event.preventDefault();
        setID(ID)
        setSelectedRec(obj)
        setShowMain(false)
        var ctr = await SupplyChain.methods.medicineCtr().call();
        if (!((ID > 0) && (ID <= ctr))) alert("Invalid Medicine ID!!!");
    }

    return (
        <>
            {showMain ? <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Medicine ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Current Processing Stage</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(MED).map(function (key) {
                        return (
                            <tr key={key}>
                                <td>{MED[key].id}</td>
                                <td>{MED[key].name}</td>
                                <td>{MED[key].description}</td>
                                <td>{MedStage[key]}</td>
                                <td> <button className="btn btn-outline-success btn-sm" onClick={(event) => trackDetails(event, MED[key]?.id, MED[key])}>Track Order</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table> :
                <> <Breadcrumb>
                    <Breadcrumb.Item onClick={() => setShowMain(true)}>List</Breadcrumb.Item>
                    <Breadcrumb.Item active>{selectedRed?.name}</Breadcrumb.Item>
                    <Breadcrumb.Item active>{selectedRed?.id}</Breadcrumb.Item>
                    <Breadcrumb.Item active>Track Details</Breadcrumb.Item>
                </Breadcrumb>

                    {ID && <div className="container-xl">
                        <h3><b><u> Medicine: </u></b></h3>
                        <span><b> Medicine ID: </b>{MED[ID]?.id}</span>
                        <br />
                        <span><b> Name: </b> {MED[ID]?.name}</span>
                        <br />
                        <span><b> Description: </b>{MED[ID]?.description}</span>
                        <br />
                        <span><b> Current stage: </b>{MedStage[ID]}</span>
                    </div>}
                    <div className="progressbar-wrapper m-20">
                        <ul className="progressbar">
                            <li className={selectedRed?.stage >= "0" ? "active" : ""}>Medicine Order</li>
                            <li className={selectedRed?.stage >= "1" ? "active" : ""}>Raw Material Supplier</li>
                            <li className={selectedRed?.stage >= "2" ? "active" : ""}>Manufacturer</li>
                            <li className={selectedRed?.stage >= "3" ? "active" : ""}>Distributor</li>
                            <li className={selectedRed?.stage >= "4" ? "active" : ""}>Retailer</li>
                            <li className={selectedRed?.stage >= "5" ? "active" : ""}>Consumer</li>
                        </ul>
                    </div>
                </>}
        </>
    )
}

export default Track
