/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Meson, MesonInterface } from "../Meson";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "supportedTokens",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "SwapPosted",
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
  "0x60806040523480156200001157600080fd5b506040516200263538038062002635833981016040819052620000349162000156565b60005b81518160ff16101562000092576200007d828260ff168151811062000060576200006062000290565b60200260200101518260016200007791906200022f565b6200009a565b80620000898162000257565b91505062000037565b5050620002bc565b60ff8116620000ef5760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b80516001600160a01b03811681146200015157600080fd5b919050565b600060208083850312156200016a57600080fd5b82516001600160401b03808211156200018257600080fd5b818501915085601f8301126200019757600080fd5b815181811115620001ac57620001ac620002a6565b8060051b604051601f19603f83011681018181108582111715620001d457620001d4620002a6565b604052828152858101935084860182860187018a1015620001f457600080fd5b600095505b8386101562000222576200020d8162000139565b855260019590950194938601938601620001f9565b5098975050505050505050565b600060ff821660ff84168060ff038211156200024f576200024f6200027a565b019392505050565b600060ff821660ff8114156200027157620002716200027a565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61236980620002cc6000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c80638f487dc9116100cd578063e16a567d11610081578063eba7fb7711610066578063eba7fb7714610464578063f7888aec14610491578063ff378719146104a457600080fd5b8063e16a567d14610376578063e76afb54146103af57600080fd5b8063b002249d116100b2578063b002249d146102f3578063b3df5b3614610308578063be18e8a41461036357600080fd5b80638f487dc9146102cd578063903d4296146102e057600080fd5b806337b90a4f116101245780636198e339116101095780636198e339146102945780637c850187146102a75780638302ce5a146102ba57600080fd5b806337b90a4f1461026e57806354d6a2b71461028157600080fd5b80631e2a6075116101555780631e2a6075146101c85780632335093c1461021057806335eff30f1461025b57600080fd5b80630b9b44af146101715780631aba3a5514610186575b600080fd5b61018461017f36600461203e565b6104dd565b005b6101ad610194366004611f57565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b6101db6101d6366004611fc9565b610656565b6040805173ffffffffffffffffffffffffffffffffffffffff94851681529390921660208401521515908201526060016101bf565b61024961021e366004611f57565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff90911681526020016101bf565b610184610269366004612100565b6106e8565b61018461027c366004612123565b61083a565b61018461028f366004611fc9565b6108fe565b6101846102a2366004611fc9565b610a86565b6101846102b5366004611fe2565b610c20565b6101846102c836600461208e565b610ea1565b6101846102db366004612123565b611123565b6101846102ee36600461215e565b6113b9565b6102fb6114c3565b6040516101bf91906121f2565b61033e610316366004612181565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101bf565b61018461037136600461203e565b611610565b6103a161038436600461219c565b60281b65ff00000000001660009081526004602052604090205490565b6040519081526020016101bf565b61042a6103bd366004611fc9565b60009081526006602090815260408083205464ffffffffff60a082901c8116855260039093529220547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83169373ffffffffffffffffffffffffffffffffffffffff9091169260c81c90911690565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815293909216602084015264ffffffffff16908201526060016101bf565b6040517e3c00000000000000000000000000000000000000000000000000000000000081526020016101bf565b6103a161049f366004611f79565b61188b565b61033e6104b236600461219c565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000858152600660205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff168061055e5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064015b60405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606084901b1660208201526105b5908790603401604051602081830303815290604052805190602001208787878661191b565b600086815260066020908152604080832080547fffff00000000000000000000000000000000000000000000000000000000000016905560ff60188a901c1683529082905290205473ffffffffffffffffffffffffffffffffffffffff16610622818460a08a901c611a8f565b60405187907ffa628b578e095243f0544bfad9255f49d79d03a5bbf6c85875d05a215e247ad290600090a250505050505050565b60008181526005602052604081205473ffffffffffffffffffffffffffffffffffffffff602882901c16919078ffffffffffffffffffffffffffffffffffffffffffffffffff166001811490836106b057600092506106e0565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b509193909250565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff168061075f5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610555565b64ffffffffff8116156107b45760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f7669646572006044820152606401610555565b60008381526005602052604080822080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff8616171790555184917f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc991a2505050565b6000821161088a5760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f7369746976650000000000000000006044820152606401610555565b65ffffffffffff81166000908152600460205260409020546108ac9083611bde565b65ffffffffffff8216600090815260046020908152604080832093909355602884901c60ff16825281905220546108fa9073ffffffffffffffffffffffffffffffffffffffff163384611c3c565b5050565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16600181116109785760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610555565b42603083901c64ffffffffff16106109d25760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b65640000000000000000000000006044820152606401610555565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff8516835290829052902054610a579073ffffffffffffffffffffffffffffffffffffffff90811690602884901c16610a5264ffffffffff605887901c1660a087901c61224c565b611a8f565b60405182907ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f90600090a25050565b6000818152600660205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1680610b025760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610555565b807dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660c842901b7dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1611610b955760405162461bcd60e51b815260206004820152601260248201527f53776170207374696c6c20696e206c6f636b00000000000000000000000000006044820152606401610555565b60a081811c64ffffffffff16601084901b65ff000000000016176000818152600460205260409020549091610bcd919085901c611bde565b65ffffffffffff909116600090815260046020908152604080832093909355938152600690935290912080547fffff00000000000000000000000000000000000000000000000000000000000016905550565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1680610c975760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610555565b610ca3610e104261224c565b603088901c64ffffffffff161015610cee57600087815260056020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000169055610d26565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b610d53878787878760288778ffffffffffffffffffffffffffffffffffffffffffffffffff16901c61191b565b602887901b6000610d7364ffffffffff60588b901c1660a08b901c61224c565b9050600889901c61ffff16603c14158015610d975750602089901c61ffff16603c14155b15610df757647fffffffff60598a901c168015610de95765ffffffffffff8316600090815260046020526040902054610dd09082611bde565b65ffffffffffff84166000908152600460205260409020555b610df38183612264565b9150505b8315610e4b5764ffffffffff831665ffffffffffff8316811760009081526004602052604090205490831790610e2d9083611bde565b65ffffffffffff909116600090815260046020526040902055610e96565b60ff89166000908152602081815260408083205464ffffffffff87168452600390925290912054610e969173ffffffffffffffffffffffffffffffffffffffff908116911683611a8f565b505050505050505050565b84600881901c61ffff16603c14610efa5760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610555565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615610f715760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610555565b6000610f884264ffffffffff60308a901c16612264565b9050610e108111610fdb5760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c79000000000000000000000000006044820152606401610555565b611c20811061102c5760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c61746500000000000000000000000000006044820152606401610555565b73ffffffffffffffffffffffffffffffffffffffff602884901c166110548888888885611d3a565b600088815260056020908152604080832080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff891617905560ff8b168352908290529020546110ee9073ffffffffffffffffffffffffffffffffffffffff16826110e960588c901c64ffffffffff1660a08d901c61224c565b611c3c565b60405188907f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d90600090a25050505050505050565b600082116111735760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f7369746976650000000000000000006044820152606401610555565b338164ffffffffff81166111c95760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f742075736520302061732070726f766964657220696e64657800006044820152606401610555565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16156112435760405162461bcd60e51b815260206004820152601860248201527f496e64657820616c7265616479207265676973746572656400000000000000006044820152606401610555565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205464ffffffffff16156112bd5760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c726561647920726567697374657265640000000000006044820152606401610555565b64ffffffffff8116600081815260036020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff881690811790915583526002825280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001690941790935565ffffffffffff861682526004905220546113659085611bde565b65ffffffffffff841660009081526004602090815260408083209390935560ff602887901c16825281905220546113b39073ffffffffffffffffffffffffffffffffffffffff168386611c3c565b50505050565b3360008181526002602052604090205464ffffffffff16806114435760405162461bcd60e51b815260206004820152602e60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465720000000000000000000000000000000000006064820152608401610555565b65ff0000000000602884901b1664ffffffffff8216176000818152600460205260409020546114729086611eaa565b65ffffffffffff821660009081526004602090815260408083209390935560ff8716825281905220546114bc9073ffffffffffffffffffffffffffffffffffffffff168487611a8f565b5050505050565b606060015b6101008160ff16101561157b5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16611569578060ff1660011415611512575090565b61151d60018261227b565b60ff1667ffffffffffffffff8111156115385761153861231c565b604051908082528060200260200182016040528015611561578160200160208202803683370190505b50915061157b565b806115738161229e565b9150506114c8565b60015b8160ff168160ff16101561160b5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16836115c160018461227b565b60ff16815181106115d4576115d46122ed565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152806116038161229e565b91505061157e565b505090565b84602081901c61ffff16603c146116695760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610555565b6000868152600660205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16156116e55760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610555565b6116f28686868686611d3a565b3360009081526002602052604090205464ffffffffff168061177c5760405162461bcd60e51b815260206004820152602f60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465722e00000000000000000000000000000000006064820152608401610555565b65ff0000000000601088901b1664ffffffffff8216176000818152600460205260409020546117af9060a08a901c611eaa565b65ffffffffffff821660009081526004602052604081209190915573ffffffffffffffffffffffffffffffffffffffff85169060c86117f06104b04261224c565b60008c81526006602052604080822080547fffff000000000000000000000000000000000000000000000000000000000000167dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff94851690951b959095179590951790911691909117909155905189917fbfb879c34323c5601fafe832c3a8a1e31e12c288695838726ddeada86034edb491a25050505050505050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff168015806118dd575060ff8216155b156118ed57600092505050611915565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b73ffffffffffffffffffffffffffffffffffffffff811661197e5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610555565b60008681526020868152604080832082527f5ef297f2881340f11ed62c7c08e0e0c235c333ad8f340d7285f529f16716968a8352808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa158015611a02573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611a865760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610555565b50505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839290871691611b2691906121b7565b6000604051808303816000865af19150503d8060008114611b63576040519150601f19603f3d011682016040523d82523d6000602084013e611b68565b606091505b5091509150818015611b92575080511580611b92575080806020019051810190611b929190611fac565b6114bc5760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610555565b600082611beb838261224c565b91508110156119155760405162461bcd60e51b815260206004820152600860248201527f6f766572666c6f770000000000000000000000000000000000000000000000006044820152606401610555565b60008111611c8c5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610555565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015611d0257600080fd5b505af1158015611d16573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b39190611fac565b73ffffffffffffffffffffffffffffffffffffffff8116611d9d5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610555565b6000858152602080822081527f9862d877599564bcd97c37305a7b0fdbe621d9c2a125026f2ad601f754a75abc82526040808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa158015611e1e573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611ea25760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610555565b505050505050565b600082611eb78382612264565b91508111156119155760405162461bcd60e51b815260206004820152600960248201527f756e646572666c6f7700000000000000000000000000000000000000000000006044820152606401610555565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f2c57600080fd5b919050565b803564ffffffffff81168114611f2c57600080fd5b803560ff81168114611f2c57600080fd5b600060208284031215611f6957600080fd5b611f7282611f08565b9392505050565b60008060408385031215611f8c57600080fd5b611f9583611f08565b9150611fa360208401611f08565b90509250929050565b600060208284031215611fbe57600080fd5b8151611f728161234b565b600060208284031215611fdb57600080fd5b5035919050565b60008060008060008060c08789031215611ffb57600080fd5b8635955060208701359450604087013593506060870135925061202060808801611f46565b915060a08701356120308161234b565b809150509295509295509295565b600080600080600060a0868803121561205657600080fd5b85359450602086013593506040860135925061207460608701611f46565b915061208260808701611f08565b90509295509295909350565b600080600080600060a086880312156120a657600080fd5b8535945060208601359350604086013592506120c460608701611f46565b9150608086013578ffffffffffffffffffffffffffffffffffffffffffffffffff811681146120f257600080fd5b809150509295509295909350565b6000806040838503121561211357600080fd5b82359150611fa360208401611f31565b6000806040838503121561213657600080fd5b82359150602083013565ffffffffffff8116811461215357600080fd5b809150509250929050565b6000806040838503121561217157600080fd5b82359150611fa360208401611f46565b60006020828403121561219357600080fd5b611f7282611f31565b6000602082840312156121ae57600080fd5b611f7282611f46565b6000825160005b818110156121d857602081860181015185830152016121be565b818111156121e7576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561224057835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010161220e565b50909695505050505050565b6000821982111561225f5761225f6122be565b500190565b600082821015612276576122766122be565b500390565b600060ff821660ff841680821015612295576122956122be565b90039392505050565b600060ff821660ff8114156122b5576122b56122be565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461235957600080fd5b5056fea164736f6c6343000806000a";

type MesonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Meson__factory extends ContractFactory {
  constructor(...args: MesonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Meson> {
    return super.deploy(supportedTokens, overrides || {}) as Promise<Meson>;
  }
  getDeployTransaction(
    supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(supportedTokens, overrides || {});
  }
  attach(address: string): Meson {
    return super.attach(address) as Meson;
  }
  connect(signer: Signer): Meson__factory {
    return super.connect(signer) as Meson__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonInterface {
    return new utils.Interface(_abi) as MesonInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Meson {
    return new Contract(address, _abi, signerOrProvider) as Meson;
  }
}
