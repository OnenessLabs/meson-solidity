/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMesonSwapEvents,
  IMesonSwapEventsInterface,
} from "../IMesonSwapEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapBonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapPosted",
    type: "event",
  },
];

export class IMesonSwapEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IMesonSwapEventsInterface {
    return new utils.Interface(_abi) as IMesonSwapEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMesonSwapEvents {
    return new Contract(address, _abi, signerOrProvider) as IMesonSwapEvents;
  }
}
