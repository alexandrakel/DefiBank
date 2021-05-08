async function main() {
    // deployer account
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // deployer native coin balance    
    const balance = await deployer.getBalance();
    console.log(`Account balance: ${balance.toString()}`);

    // deploys token
    const Piecoin = await ethers.getContractFactory('Piecoin');
    const piecoin = await Piecoin.deploy(999);
    await piecoin.deployed();
    console.log("Token address: ", piecoin.address);

    // console.log(`Token address: ${piecoin.address}`);

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