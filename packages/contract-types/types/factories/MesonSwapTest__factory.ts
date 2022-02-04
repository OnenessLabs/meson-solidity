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
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "getSwapRequest",
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
        internalType: "uint208",
        name: "packedData",
        type: "uint208",
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
  "0x608060405234801561001057600080fd5b50604051620018c1380380620018c1833981016040819052610031916100e0565b61003c816001610042565b50610110565b60ff81166100965760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b6000602082840312156100f257600080fd5b81516001600160a01b038116811461010957600080fd5b9392505050565b6117a180620001206000396000f3fe608060405234801561001057600080fd5b50600436106100de5760003560e01c80637c8501871161008c578063eba7fb7711610066578063eba7fb7714610276578063f7888aec146102a3578063ff378719146102c4578063ffa96ec4146102fd57600080fd5b80637c850187146101f3578063b002249d14610206578063b3df5b361461021b57600080fd5b806335eff30f116100bd57806335eff30f146101855780634a23656d1461019857806354d6a2b7146101e057600080fd5b806207f5fd146100e35780631aba3a55146100f85780632335093c1461013a575b600080fd5b6100f66100f13660046115b9565b610310565b005b61011f61010636600461144f565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b61017361014836600461144f565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff9091168152602001610131565b6100f6610193366004611596565b6104f0565b6101ab6101a63660046114c1565b61064f565b6040805173ffffffffffffffffffffffffffffffffffffffff9485168152939092166020840152151590820152606001610131565b6100f66101ee3660046114c1565b6106e1565b6100f66102013660046114da565b61085d565b61020e610a44565b604051610131919061162a565b6102516102293660046115b9565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610131565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610131565b6102b66102b1366004611471565b610b91565b604051908152602001610131565b6102516102d23660046115d4565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6100f661030b366004611536565b610bf0565b3364ffffffffff821661036a5760405162461bcd60e51b815260206004820152601260248201527f43616e6e6f742075736520696e6465782030000000000000000000000000000060448201526064015b60405180910390fd5b64ffffffffff821660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16156103e45760405162461bcd60e51b815260206004820152601860248201527f496e64657820616c7265616479207265676973746572656400000000000000006044820152606401610361565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205464ffffffffff161561045e5760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c726561647920726567697374657265640000000000006044820152606401610361565b64ffffffffff9091166000818152600360209081526040808320805473ffffffffffffffffffffffffffffffffffffffff9096167fffffffffffffffffffffffff000000000000000000000000000000000000000090961686179055938252600290529190912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000169091179055565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16806105675760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610361565b64ffffffffff8116156105bc5760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f7669646572006044820152606401610361565b60008381526005602090815260409182902080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff86161717905590518481527f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc9910160405180910390a1505050565b60008181526005602052604081205473ffffffffffffffffffffffffffffffffffffffff602882901c16919078ffffffffffffffffffffffffffffffffffffffffffffffffff166001811490836106a957600092506106d9565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b509193909250565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff166001811161075b5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610361565b42603083901c64ffffffffff16106107b55760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b65640000000000000000000000006044820152606401610361565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff85168352908290529020546108269073ffffffffffffffffffffffffffffffffffffffff90811690602884901c1660a085901c610e6d565b6040518281527ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f9060200160405180910390a15050565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16806108d45760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610361565b6108e0610e1042611684565b603088901c64ffffffffff16101561092b57600087815260056020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000169055610963565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b610990878787878760288778ffffffffffffffffffffffffffffffffffffffffffffffffff16901c610fc3565b81156109ec5764ffffffffff8116602888901b65ffffffffffff811682176000908152600460205260409020549117906109ce9060a08a901c61112e565b65ffffffffffff909116600090815260046020526040902055610a3b565b60ff87166000908152602081815260408083205464ffffffffff85168452600390925290912054610a3b9173ffffffffffffffffffffffffffffffffffffffff908116911660a08a901c610e6d565b50505050505050565b606060015b6101008160ff161015610afc5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610aea578060ff1660011415610a93575090565b610a9e6001826116b3565b60ff1667ffffffffffffffff811115610ab957610ab9611754565b604051908082528060200260200182016040528015610ae2578160200160208202803683370190505b509150610afc565b80610af4816116d6565b915050610a49565b60015b8160ff168160ff161015610b8c5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683610b426001846116b3565b60ff1681518110610b5557610b55611725565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610b84816116d6565b915050610aff565b505090565b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600160209081526040808320549385168352600282528083205464ffffffffff1660289490941b65ff0000000000169390931782526004905220545b92915050565b83600881901c61ffff16603c14610c495760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610361565b60008581526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615610cc05760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610361565b6000610cd74264ffffffffff603089901c1661169c565b9050610e108111610d2a5760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c79000000000000000000000000006044820152606401610361565b611c208110610d7b5760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c61746500000000000000000000000000006044820152606401610361565b74ffffffffffffffffffffffffffffffffffffffffff602884901c16610dab87878760ff60c889901c168561118c565b600087815260056020908152604080832080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff891617905560ff8a16835290829052902054610e319073ffffffffffffffffffffffffffffffffffffffff168260a08a901c6112fc565b6040518781527f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d9060200160405180910390a150505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839290871691610f0491906115ef565b6000604051808303816000865af19150503d8060008114610f41576040519150601f19603f3d011682016040523d82523d6000602084013e610f46565b606091505b5091509150818015610f70575080511580610f70575080806020019051810190610f7091906114a4565b610fbc5760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610361565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff81166110265760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610361565b60008681526020868152604080832082527f5ef297f2881340f11ed62c7c08e0e0c235c333ad8f340d7285f529f16716968a8352808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa1580156110aa573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610a3b5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610361565b60008261113b8382611684565b9150811015610bea5760405162461bcd60e51b815260206004820152600860248201527f6f766572666c6f770000000000000000000000000000000000000000000000006044820152606401610361565b73ffffffffffffffffffffffffffffffffffffffff81166111ef5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610361565b6000858152602080822081527f9862d877599564bcd97c37305a7b0fdbe621d9c2a125026f2ad601f754a75abc82526040808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa158015611270573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146112f45760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610361565b505050505050565b6000811161134c5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610361565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b1580156113c257600080fd5b505af11580156113d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113fa91906114a4565b50505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461142457600080fd5b919050565b803564ffffffffff8116811461142457600080fd5b803560ff8116811461142457600080fd5b60006020828403121561146157600080fd5b61146a82611400565b9392505050565b6000806040838503121561148457600080fd5b61148d83611400565b915061149b60208401611400565b90509250929050565b6000602082840312156114b657600080fd5b815161146a81611783565b6000602082840312156114d357600080fd5b5035919050565b60008060008060008060c087890312156114f357600080fd5b863595506020870135945060408701359350606087013592506115186080880161143e565b915060a087013561152881611783565b809150509295509295509295565b6000806000806080858703121561154c57600080fd5b843593506020850135925060408501359150606085013579ffffffffffffffffffffffffffffffffffffffffffffffffffff8116811461158b57600080fd5b939692955090935050565b600080604083850312156115a957600080fd5b8235915061149b60208401611429565b6000602082840312156115cb57600080fd5b61146a82611429565b6000602082840312156115e657600080fd5b61146a8261143e565b6000825160005b8181101561161057602081860181015185830152016115f6565b8181111561161f576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561167857835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611646565b50909695505050505050565b60008219821115611697576116976116f6565b500190565b6000828210156116ae576116ae6116f6565b500390565b600060ff821660ff8416808210156116cd576116cd6116f6565b90039392505050565b600060ff821660ff8114156116ed576116ed6116f6565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461179157600080fd5b5056fea164736f6c6343000806000a";

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
