// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IERC20Minimal.sol";
import "../interfaces/IDepositWithBeneficiary.sol";

/// @notice A sample of 3rd-party dapp that interacts with meson
/// With `depositWithBeneficiary`, the meson contract will be able
/// to deposit cross-chain'ed stablecoins to the 3rd-party dapp contract
/// on behalf of the user. The user will receive the benefits corresponding
/// to this deposit.
contract ForwardTokenContract is IDepositWithBeneficiary {
  function depositWithBeneficiary(
    address token,
    uint256 amount,
    address beneficiary,
    uint64 data
  ) payable external override returns (bool) {
    if (token == address(0)) {
      // ETH
      // No need to take ETH since it is transferred in msg.value
    } else {
      // Stablecoins
      // Required. Take cross-chain'ed token to dapp's contract
      IERC20Minimal(token).transferFrom(msg.sender, address(this), amount);
    }

    // The dapp can do it's own logic with depositing tokens
    // e.g. exchange for other tokens, mint NFTs, etc.
    // Could use data to determine specific operations.


    // Send benefits to the user. Here as an example we just transfer
    // deposited tokens to the user.
    if (token == address(0)) {
      // ETH
      (bool success, ) = beneficiary.call{value: amount}("");
      require(success, "Transfer failed");
    } else {
      // Stablecoins
      IERC20Minimal(token).transfer(beneficiary, amount);
    }

    return true;
  }
}
