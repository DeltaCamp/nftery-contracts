pragma solidity ^0.5.0;

import "openzeppelin-eth/contracts/token/ERC721/ERC721Full.sol";

contract Simple721 is ERC721Full {
  uint256 private lastTokenId;

  function mint(address to) public {
    lastTokenId = lastTokenId + 1;
    _mint(to, lastTokenId);
  }
}