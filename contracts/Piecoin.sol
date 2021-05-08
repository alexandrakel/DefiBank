pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PIECOIN is ERC20 {
    // variables 
    address public minter;
    
    //events
    event MinterChanged (address indexed from, address to);

    constructor(uint256 initialSupply) ERC20("PIECOIN", "PYI") {
        minter = msg.sender;

        initialSupply = initialSupply * (10 ** uint256(decimals()));
        _mint(minter, initialSupply);
    }
    
    //Add pass minter role function
    function passMinterRole(address kBank) public returns (bool) {
        require (msg.sender == minter, 'Error, only owner can pass minter role');
        minter = kBank;
        
        emit MinterChanged(msg.sender, kBank);
        return true;
    }

    function mint(address account, uint amount) public {
        //check if msg.sender have minter role
        require (msg.sender == minter, 'Error, msg.sender does not have a minter role');
        
		_mint(account, amount);
	}
}