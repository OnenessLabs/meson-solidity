/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MesonStatesTestInterface extends utils.Interface {
  functions: {
    "addressOfIndex(uint40)": FunctionFragment;
    "balanceOf(address,address)": FunctionFragment;
    "checkReleaseSignature(bytes32,address,address,bytes32,bytes32,uint8)": FunctionFragment;
    "checkRequestSignature(bytes32,address,bytes32,bytes32,uint8)": FunctionFragment;
    "decodeSwap(uint256)": FunctionFragment;
    "encodeSwap(uint128,uint40,uint40,bytes4,uint8,uint8)": FunctionFragment;
    "getCoinType()": FunctionFragment;
    "getSwapId(uint256)": FunctionFragment;
    "indexOfAddress(address)": FunctionFragment;
    "indexOfToken(address)": FunctionFragment;
    "supportedTokens()": FunctionFragment;
    "tokenForIndex(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressOfIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkReleaseSignature",
    values: [BytesLike, string, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkRequestSignature",
    values: [BytesLike, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeSwap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeSwap",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCoinType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "indexOfAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "indexOfToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenForIndex",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressOfIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkReleaseSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkRequestSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decodeSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encodeSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCoinType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSwapId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "indexOfAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenForIndex",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MesonStatesTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MesonStatesTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addressOfIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    balanceOf(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    checkReleaseSignature(
      swapId: BytesLike,
      recipient: string,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkRequestSignature(
      swapId: BytesLike,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    decodeSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number] & {
        amount: BigNumber;
        expireTs: number;
        inTokenIndex: number;
        outTokenIndex: number;
      }
    >;

    encodeSwap(
      amount: BigNumberish,
      fee: BigNumberish,
      expireTs: BigNumberish,
      outChain: BytesLike,
      outToken: BigNumberish,
      inToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCoinType(overrides?: CallOverrides): Promise<[string]>;

    getSwapId(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    indexOfAddress(arg0: string, overrides?: CallOverrides): Promise<[number]>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<[number]>;

    supportedTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addressOfIndex(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  balanceOf(
    token: string,
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkReleaseSignature(
    swapId: BytesLike,
    recipient: string,
    signer: string,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkRequestSignature(
    swapId: BytesLike,
    signer: string,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  decodeSwap(
    encodedSwap: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, number] & {
      amount: BigNumber;
      expireTs: number;
      inTokenIndex: number;
      outTokenIndex: number;
    }
  >;

  encodeSwap(
    amount: BigNumberish,
    fee: BigNumberish,
    expireTs: BigNumberish,
    outChain: BytesLike,
    outToken: BigNumberish,
    inToken: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getCoinType(overrides?: CallOverrides): Promise<string>;

  getSwapId(
    encodedSwap: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  indexOfAddress(arg0: string, overrides?: CallOverrides): Promise<number>;

  indexOfToken(token: string, overrides?: CallOverrides): Promise<number>;

  supportedTokens(overrides?: CallOverrides): Promise<string[]>;

  tokenForIndex(
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addressOfIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    balanceOf(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkReleaseSignature(
      swapId: BytesLike,
      recipient: string,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkRequestSignature(
      swapId: BytesLike,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decodeSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number] & {
        amount: BigNumber;
        expireTs: number;
        inTokenIndex: number;
        outTokenIndex: number;
      }
    >;

    encodeSwap(
      amount: BigNumberish,
      fee: BigNumberish,
      expireTs: BigNumberish,
      outChain: BytesLike,
      outToken: BigNumberish,
      inToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getCoinType(overrides?: CallOverrides): Promise<string>;

    getSwapId(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    indexOfAddress(arg0: string, overrides?: CallOverrides): Promise<number>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<number>;

    supportedTokens(overrides?: CallOverrides): Promise<string[]>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addressOfIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkReleaseSignature(
      swapId: BytesLike,
      recipient: string,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkRequestSignature(
      swapId: BytesLike,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decodeSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    encodeSwap(
      amount: BigNumberish,
      fee: BigNumberish,
      expireTs: BigNumberish,
      outChain: BytesLike,
      outToken: BigNumberish,
      inToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCoinType(overrides?: CallOverrides): Promise<BigNumber>;

    getSwapId(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    indexOfAddress(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    supportedTokens(overrides?: CallOverrides): Promise<BigNumber>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressOfIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkReleaseSignature(
      swapId: BytesLike,
      recipient: string,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkRequestSignature(
      swapId: BytesLike,
      signer: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decodeSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encodeSwap(
      amount: BigNumberish,
      fee: BigNumberish,
      expireTs: BigNumberish,
      outChain: BytesLike,
      outToken: BigNumberish,
      inToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCoinType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSwapId(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    indexOfAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    indexOfToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportedTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
