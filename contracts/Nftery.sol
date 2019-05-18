pragma solidity ^0.5.0;

import "./Simple721.sol";

contract Nftery {
  event Minted(bytes32 productId, address nft);

  mapping(bytes32 => address) tokens;

  function mint(bytes32 productId) public {
    require(tokens[productId] == address(0), "product has not already been minted");
    Simple721 newAsset = new Simple721();
    tokens[productId] = address(newAsset);

    emit Minted(productId, address(newAsset));
  }
}