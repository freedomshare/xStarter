// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC777ReceiveSend.sol";
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract xStarterConvertibleNFT is Ownable, ERC721PresetMinterPauserAutoId, ERC777NoReceiveRecipient, ERC777NoSendSender {
    uint maxSupply;
    constructor(
        string memory _name,
        string  memory _symbol,
        string memory _baseNFTURI,
        uint256 _maxSupply
    )
        ERC721PresetMinterPauserAutoId(_name, _symbol, _baseNFTURI)
    {
       maxSupply = _maxSupply;
    }
    
    // edit 
    function _baseURI() internal pure override returns (string memory) {
        return "";
    }
    
    
}