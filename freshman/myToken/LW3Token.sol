// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

//Ropsten Contract Address - 0xb231422A7465cbBb9025a46B34012F6e33273a47
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract LW3Token is ERC20 {
    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, 10 * 10 ** 18);
    }
}