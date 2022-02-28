/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonPools, MesonPoolsInterface } from "../MesonPools";

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
    name: "SwapLocked",
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
    name: "SwapReleased",
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
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "depositAndRegister",
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
    name: "getLockedSwap",
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
        internalType: "uint40",
        name: "until",
        type: "uint40",
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
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "release",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611871806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063b002249d11610097578063e76afb5411610066578063e76afb54146102a4578063eba7fb7714610359578063f7888aec14610386578063ff3787191461039957600080fd5b8063b002249d146101e8578063b3df5b36146101fd578063be18e8a414610258578063e16a567d1461026b57600080fd5b806337b90a4f116100d357806337b90a4f1461019c5780636198e339146101af5780638f487dc9146101c2578063903d4296146101d557600080fd5b80630b9b44af146100fa5780631aba3a551461010f5780632335093c14610151575b600080fd5b61010d6101083660046115e0565b6103d2565b005b61013661011d366004611550565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b61018a61015f366004611550565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff9091168152602001610148565b61010d6101aa366004611630565b610564565b61010d6101bd3660046115c7565b61061c565b61010d6101d0366004611630565b610774565b61010d6101e336600461166b565b610a00565b6101f0610af7565b604051610148919061170b565b61023361020b36600461168e565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610148565b61010d6102663660046115e0565b610c44565b6102966102793660046116b5565b60281b65ff00000000001660009081526004602052604090205490565b604051908152602001610148565b61031f6102b23660046115c7565b60009081526005602090815260408083205464ffffffffff60a082901c8116855260039093529220547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83169373ffffffffffffffffffffffffffffffffffffffff9091169260c81c90911690565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815293909216602084015264ffffffffff1690820152606001610148565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610148565b610296610394366004611572565b610f47565b6102336103a73660046116b5565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000858152600560205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16806104535760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064015b60405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606084901b1660208201526104b0908790603401604051602081830303815290604052805190602001208787876104ab8790565b610fd7565b600086815260056020526040812080547fffff00000000000000000000000000000000000000000000000000000000000016905580806104f08960181c90565b60ff16815260208101919091526040016000205473ffffffffffffffffffffffffffffffffffffffff169050610530818461052b8a60a01c90565b611150565b60405187907ffa628b578e095243f0544bfad9255f49d79d03a5bbf6c85875d05a215e247ad290600090a250505050505050565b600082116105b45760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f736974697665000000000000000000604482015260640161044a565b65ffffffffffff8116600090815260046020526040812080548492906105db908490611765565b909155505060ff602882901c166000908152602081905260409020546106189073ffffffffffffffffffffffffffffffffffffffff1633846112a6565b5050565b6000818152600560205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16806106985760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f7420657869737400000000000000000000000000604482015260640161044a565b4260c882901c64ffffffffff16106106f25760405162461bcd60e51b815260206004820152601260248201527f53776170207374696c6c20696e206c6f636b0000000000000000000000000000604482015260640161044a565b60a081811c64ffffffffff16601084901b65ff000000000016179083901c65ffffffffffff821660009081526004602052604081208054909190610737908490611765565b90915550505060009182525060056020526040902080547fffff000000000000000000000000000000000000000000000000000000000000169055565b600082116107c45760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f736974697665000000000000000000604482015260640161044a565b338164ffffffffff811661081a5760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f742075736520302061732070726f766964657220696e6465780000604482015260640161044a565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16156108945760405162461bcd60e51b815260206004820152601860248201527f496e64657820616c726561647920726567697374657265640000000000000000604482015260640161044a565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205464ffffffffff161561090e5760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c72656164792072656769737465726564000000000000604482015260640161044a565b64ffffffffff8116600081815260036020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff881690811790915583526002825280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001690941790935565ffffffffffff861682526004905290812080548692906109bd908490611765565b909155505060ff602884901c166000908152602081905260409020546109fa9073ffffffffffffffffffffffffffffffffffffffff1683866112a6565b50505050565b3360008181526002602052604090205464ffffffffff1680610a8a5760405162461bcd60e51b815260206004820152602e60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e645265676973746572000000000000000000000000000000000000606482015260840161044a565b64ffffffffff8116602884901b65ff0000000000161760009081526004602052604081208054869290610abe90849061177d565b909155505060ff83166000908152602081905260409020546109fa9073ffffffffffffffffffffffffffffffffffffffff168386611150565b606060015b6101008160ff161015610baf5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610b9d578060ff1660011415610b46575090565b610b51600182611794565b60ff1667ffffffffffffffff811115610b6c57610b6c611835565b604051908082528060200260200182016040528015610b95578160200160208202803683370190505b509150610baf565b80610ba7816117b7565b915050610afc565b60015b8160ff168160ff161015610c3f5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683610bf5600184611794565b60ff1681518110610c0857610c08611806565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610c37816117b7565b915050610bb2565b505090565b84603c610c518260201c90565b61ffff1614610ca25760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e000000000000000000604482015260640161044a565b6000868152600560205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1615610d1e5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c72656164792065786973747300000000000000000000000000604482015260640161044a565b610d2b86868686866113a4565b3360009081526002602052604090205464ffffffffff1680610db55760405162461bcd60e51b815260206004820152602f60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465722e0000000000000000000000000000000000606482015260840161044a565b6000610dc36104b042611765565b9050603088901c64ffffffffff168110610e455760405162461bcd60e51b815260206004820152602560248201527f43616e6e6f74206c6f636b20626563617573652065787069726554732069732060448201527f736f6f6e2e000000000000000000000000000000000000000000000000000000606482015260840161044a565b65ff0000000000601089901b1664ffffffffff8316176000818152600460205260408120805460a08c901c9290610e7d90849061177d565b909155505060008981526005602052604080822080547fffff0000000000000000000000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff891660a088901b78ffffffffff00000000000000000000000000000000000000001660c888901b7dffffffffff00000000000000000000000000000000000000000000000000161717179055518a917fbfb879c34323c5601fafe832c3a8a1e31e12c288695838726ddeada86034edb491a2505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580610f99575060ff8216155b15610fa957600092505050610fd1565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b73ffffffffffffffffffffffffffffffffffffffff811661103a5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d70747920616464726573730000604482015260640161044a565b60008681526020868152604080832082527f245d0b306958178c99fe38132cee72cfd0c1c10b4d7c67cbbd322d6b1af894f9808452818420825194855292840180835283905260ff86169184019190915260608301879052608083018690529160019060a0016020604051602081039080840390855afa1580156110c2573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146111465760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161044a565b5050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908716916111e791906116d0565b6000604051808303816000865af19150503d8060008114611224576040519150601f19603f3d011682016040523d82523d6000602084013e611229565b606091505b509150915081801561125357508051158061125357508080602001905181019061125391906115a5565b61129f5760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c65640000000000000000000000000000000000604482015260640161044a565b5050505050565b600081116112f65760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f604482015260640161044a565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b15801561136c57600080fd5b505af1158015611380573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fa91906115a5565b73ffffffffffffffffffffffffffffffffffffffff81166114075760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d70747920616464726573730000604482015260640161044a565b6000858152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff86169084015260608301879052608083018690529160019060a0016020604051602081039080840390855afa158015611489573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461150d5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161044a565b50505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461153a57600080fd5b919050565b803560ff8116811461153a57600080fd5b60006020828403121561156257600080fd5b61156b82611516565b9392505050565b6000806040838503121561158557600080fd5b61158e83611516565b915061159c60208401611516565b90509250929050565b6000602082840312156115b757600080fd5b8151801515811461156b57600080fd5b6000602082840312156115d957600080fd5b5035919050565b600080600080600060a086880312156115f857600080fd5b8535945060208601359350604086013592506116166060870161153f565b915061162460808701611516565b90509295509295909350565b6000806040838503121561164357600080fd5b82359150602083013565ffffffffffff8116811461166057600080fd5b809150509250929050565b6000806040838503121561167e57600080fd5b8235915061159c6020840161153f565b6000602082840312156116a057600080fd5b813564ffffffffff8116811461156b57600080fd5b6000602082840312156116c757600080fd5b61156b8261153f565b6000825160005b818110156116f157602081860181015185830152016116d7565b81811115611700576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561175957835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611727565b50909695505050505050565b60008219821115611778576117786117d7565b500190565b60008282101561178f5761178f6117d7565b500390565b600060ff821660ff8416808210156117ae576117ae6117d7565b90039392505050565b600060ff821660ff8114156117ce576117ce6117d7565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000806000a";

type MesonPoolsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonPoolsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonPools__factory extends ContractFactory {
  constructor(...args: MesonPoolsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonPools> {
    return super.deploy(overrides || {}) as Promise<MesonPools>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonPools {
    return super.attach(address) as MesonPools;
  }
  connect(signer: Signer): MesonPools__factory {
    return super.connect(signer) as MesonPools__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonPoolsInterface {
    return new utils.Interface(_abi) as MesonPoolsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonPools {
    return new Contract(address, _abi, signerOrProvider) as MesonPools;
  }
}
