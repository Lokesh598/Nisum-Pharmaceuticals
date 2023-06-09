<h1 align = "center">
   Nisum-Pharmaceuticals

   A complete blockchain based solution for pharmaceuticals Supply-Chain-Management-Decenterlized-Application.
</h1>

### Landing Page

![image](https://github.com/Lokesh598/Nisum-Pharmaceuticals/assets/63910828/515a8091-3871-4328-9f26-08e8f3259208)

### Register participants

![image](https://github.com/Lokesh598/Nisum-Pharmaceuticals/assets/63910828/c5f1169b-d370-43b5-af64-eae34ae5edf3)

### Add Raw Material Supplier

![image](https://github.com/Lokesh598/Nisum-Pharmaceuticals/assets/63910828/9d8462a5-c440-4c9f-a8db-f709120f9664)

### Order Medicine

![image](https://github.com/Lokesh598/Nisum-Pharmaceuticals/assets/63910828/0c78a4b3-3bc4-44e8-942c-7b064a200ffd)

### Control supply chain

![image](https://github.com/Lokesh598/Nisum-Pharmaceuticals/assets/63910828/95f65e9e-a6ef-43f8-93ed-3280a3ced597)

### Track Medicine

![image](https://github.com/Lokesh598/Nisum-Pharmaceuticals/assets/63910828/69b75f4f-e9c6-4112-bbfb-b1714c243fbd)

### Medicine Page

![image](https://github.com/Lokesh598/Nisum-Pharmaceuticals/assets/63910828/35fd8c45-ff11-4811-9480-0e82846aa030)



<h1 align="center">
  <br>
  <a><img src="https://www.mdpi.com/logistics/logistics-03-00005/article_deploy/html/images/logistics-03-00005-g001.png" width="200"></a>
</h1>

## Description

Supply chain is always hard to manage and requires a lot of admistrative machinery. However, when managed with smart contracts using blockchain, a lot of the paperwork is reduced.
Also it leads to an increase in the transparency and helps to build an efficient Root of Trust. Supply-chain-dapp is such an implementation of a supply chain management system which uses blockchain to ensure a transparent and secure transfer of product from the manufacturer to the customer via the online e-commerce websites.

## Architecture

The smart contract is being written with Solidity which is then compiled, migrated and deployed using Truffle.js on the Ethereum Vertual Machine (Ganache) blockchain network.The frontend uses Web3.js to communicate with the smart contract and ganache ethereum blockchain network and Meta Musk Wallet is connect to ganache Network to do Transaction between each component in Supply .

## Smart Contract Working Flow

![https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/Supply%20Chain%20Design%20(1).png?token=GHSAT0AAAAAAB52SPAT5YHI3AALNPFXL27AY7OU3IQ](https://raw.githubusercontent.com/faizack619/Supply-Chain-Gode-Blockchain/master/client/public/Supply%20Chain%20Design%20(1).png?token=GHSAT0AAAAAAB52SPAT5YHI3AALNPFXL27AY7OU3IQ)

This is a SupplyChain smart contract written in Solidity. The contract models the various roles and stages involved in the supply chain of a pharmaceutical product.

The contract owner is the person who deploys the contract and is the only one who can authorize various roles like retailer, manufacturer, etc.

There are several roles involved in the supply chain of the pharmaceutical product. These include the raw material supplier, manufacturer, distributor, and retailer.

The smart contract stores information about the medicine, such as its name, description, and current stage in the supply chain. There is also a function to show the current stage of a medicine, which can be used by client applications.

The smart contract also stores information about the various players in the supply chain, such as their name, address, and place of operation.

The addRMS(), addManufacturer(), addDistributor(), and addRetailer() functions can be used by the contract owner to add new players to the supply chain.

Overall, this smart contract provides a way to track the various stages of a pharmaceutical product in the supply chain, ensuring transparency and accountability.


## 🔧 Setting up Local Development

### Step1.

## Installation and Setup

- **VSCODE** : VSCode can be downloaded from https://code.visualstudio.com/
- **Node.js** : Download the latest version of Node.js from https://nodejs.org/ and after installation check Version using terimal: node -v .
- **Git** : Download the latest version of Git from the official website at https://git-scm.com/downloads and check Version using terimal: git --version.

- **Ganache** : Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.Download the latest version of Ganache from the official website at https://www.trufflesuite.com/ganache.
- **Truffle** : Truffle is a development environment, testing framework and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier.
- **MetaMask** : can be installed as a browser extension from the Chrome Web Store or Firefox Add-ons store.

### Step2.

## Create,Compile & Deploy Smart Contract.

- Open VScode and open VScode Terimal by Ctrl + ' .
- **Clone Project** Type the following command and press Enter : git clone : ` https://github.com/Lokesh598/Nisum-Pharmaceuticals
- **Install truffle** : Type the following command and press Enter: `npm install -g truffle`
- **Install dependencies** : Type the following command and press Enter: `npm i`
- **File structure for DApp** :

  **contracts**: This folder contains the Solidity smart contracts for the DApp. The Migrations.sol contract is automatically created by Truffle and is used for managing migrations.

  **migrations**: This folder contains the JavaScript migration files used to deploy the smart contracts to the blockchain network.

  **test**: This folder contains the JavaScript test files used to test the smart contracts.

  **truffle-config.js**: This file contains the configuration for the Truffle project, including the blockchain network to be used and any necessary settings.

  **package.jso**n: This file contains information about the dependencies and scripts used in the project.

  **package-lock.json**: This file is generated automatically and contains the exact version of each dependency used in the project.

  **Client**s: This Folder contains the client-side code, typically HTML, CSS, and JavaScript, can be organized into a client folder.

- **Compile the smart contract** : In the terminal, use the following command to compile the smart contract: `truffle compile`
- **Deploy the smart contract** :

  - After Compile We Need To Deploy Your Smart Contract on Blockchain.In Our Case We are Using Ganache Which is personal blockchain for Ethereum development, used to test and develop Smart Contracts.

  - Open Ganache and create new WorkSpace.Copy Rpc Server Address.

  - ![https://miro.medium.com/max/1248/1*4rzNT0muOXelP22Ky9178g.png](https://miro.medium.com/max/1248/1*4rzNT0muOXelP22Ky9178g.png)

  - The RPC server is used to allow applications to communicate with the Ethereum blockchain and execute smart contract transactions, query the state of the blockchain, and interact with the Ethereum network.

  - Now to add Rcp address in our truffle-config.js and the replace host address and port address with Our Ganache Rcp.

  - ![https://developers.rsk.co/assets/img/tutorials/truffle-test/image-04.png](https://developers.rsk.co/assets/img/tutorials/truffle-test/image-04.png)

  - After Changing RCP address.Open terminal and run this cmd : `truffle migrate`.
  - This Command Will deploye Smart Contract to Blockchain.

### Step 3.

## Run DAPP.

- Open a second terminal and enter the client folder

  - `cd client`

- Install all packages in the package.json file
  - `npm i`
- Install Web3 in the package.json file

  - `npm install -save web3`

- Run this Command :

  - `npm`

- Run the app

  - `npm start`

- The app gets hosted by default at port 3000.

### Step 4.

## Connect Meta Musk with Ganache.

![https://media.licdn.com/dms/image/C4D12AQHMatPDpLjwkA/article-cover_image-shrink_720_1280/0/1547586411238?e=2147483647&v=beta&t=UDYOS05BSkdrYoGOR5LW7v2uHz1Sca5uNzzWLrQG1nk](https://media.licdn.com/dms/image/C4D12AQHMatPDpLjwkA/article-cover_image-shrink_720_1280/0/1547586411238?e=2147483647&v=beta&t=UDYOS05BSkdrYoGOR5LW7v2uHz1Sca5uNzzWLrQG1nk)

1. Start Ganache: Start the Ganache application and make note of the RPC server URL and port number.

1. Connect MetaMask: Open MetaMask in your browser and click on the network dropdown in the top-right corner.
   ![https://metamask.zendesk.com/hc/article_attachments/10080831633947](https://metamask.zendesk.com/hc/article_attachments/10080831633947)![https://kimsereylam.com/assets/posts/2022-02-25-setup-local-development-blockchain-with-ganache/ganache_network.png](https://kimsereylam.com/assets/posts/2022-02-25-setup-local-development-blockchain-with-ganache/ganache_network.png)
   Select "Custom RPC" and enter the RPC server URL and port number for your Ganache instance. Click "Save".

1. Import an account: In Ganache, click on the "Accounts" tab and select the first account listed. Click on the "Copy" button next to the "Private Key" field copy the private key.
   ![https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSc_d4naUQwI8qo8ClC1NXa4aJA7blvrgn4Xq1looUOiWY3wTGd5x8g5fgCrMzyrOzQ8&usqp=CAUto](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSc_d4naUQwI8qo8ClC1NXa4aJA7blvrgn4Xq1looUOiWY3wTGd5x8g5fgCrMzyrOzQ8&usqp=CAU)
1. In MetaMask, click on the three dots in the top-right corner, select "Import Account", and paste the private key into the private key field. Click "Import".

   ![https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs76Q1oyMK717kRZ8FMC_i2VCstu8H2yZFqlfgccSsalxBXWm2PBwzS-peIFv4DqGos9g&usqp=CAU](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs76Q1oyMK717kRZ8FMC_i2VCstu8H2yZFqlfgccSsalxBXWm2PBwzS-peIFv4DqGos9g&usqp=CAU)

1. Add All participate(Raw Material,Supplier,Manufacture,Retail). by following above Step
