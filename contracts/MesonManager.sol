// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "./Swap/MesonSwap.sol";
import "./Pools/MesonPools.sol";

/// @title MesonManager
/// @notice The class to store data related to management permissions of Meson
contract MesonManager is MesonSwap, MesonPools {
  /// @notice The admin of meson contract
  /// The owner has the permission to upgrade meson contract. In future versions,
  /// the management authority of meson contract will be decentralized.
  address internal _owner;

  /// @notice The manager to authorized fee waived swaps
  /// Only the premium manager can authorize the execution to release for fee waived swaps.
  /// This address is managed by Meson team.
  address internal _premiumManager;

  /// @dev This empty reserved space is put in place to allow future versions to
  /// add new variables without shifting down storage in the inheritance chain.
  /// See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
  uint256[50] private __gap;

  event OwnerTransferred(address indexed prevOwner, address indexed newOwner);

  event PremiumManagerTransferred(address indexed prevPremiumManager, address indexed newPremiumManager);

  /// @notice The owner will also have the permission to add supported tokens
  function addSupportToken(address token, uint8 index) external onlyOwner {
    _addSupportToken(token, index);
  }

  /// @notice The owner will also have the permission to remove a supported tokens
  function removeSupportToken(uint8 index) external onlyOwner {
    _removeSupportToken(index);
  }

  /// @notice Add multiple tokens
  function addMultipleSupportedTokens(address[] memory tokens, uint8[] memory indexes) external onlyOwner {
    require(tokens.length == indexes.length, "Tokens and indexes should have the same length");
    for (uint8 i = 0; i < tokens.length; i++) {
      _addSupportToken(tokens[i], indexes[i]);
    }
  }

  function transferOwnership(address newOwner) public onlyOwner {
    _transferOwnership(newOwner);
  }

  function transferPremiumManager(address newPremiumManager) public {
    require(_isPremiumManager(), "Caller is not the premium manager");
    _transferPremiumManager(newPremiumManager);
  }

  function withdrawServiceFee(uint8 tokenIndex, uint256 amount, uint40 toPoolIndex) external onlyOwner {
    require(ownerOfPool[toPoolIndex] != address(0), "Pool index not registered");
    _balanceOfPoolToken[_poolTokenIndexFrom(tokenIndex, 0)] -= amount;
    _balanceOfPoolToken[_poolTokenIndexFrom(tokenIndex, toPoolIndex)] += amount;
  }

  modifier onlyOwner() {
    require(_owner == _msgSender(), "Caller is not the owner");
    _;
  }

  function _transferOwnership(address newOwner) internal {
    require(newOwner != address(0), "New owner cannot be zero address");
    address prevOwner = _owner;
    _owner = newOwner;
    emit OwnerTransferred(prevOwner, newOwner);
  }

  function _isPremiumManager() internal view override(MesonSwap, MesonPools) returns (bool) {
    return _premiumManager == _msgSender();
  }

  function _transferPremiumManager(address newPremiumManager) internal {
    require(newPremiumManager != address(0), "New premium manager be zero address");
    address prevPremiumManager = _premiumManager;
    _premiumManager = newPremiumManager;
    emit PremiumManagerTransferred(prevPremiumManager, newPremiumManager);
  }

  function directSwap(uint256 encodedSwap, address recipient, bytes32 r, bytes32 yParityAndS)
    external matchProtocolVersion(encodedSwap) verifyEncodedSwap(encodedSwap) forTargetChain(encodedSwap)
  {
    require(recipient != address(0), "Recipient cannot be zero address");

    bytes32 digest = keccak256(abi.encodePacked(encodedSwap, recipient));
    _checkSignature(digest, r, yParityAndS, _premiumManager);

    uint256 amount = _amountFrom(encodedSwap);
    uint8 inTokenIndex = _inTokenIndexFrom(encodedSwap);
    uint256 releaseAmount = amount - _feeForLp(encodedSwap);

    _balanceOfPoolToken[_poolTokenIndexFrom(inTokenIndex, 1)] += amount;
    _balanceOfPoolToken[_poolTokenIndexForOutToken(encodedSwap, 1)] -= releaseAmount;

    _unsafeDepositToken(inTokenIndex, _msgSender(), amount);
    _release(encodedSwap, _outTokenIndexFrom(encodedSwap), _msgSender(), recipient, releaseAmount);

    emit SwapReleased(encodedSwap);
  }
}
