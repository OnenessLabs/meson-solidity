/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonSwap, MesonSwapInterface } from "../MesonSwap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapPosted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapRequested",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "addressOfIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "providerIndex",
        type: "uint32",
      },
    ],
    name: "bondSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
    ],
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "recipientHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "depositToPool",
        type: "bool",
      },
    ],
    name: "executeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCoinType",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "indexOfAddress",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "providerIndex",
        type: "uint32",
      },
    ],
    name: "postSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
    ],
    name: "registerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
    ],
    name: "requestSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611be1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80638e93243b116100765780639d327f451161005b5780639d327f4514610192578063e52d0404146101a5578063f7888aec1461020057600080fd5b80638e93243b1461015157806394149c1a1461016457600080fd5b80635dc013e3116100a75780635dc013e3146101185780637c41e82a1461012b5780638a7e45521461013e57600080fd5b80631aba3a55146100c35780634c5c812314610103575b600080fd5b6100e96100d13660046117b9565b60066020526000908152604090205463ffffffff1681565b60405163ffffffff90911681526020015b60405180910390f35b6101166101113660046118ff565b610234565b005b6101166101263660046118ff565b6103c1565b6101166101393660046118dc565b61058e565b61011661014c3660046119ca565b610738565b61011661015f366004611a4f565b610981565b6040517f8000003c0000000000000000000000000000000000000000000000000000000081526020016100fa565b6101166101a0366004611941565b610ba6565b6101db6101b3366004611a4f565b60076020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100fa565b61021361020e3660046117db565b610e1f565b6040516fffffffffffffffffffffffffffffffff90911681526020016100fa565b60006102438383600054610e88565b60008181526008602052604090205490915073ffffffffffffffffffffffffffffffffffffffff16156102d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f7377617020636f6e666c6963740000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000806102e48585610efd565b9150915060006102f13390565b60408051808201825273ffffffffffffffffffffffffffffffffffffffff8084168252600060208084018281528a8352600890915293902091518254935163ffffffff1674010000000000000000000000000000000000000000027fffffffffffffffff000000000000000000000000000000000000000000000000909416911617919091179055905061038683828461115e565b6040518481527fa67aeefca6ffac499b56c6e714636f7ade5d82fde82aef50665ad3e88be5cb4b9060200160405180910390a1505050505050565b60006103d08383600054610e88565b60008181526008602052604090205490915073ffffffffffffffffffffffffffffffffffffffff168061045f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f6e6f20737761700000000000000000000000000000000000000000000000000060448201526064016102ce565b600080600061046e8787611223565b9250925092504265ffffffffffff168165ffffffffffff16106104ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f73776170206973206c6f636b656400000000000000000000000000000000000060448201526064016102ce565b600083815260036020908152604080832054888452600890925290912080547fffffffffffffffff00000000000000000000000000000000000000000000000016905573ffffffffffffffffffffffffffffffffffffffff166105518186856112d9565b6040518681527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200160405180910390a15050505050505050565b60008281526008602052604090205473ffffffffffffffffffffffffffffffffffffffff16610619576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f6e6f20737761700000000000000000000000000000000000000000000000000060448201526064016102ce565b60008281526008602052604090205474010000000000000000000000000000000000000000900463ffffffff16156106ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f7377617020626f6e64656420746f20616e6f746865722070726f76696465720060448201526064016102ce565b60008281526008602090815260409182902080547fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000063ffffffff86160217905590518381527f9dadb60bc000bbd7b49430723ed56b6aa35909dcab91ec2cb17ed5da7ae4ffd6910160405180910390a15050565b60006107478888600054610e88565b60008181526008602052604090205490915073ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900463ffffffff16806107f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f73776170206e6f7420666f756e64206f72206e6f7420626f6e6465640000000060448201526064016102ce565b6108078389600054858b8b8b61148d565b6000806108148c8c611223565b50600087815260086020526040902080547fffffffffffffffff000000000000000000000000000000000000000000000000169055909250905085156108f357600082815260056020908152604080832063ffffffff87168452909152902054610890906fffffffffffffffffffffffffffffffff16826116d4565b600083815260056020908152604080832063ffffffff88168452909152902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055610940565b63ffffffff831660009081526007602090815260408083205485845260039092529091205473ffffffffffffffffffffffffffffffffffffffff918216911661093d8183856112d9565b50505b6040518581527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d20629060200160405180910390a1505050505050505050505050565b3363ffffffff82166109ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f43616e6e6f742075736520696e6465782030000000000000000000000000000060448201526064016102ce565b63ffffffff821660009081526007602052604090205473ffffffffffffffffffffffffffffffffffffffff1615610a82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e64657820616c72656164792072656769737465726564000000000000000060448201526064016102ce565b73ffffffffffffffffffffffffffffffffffffffff811660009081526006602052604090205463ffffffff1615610b15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4164647265737320616c7265616479207265676973746572656400000000000060448201526064016102ce565b63ffffffff9091166000818152600760209081526040808320805473ffffffffffffffffffffffffffffffffffffffff9096167fffffffffffffffffffffffff000000000000000000000000000000000000000090961686179055938252600690529190912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000169091179055565b6000610bb58888600054610e88565b60008181526008602052604090205490915073ffffffffffffffffffffffffffffffffffffffff1615610c44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f7377617020636f6e666c6963740000000000000000000000000000000000000060448201526064016102ce565b60408051600081526020810180835283905260ff851691810191909152606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610c97573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610d35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207369676e617475726500000000000000000000000000000060448201526064016102ce565b600080610d428a8a610efd565b60408051808201825273ffffffffffffffffffffffffffffffffffffffff808d16825263ffffffff808a16602080850191825260008b815260089091529490942092518354945190911674010000000000000000000000000000000000000000027fffffffffffffffff0000000000000000000000000000000000000000000000009094169116179190911790559092509050610de082898361115e565b6040518381527fd7a1fd45274eb446b18cdf83061f521e75114fa2c53ecb42bd853bba72097bab9060200160405180910390a150505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff808316600090815260046020908152604080832054938516835260068252808320549383526005825280832063ffffffff909416835292905220546fffffffffffffffffffffffffffffffff165b92915050565b6000808484604051610e9b929190611a6a565b6040519081900381207f1901000000000000000000000000000000000000000000000000000000000000602083015260228201859052604282018190529150606201604051602081830303815290604052805190602001209150509392505050565b6000806000806000610f0f8787611223565b600083815260036020526040902054929550909350915073ffffffffffffffffffffffffffffffffffffffff1680610fa3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f756e737570706f7274656420746f6b656e00000000000000000000000000000060448201526064016102ce565b6000836fffffffffffffffffffffffffffffffff1611611045576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f7377617020616d6f756e74206d7573742062652067726561746572207468616e60448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016102ce565b42611052610e1082611ae9565b65ffffffffffff168365ffffffffffff16116110ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f65787069726520747320746f6f206561726c790000000000000000000000000060448201526064016102ce565b6110d6611c2082611ae9565b65ffffffffffff168365ffffffffffff161061114e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f65787069726520747320746f6f206c617465000000000000000000000000000060448201526064016102ce565b50945090925050505b9250929050565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301523060248301526fffffffffffffffffffffffffffffffff831660448301528416906323b872dd90606401602060405180830381600087803b1580156111e557600080fd5b505af11580156111f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121d919061180e565b50505050565b6000808080808080611237888a018a61182b565b50509450509350935093506040518060a0016040528060638152602001611b47606391398051906020012084146112ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f496e76616c69642073776170207265717565737420747970656861736800000060448201526064016102ce565b91955093509150509250925092565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526fffffffffffffffffffffffffffffffff8516604480840191909152845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052915160009283928716916113b49190611a7a565b6000604051808303816000865af19150503d80600081146113f1576040519150601f19603f3d011682016040523d82523d6000602084013e6113f6565b606091505b5091509150818015611420575080511580611420575080806020019051810190611420919061180e565b611486576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f7472616e73666572206661696c6564000000000000000000000000000000000060448201526064016102ce565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff841661150a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016102ce565b60006040518060600160405280602b8152602001611baa602b913980516020918201206040805192830191909152810189905260608101889052608001604051602081830303815290604052805190602001209050600086826040516020016115a59291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa15801561162b573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146116c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207369676e617475726500000000000000000000000000000060448201526064016102ce565b505050505050505050565b60006fffffffffffffffffffffffffffffffff83166116f38385611ab5565b9150816fffffffffffffffffffffffffffffffff161015610e8257600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461173757600080fd5b919050565b60008083601f84011261174e57600080fd5b50813567ffffffffffffffff81111561176657600080fd5b60208301915083602082850101111561115757600080fd5b803563ffffffff8116811461173757600080fd5b803565ffffffffffff8116811461173757600080fd5b803560ff8116811461173757600080fd5b6000602082840312156117cb57600080fd5b6117d482611713565b9392505050565b600080604083850312156117ee57600080fd5b6117f783611713565b915061180560208401611713565b90509250929050565b60006020828403121561182057600080fd5b81516117d481611b35565b600080600080600080600060e0888a03121561184657600080fd5b873596506020880135955060408801356fffffffffffffffffffffffffffffffff8116811461187457600080fd5b945061188260608901611792565b935061189060808901611792565b925060a08801357fffffffff00000000000000000000000000000000000000000000000000000000811681146118c557600080fd5b8092505060c0880135905092959891949750929550565b600080604083850312156118ef57600080fd5b823591506118056020840161177e565b6000806020838503121561191257600080fd5b823567ffffffffffffffff81111561192957600080fd5b6119358582860161173c565b90969095509350505050565b600080600080600080600060c0888a03121561195c57600080fd5b873567ffffffffffffffff81111561197357600080fd5b61197f8a828b0161173c565b9098509650611992905060208901611713565b945060408801359350606088013592506119ae608089016117a8565b91506119bc60a0890161177e565b905092959891949750929550565b600080600080600080600060c0888a0312156119e557600080fd5b873567ffffffffffffffff8111156119fc57600080fd5b611a088a828b0161173c565b909850965050602088013594506040880135935060608801359250611a2f608089016117a8565b915060a0880135611a3f81611b35565b8091505092959891949750929550565b600060208284031215611a6157600080fd5b6117d48261177e565b8183823760009101908152919050565b6000825160005b81811015611a9b5760208186018101518583015201611a81565b81811115611aaa576000828501525b509190910192915050565b60006fffffffffffffffffffffffffffffffff808316818516808303821115611ae057611ae0611b06565b01949350505050565b600065ffffffffffff808316818516808303821115611ae057611ae05b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8015158114611b4357600080fd5b5056fe537761705265717565737428627974657320696e546f6b656e2c75696e7431323820616d6f756e742c75696e743438206665652c75696e7434382065787069726554732c627974657334206f7574436861696e2c6279746573206f7574546f6b656e295377617052656c656173652862797465733332207377617049642c627974657320726563697069656e7429a164736f6c6343000806000a";

type MesonSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonSwap__factory extends ContractFactory {
  constructor(...args: MesonSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonSwap> {
    return super.deploy(overrides || {}) as Promise<MesonSwap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonSwap {
    return super.attach(address) as MesonSwap;
  }
  connect(signer: Signer): MesonSwap__factory {
    return super.connect(signer) as MesonSwap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonSwapInterface {
    return new utils.Interface(_abi) as MesonSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonSwap {
    return new Contract(address, _abi, signerOrProvider) as MesonSwap;
  }
}
