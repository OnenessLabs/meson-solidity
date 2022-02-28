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
        indexed: true,
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
        indexed: true,
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
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapPosted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
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
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
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
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "getPostedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getShortCoinType",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
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
        internalType: "uint40",
        name: "",
        type: "uint40",
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
    ],
    name: "indexOfToken",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "mesonFeeCollected",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
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
        internalType: "uint200",
        name: "postingValue",
        type: "uint200",
      },
    ],
    name: "postSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "supportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "tokenForIndex",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611760806100206000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80638302ce5a1161008c578063e16a567d11610066578063e16a567d14610277578063eba7fb77146102b0578063f7888aec146102dd578063ff378719146102f057600080fd5b80638302ce5a146101f4578063b002249d14610207578063b3df5b361461021c57600080fd5b806335eff30f116100bd57806335eff30f146101b957806354d6a2b7146101ce5780637c850187146101e157600080fd5b80631aba3a55146100e45780631e2a6075146101265780632335093c1461016e575b600080fd5b61010b6100f23660046113fc565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b61013961013436600461146e565b610329565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815293909216602084015215159082015260600161011d565b6101a761017c3660046113fc565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff909116815260200161011d565b6101cc6101c7366004611555565b6103bb565b005b6101cc6101dc36600461146e565b61057a565b6101cc6101ef366004611487565b610702565b6101cc6102023660046114e3565b61097e565b61020f610c8b565b60405161011d91906115e9565b61025261022a366004611578565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011d565b6102a2610285366004611593565b60281b65ff00000000001660009081526004602052604090205490565b60405190815260200161011d565b6040517e3c000000000000000000000000000000000000000000000000000000000000815260200161011d565b6102a26102eb36600461141e565b610dd8565b6102526102fe366004611593565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600081815260056020526040812054602881901c73ffffffffffffffffffffffffffffffffffffffff16919078ffffffffffffffffffffffffffffffffffffffffffffffffff1660018114908361038357600092506103b3565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b509193909250565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16806104375760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064015b60405180910390fd5b8064ffffffffff161561048c5760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f766964657200604482015260640161042e565b3360009081526002602052604090205464ffffffffff8381169116146104f45760405162461bcd60e51b815260206004820152601860248201527f43616e206f6e6c7920626f756e6420746f207369676e65720000000000000000604482015260640161042e565b60008381526005602052604080822080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff8616171790555184917f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc991a2505050565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16600181116105f45760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f7420657869737400000000000000000000000000604482015260640161042e565b42603083901c64ffffffffff161061064e5760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b6564000000000000000000000000604482015260640161042e565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff85168352908290529020546106d39073ffffffffffffffffffffffffffffffffffffffff90811690602884901c166106ce605886901c64ffffffffff1660a087901c611643565b610e68565b60405182907ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f90600090a25050565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16806107795760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f7420657869737400000000000000000000000000604482015260640161042e565b610785610e1042611643565b603088901c64ffffffffff1610156107d057600087815260056020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000169055610808565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b6108308787878787602887901c73ffffffffffffffffffffffffffffffffffffffff16610fbe565b600061083c8860281b90565b90506000605889901c64ffffffffff166108568a60a01c90565b6108609190611643565b905061086c8960081c90565b61ffff16603c1415801561088e57506108858960201c90565b61ffff16603c14155b156108e157647fffffffff60598a901c1680156108df5765ffffffffffff8316600090815260046020526040812080548392906108cc908490611643565b909155506108dc9050818361165b565b91505b505b83156109285764ffffffffff831665ffffffffffff83168117600090815260046020526040812080549285179284929061091c908490611643565b90915550610973915050565b60ff89166000908152602081815260408083205464ffffffffff871684526003909252909120546109739173ffffffffffffffffffffffffffffffffffffffff908116911683610e68565b505050505050505050565b84603c61098b8260081c90565b61ffff16146109dc5760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e000000000000000000604482015260640161042e565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615610a535760405162461bcd60e51b815260206004820152601360248201527f5377617020616c72656164792065786973747300000000000000000000000000604482015260640161042e565b6000610a5f8760a01c90565b905064174876e800811115610adc5760405162461bcd60e51b815260206004820152603760248201527f466f7220736563757269747920726561736f6e2c20616d6f756e742063616e6e60448201527f6f742062652067726561746572207468616e203130306b000000000000000000606482015260840161042e565b6000610af34264ffffffffff60308b901c1661165b565b9050610e108111610b465760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c7900000000000000000000000000604482015260640161042e565b611c208110610b975760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c6174650000000000000000000000000000604482015260640161042e565b73ffffffffffffffffffffffffffffffffffffffff602885901c16610bbf8989898985611137565b600089815260056020908152604080832080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff8a1617905560ff8c16835290829052902054610c559073ffffffffffffffffffffffffffffffffffffffff1682610c5060588d901c64ffffffffff1687611643565b6112a9565b60405189907f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d90600090a2505050505050505050565b606060015b6101008160ff161015610d435760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610d31578060ff1660011415610cda575090565b610ce5600182611672565b60ff1667ffffffffffffffff811115610d0057610d00611713565b604051908082528060200260200182016040528015610d29578160200160208202803683370190505b509150610d43565b80610d3b81611695565b915050610c90565b60015b8160ff168160ff161015610dd35760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683610d89600184611672565b60ff1681518110610d9c57610d9c6116e4565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610dcb81611695565b915050610d46565b505090565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580610e2a575060ff8216155b15610e3a57600092505050610e62565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839290871691610eff91906115ae565b6000604051808303816000865af19150503d8060008114610f3c576040519150601f19603f3d011682016040523d82523d6000602084013e610f41565b606091505b5091509150818015610f6b575080511580610f6b575080806020019051810190610f6b9190611451565b610fb75760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015260640161042e565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff81166110215760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d70747920616464726573730000604482015260640161042e565b60008681526020868152604080832082527f245d0b306958178c99fe38132cee72cfd0c1c10b4d7c67cbbd322d6b1af894f9808452818420825194855292840180835283905260ff86169184019190915260608301879052608083018690529160019060a0016020604051602081039080840390855afa1580156110a9573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461112d5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161042e565b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff811661119a5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d70747920616464726573730000604482015260640161042e565b6000858152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff86169084015260608301879052608083018690529160019060a0016020604051602081039080840390855afa15801561121c573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146112a05760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161042e565b50505050505050565b600081116112f95760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f604482015260640161042e565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b15801561136f57600080fd5b505af1158015611383573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a79190611451565b50505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146113d157600080fd5b919050565b803564ffffffffff811681146113d157600080fd5b803560ff811681146113d157600080fd5b60006020828403121561140e57600080fd5b611417826113ad565b9392505050565b6000806040838503121561143157600080fd5b61143a836113ad565b9150611448602084016113ad565b90509250929050565b60006020828403121561146357600080fd5b815161141781611742565b60006020828403121561148057600080fd5b5035919050565b60008060008060008060c087890312156114a057600080fd5b863595506020870135945060408701359350606087013592506114c5608088016113eb565b915060a08701356114d581611742565b809150509295509295509295565b600080600080600060a086880312156114fb57600080fd5b853594506020860135935060408601359250611519606087016113eb565b9150608086013578ffffffffffffffffffffffffffffffffffffffffffffffffff8116811461154757600080fd5b809150509295509295909350565b6000806040838503121561156857600080fd5b82359150611448602084016113d6565b60006020828403121561158a57600080fd5b611417826113d6565b6000602082840312156115a557600080fd5b611417826113eb565b6000825160005b818110156115cf57602081860181015185830152016115b5565b818111156115de576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561163757835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611605565b50909695505050505050565b60008219821115611656576116566116b5565b500190565b60008282101561166d5761166d6116b5565b500390565b600060ff821660ff84168082101561168c5761168c6116b5565b90039392505050565b600060ff821660ff8114156116ac576116ac6116b5565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461175057600080fd5b5056fea164736f6c6343000806000a";

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
