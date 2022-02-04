/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonSwapTest, MesonSwapTestInterface } from "../MesonSwapTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "register",
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
  "0x608060405234801561001057600080fd5b50604051620018cc380380620018cc833981016040819052610031916100e0565b61003c816001610042565b50610110565b60ff81166100965760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b6000602082840312156100f257600080fd5b81516001600160a01b038116811461010957600080fd5b9392505050565b6117ac80620001206000396000f3fe608060405234801561001057600080fd5b50600436106100de5760003560e01c80637c8501871161008c578063b3df5b3611610066578063b3df5b361461022e578063eba7fb7714610289578063f7888aec146102b6578063ff378719146102d757600080fd5b80637c850187146101f35780638302ce5a14610206578063b002249d1461021957600080fd5b80632335093c116100bd5780632335093c1461018257806335eff30f146101cd57806354d6a2b7146101e057600080fd5b806207f5fd146100e35780631aba3a55146100f85780631e2a60751461013a575b600080fd5b6100f66100f13660046115c4565b610310565b005b61011f610106366004611448565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b61014d6101483660046114ba565b6104f0565b6040805173ffffffffffffffffffffffffffffffffffffffff9485168152939092166020840152151590820152606001610131565b6101bb610190366004611448565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff9091168152602001610131565b6100f66101db3660046115a1565b610582565b6100f66101ee3660046114ba565b6106e1565b6100f66102013660046114d3565b61085d565b6100f661021436600461152f565b610a44565b610221610cba565b6040516101319190611635565b61026461023c3660046115c4565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610131565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610131565b6102c96102c436600461146a565b610e07565b604051908152602001610131565b6102646102e53660046115df565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b3364ffffffffff821661036a5760405162461bcd60e51b815260206004820152601260248201527f43616e6e6f742075736520696e6465782030000000000000000000000000000060448201526064015b60405180910390fd5b64ffffffffff821660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16156103e45760405162461bcd60e51b815260206004820152601860248201527f496e64657820616c7265616479207265676973746572656400000000000000006044820152606401610361565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205464ffffffffff161561045e5760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c726561647920726567697374657265640000000000006044820152606401610361565b64ffffffffff9091166000818152600360209081526040808320805473ffffffffffffffffffffffffffffffffffffffff9096167fffffffffffffffffffffffff000000000000000000000000000000000000000090961686179055938252600290529190912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000169091179055565b60008181526005602052604081205473ffffffffffffffffffffffffffffffffffffffff602882901c16919078ffffffffffffffffffffffffffffffffffffffffffffffffff1660018114908361054a576000925061057a565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b509193909250565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16806105f95760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610361565b64ffffffffff81161561064e5760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f7669646572006044820152606401610361565b60008381526005602090815260409182902080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff86161717905590518481527f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc9910160405180910390a1505050565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff166001811161075b5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610361565b42603083901c64ffffffffff16106107b55760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b65640000000000000000000000006044820152606401610361565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff85168352908290529020546108269073ffffffffffffffffffffffffffffffffffffffff90811690602884901c1660a085901c610e66565b6040518281527ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f9060200160405180910390a15050565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16806108d45760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610361565b6108e0610e104261168f565b603088901c64ffffffffff16101561092b57600087815260056020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000169055610963565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b610990878787878760288778ffffffffffffffffffffffffffffffffffffffffffffffffff16901c610fbc565b81156109ec5764ffffffffff8116602888901b65ffffffffffff811682176000908152600460205260409020549117906109ce9060a08a901c611127565b65ffffffffffff909116600090815260046020526040902055610a3b565b60ff87166000908152602081815260408083205464ffffffffff85168452600390925290912054610a3b9173ffffffffffffffffffffffffffffffffffffffff908116911660a08a901c610e66565b50505050505050565b84600881901c61ffff16603c14610a9d5760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610361565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615610b145760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610361565b6000610b2b4264ffffffffff60308a901c166116a7565b9050610e108111610b7e5760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c79000000000000000000000000006044820152606401610361565b611c208110610bcf5760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c61746500000000000000000000000000006044820152606401610361565b73ffffffffffffffffffffffffffffffffffffffff602884901c16610bf78888888885611185565b600088815260056020908152604080832080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff891617905560ff8b16835290829052902054610c7d9073ffffffffffffffffffffffffffffffffffffffff168260a08b901c6112f5565b6040518881527f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d9060200160405180910390a15050505050505050565b606060015b6101008160ff161015610d725760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610d60578060ff1660011415610d09575090565b610d146001826116be565b60ff1667ffffffffffffffff811115610d2f57610d2f61175f565b604051908082528060200260200182016040528015610d58578160200160208202803683370190505b509150610d72565b80610d6a816116e1565b915050610cbf565b60015b8160ff168160ff161015610e025760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683610db86001846116be565b60ff1681518110610dcb57610dcb611730565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610dfa816116e1565b915050610d75565b505090565b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600160209081526040808320549385168352600282528083205464ffffffffff1660289490941b65ff0000000000169390931782526004905220545b92915050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839290871691610efd91906115fa565b6000604051808303816000865af19150503d8060008114610f3a576040519150601f19603f3d011682016040523d82523d6000602084013e610f3f565b606091505b5091509150818015610f69575080511580610f69575080806020019051810190610f69919061149d565b610fb55760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610361565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff811661101f5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610361565b60008681526020868152604080832082527f5ef297f2881340f11ed62c7c08e0e0c235c333ad8f340d7285f529f16716968a8352808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa1580156110a3573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610a3b5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610361565b600082611134838261168f565b9150811015610e605760405162461bcd60e51b815260206004820152600860248201527f6f766572666c6f770000000000000000000000000000000000000000000000006044820152606401610361565b73ffffffffffffffffffffffffffffffffffffffff81166111e85760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610361565b6000858152602080822081527f9862d877599564bcd97c37305a7b0fdbe621d9c2a125026f2ad601f754a75abc82526040808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa158015611269573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146112ed5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610361565b505050505050565b600081116113455760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610361565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b1580156113bb57600080fd5b505af11580156113cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f3919061149d565b50505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461141d57600080fd5b919050565b803564ffffffffff8116811461141d57600080fd5b803560ff8116811461141d57600080fd5b60006020828403121561145a57600080fd5b611463826113f9565b9392505050565b6000806040838503121561147d57600080fd5b611486836113f9565b9150611494602084016113f9565b90509250929050565b6000602082840312156114af57600080fd5b81516114638161178e565b6000602082840312156114cc57600080fd5b5035919050565b60008060008060008060c087890312156114ec57600080fd5b8635955060208701359450604087013593506060870135925061151160808801611437565b915060a08701356115218161178e565b809150509295509295509295565b600080600080600060a0868803121561154757600080fd5b85359450602086013593506040860135925061156560608701611437565b9150608086013578ffffffffffffffffffffffffffffffffffffffffffffffffff8116811461159357600080fd5b809150509295509295909350565b600080604083850312156115b457600080fd5b8235915061149460208401611422565b6000602082840312156115d657600080fd5b61146382611422565b6000602082840312156115f157600080fd5b61146382611437565b6000825160005b8181101561161b5760208186018101518583015201611601565b8181111561162a576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561168357835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611651565b50909695505050505050565b600082198211156116a2576116a2611701565b500190565b6000828210156116b9576116b9611701565b500390565b600060ff821660ff8416808210156116d8576116d8611701565b90039392505050565b600060ff821660ff8114156116f8576116f8611701565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461179c57600080fd5b5056fea164736f6c6343000806000a";

type MesonSwapTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonSwapTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonSwapTest__factory extends ContractFactory {
  constructor(...args: MesonSwapTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonSwapTest> {
    return super.deploy(token, overrides || {}) as Promise<MesonSwapTest>;
  }
  getDeployTransaction(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
  }
  attach(address: string): MesonSwapTest {
    return super.attach(address) as MesonSwapTest;
  }
  connect(signer: Signer): MesonSwapTest__factory {
    return super.connect(signer) as MesonSwapTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonSwapTestInterface {
    return new utils.Interface(_abi) as MesonSwapTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonSwapTest {
    return new Contract(address, _abi, signerOrProvider) as MesonSwapTest;
  }
}
