// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

/// @title MesonPools Interface
interface IMesonPoolsEvents {
  /// @notice Event when an LP pool is registered.
  /// Emit at the end of `depositAndRegister()` calls.
  /// @param poolIndex Pool index
  /// @param owner Pool owner
  event PoolRegistered(uint40 indexed poolIndex, address owner);

  /// @notice Event when fund was deposited to an LP pool.
  /// Emit at the end of `depositAndRegister()` and `deposit()` calls.
  /// @param poolTokenIndex Concatenation of pool index & token index
  /// @param amount The amount of tokens to be added to the pool
  event PoolDeposited(uint48 indexed poolTokenIndex, uint256 amount);

  /// @notice Event when fund was withdrawn from an LP pool.
  /// Emit at the end of `withdraw()` calls.
  /// @param poolTokenIndex Concatenation of pool index & token index
  /// @param amount The amount of tokens to be removed from the pool
  event PoolWithdrawn(uint48 indexed poolTokenIndex, uint256 amount);

  /// @notice Event when an authorized address was added for an LP pool.
  /// Emit at the end of `depositAndRegister()` calls.
  /// @param poolIndex Pool index
  /// @param addr Authorized address to be added
  event PoolAuthorizedAddrAdded(uint40 indexed poolIndex, address addr);

  /// @notice Event when an authorized address was removed for an LP pool.
  /// Emit at the end of `depositAndRegister()` calls.
  /// @param poolIndex Pool index
  /// @param addr Authorized address to be removed
  event PoolAuthorizedAddrRemoved(uint40 indexed poolIndex, address addr);

  /// @notice Event when the ownership of a pool was transferred.
  /// Emit at the end of `transferPoolOwner()` calls.
  /// @param poolIndex Pool index
  /// @param prevOwner Previous owner of the pool
  /// @param newOwner New owner of the pool
  event PoolOwnerTransferred(uint40 indexed poolIndex, address prevOwner, address newOwner);

  /// @notice Event when a swap was locked.
  /// Emit at the end of `lock()` and `lockSwap()` calls.
  /// @param encodedSwap Encoded swap
  event SwapLocked(uint256 indexed encodedSwap);

  /// @notice Event when a swap was unlocked.
  /// Emit at the end of `unlock()` calls.
  /// @param encodedSwap Encoded swap
  event SwapUnlocked(uint256 indexed encodedSwap);

  /// @notice Event when a swap was released.
  /// Emit at the end of `release()`, `directRelease()` calls.
  /// @param encodedSwap Encoded swap
  event SwapReleased(uint256 indexed encodedSwap);
}
