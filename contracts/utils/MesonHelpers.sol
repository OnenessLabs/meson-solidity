// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "../MesonConfig.sol";
import "../interfaces/IERC20Minimal.sol";

/// @title MesonHelpers
contract MesonHelpers is MesonConfig {
  bytes32 internal constant EIP712_DOMAIN_TYPEHASH =
    keccak256(bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"));

  bytes32 internal DOMAIN_SEPARATOR;

  bytes32 internal constant SWAP_REQUEST_TYPEHASH = keccak256(bytes("SwapRequest(uint256 encoded)"));

  //uint128 amount,uint40 fee,uint40 expireTs,uint8 inToken,bytes4 outChain,uint8 outToken

  bytes32 internal constant SWAP_RELEASE_TYPEHASH = keccak256(bytes("SwapRelease(bytes32 swapId,bytes recipient)"));

  bytes4 private constant ERC20_TRANSFER_SELECTOR = bytes4(keccak256(bytes("transfer(address,uint256)")));

  /// @notice Safe transfers tokens from msg.sender to a recipient
  /// for interacting with ERC20 tokens that do not consistently return true/false
  /// @param token The contract address of the token which will be transferred
  /// @param recipient The recipient of the transfer
  /// @param amount The value of the transfer
  function _safeTransfer(
    address token,
    address recipient,
    uint128 amount
  ) internal {
    (bool success, bytes memory data) = token.call(abi.encodeWithSelector(ERC20_TRANSFER_SELECTOR, recipient, uint256(amount)));
    require(success && (data.length == 0 || abi.decode(data, (bool))), "transfer failed");
  }

  /// @notice Execute the token transfer transaction
  function _unsafeDepositToken(
    address token,
    address sender,
    uint128 amount
  ) internal {
    IERC20Minimal(token).transferFrom(sender, address(this), uint256(amount));
  }

  function _getSwapId(uint256 encodedSwap, bytes32 domainHash) internal pure returns (bytes32) {
    bytes32 swapHash = keccak256(abi.encode(SWAP_REQUEST_TYPEHASH, encodedSwap));
    return keccak256(abi.encodePacked("\x19\x01", domainHash, swapHash));
  }

  function _checkReleaseSignature(
    bytes32 swapId,
    bytes32 recipientHash,
    bytes32 domainHash,
    address signer,
    bytes32 r,
    bytes32 s,
    uint8 v
  ) internal pure {
    require(signer != address(0), "signer cannot be empty address");
    bytes32 releaseHash = keccak256(abi.encode(SWAP_RELEASE_TYPEHASH, swapId, recipientHash));
    bytes32 digest = keccak256(abi.encodePacked("\x19\x01", domainHash, releaseHash));
    require(signer == ecrecover(digest, v, r, s), "invalid signature");
  }

  function getCoinType() external pure returns (bytes4) {
    return COIN_TYPE;
  }

  function _msgSender() internal view returns (address) {
    return msg.sender;
  }

  function _msgData() internal pure returns (bytes calldata) {
    return msg.data;
  }
}
