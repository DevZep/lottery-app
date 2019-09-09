import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

window.addEventListener('load', async () => {
    if (window.ethereum) {
        try {
            // Request account access if needed
            await window.ethereum.enable();
        } catch (error) {
            // User denied account access...
            console.log("Why you deny?")
        }
    }
})

export default web3;