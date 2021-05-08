async function main() {
    // deployer account
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // deployer native coin balance    
    const balance = await deployer.getBalance();
    console.log(`Account balance: ${balance.toString()}`);

    // deploys token
    const Bank = await ethers.getContractFactory('Bank');
    const bank = await Bank.deploy('0x464ab3Be28d81Fd91D0f193C47fAAcC66f236ADF');
    await bank.deployed();
    console.log("Bank address: ", bank.address);

    // display total supply
    const totalSupply = await piecoin.totalSupply();
    console.log(`Token total supply: ${totalSupply}`);

    // const data = {
    //     address: piecoin.address,
    //     abi: JSON.parse(token.interface.format('json'))
    // } 
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });