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
        name: "poolIndex",
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
        name: "poolTokenIndex",
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
        name: "poolTokenIndex",
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
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    name: "getLockedSwap",
    outputs: [
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
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "ownerOfPool",
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
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "platformFeeCollected",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "poolOfPermissionedAddr",
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
        name: "initiator",
        type: "address",
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
      {
        internalType: "address",
        name: "initiator",
        type: "address",
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
        internalType: "uint48",
        name: "poolTokenIndex",
        type: "uint48",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002fd438038062002fd4833981016040819052620000349162000156565b60005b81518160ff16101562000092576200007d828260ff168151811062000060576200006062000290565b60200260200101518260016200007791906200022f565b6200009a565b80620000898162000257565b91505062000037565b5050620002bc565b60ff8116620000ef5760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b80516001600160a01b03811681146200015157600080fd5b919050565b600060208083850312156200016a57600080fd5b82516001600160401b03808211156200018257600080fd5b818501915085601f8301126200019757600080fd5b815181811115620001ac57620001ac620002a6565b8060051b604051601f19603f83011681018181108582111715620001d457620001d4620002a6565b604052828152858101935084860182860187018a1015620001f457600080fd5b600095505b8386101562000222576200020d8162000139565b855260019590950194938601938601620001f9565b5098975050505050505050565b600060ff821660ff84168060ff038211156200024f576200024f6200027a565b019392505050565b600060ff821660ff8114156200027157620002716200027a565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b612d0880620002cc6000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806391cc39d0116100cd578063eba7fb7711610081578063f720817511610066578063f7208175146103e4578063f7888aec14610421578063ff3787191461043457600080fd5b8063eba7fb77146103a4578063f1d2ec1d146103d157600080fd5b8063be18e8a4116100b2578063be18e8a41461036b578063ce7f79b91461037e578063ce9247431461039157600080fd5b806391cc39d01461031d578063b002249d1461035657600080fd5b806354d6a2b7116101245780638302ce5a116101095780638302ce5a1461029c57806389a734c0146102af5780638f487dc91461030a57600080fd5b806354d6a2b71461024457806360a2da981461025757600080fd5b806335eff30f1161015557806335eff30f1461020957806337b90a4f1461021e5780634d11b0f11461023157600080fd5b80631e2a6075146101715780632335093c146101be575b600080fd5b61018461017f3660046128c7565b61046d565b6040805173ffffffffffffffffffffffffffffffffffffffff94851681529390921660208401521515908201526060015b60405180910390f35b6101f76101cc366004612855565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff90911681526020016101b5565b61021c610217366004612a87565b6104ff565b005b61021c61022c366004612aaa565b6106c1565b61021c61023f3660046129b2565b610879565b61021c6102523660046128c7565b610a68565b61026a6102653660046128e0565b610bdf565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835264ffffffffff9091166020830152016101b5565b61021c6102aa366004612a15565b610c3a565b6102e56102bd366004612ae5565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101b5565b61021c610318366004612aaa565b610f40565b61034861032b366004612b00565b60281b65ff00000000001660009081526004602052604090205490565b6040519081526020016101b5565b61035e6111fb565b6040516101b59190612b56565b61021c610379366004612903565b611348565b61021c61038c366004612aaa565b61161f565b61021c61039f366004612953565b6117d1565b6040517e3c00000000000000000000000000000000000000000000000000000000000081526020016101b5565b61021c6103df3660046128e0565b611a1c565b61040b6103f2366004612855565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020016101b5565b61034861042f366004612877565b611b80565b6102e5610442366004612b00565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600081815260056020526040812054602881901c73ffffffffffffffffffffffffffffffffffffffff16919078ffffffffffffffffffffffffffffffffffffffffffffffffff166001811490836104c757600092506104f7565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b509193909250565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff166001811161057e5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064015b60405180910390fd5b8064ffffffffff16156105d35760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f7669646572006044820152606401610575565b3360009081526002602052604090205464ffffffffff83811691161461063b5760405162461bcd60e51b815260206004820152601860248201527f43616e206f6e6c7920626f756e6420746f207369676e657200000000000000006044820152606401610575565b60008381526005602052604080822080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff8616171790555184917f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc991a2505050565b600082116107115760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f7369746976650000000000000000006044820152606401610575565b8064ffffffffff81166107665760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420757365203020617320706f6f6c20696e6465780000000000006044820152606401610575565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1633146108075760405162461bcd60e51b815260206004820152602160248201527f4e6565642074686520706f6f6c206f776e657220617320746865207369676e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610575565b65ffffffffffff82166000908152600460205260408120805485929061082e908490612bb0565b909155505060ff602883901c811660008181526020819052604090205490916108739173ffffffffffffffffffffffffffffffffffffffff1690339087908514611c10565b50505050565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16600181116108f35760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610575565b6108ff610e1042612bb0565b603088901c64ffffffffff16101561094a57600087815260056020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000169055610982565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b6109aa8784888888602887901c73ffffffffffffffffffffffffffffffffffffffff16611e20565b8115610a045760008164ffffffffff166109c48960281b90565b1790506109d18860d01c90565b65ffffffffffff8216600090815260046020526040812080549091906109f8908490612bb0565b90915550610a5f915050565b60ff87166000908152602081815260408083205464ffffffffff851684526003909252909120548891610a5d9173ffffffffffffffffffffffffffffffffffffffff918216911660d084901c5b8460ff1660ff146122d3565b505b50505050505050565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1660018111610ae25760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610575565b42603083901c64ffffffffff1610610b3c5760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b65640000000000000000000000006044820152606401610575565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff85168352908290529020548290610baf9073ffffffffffffffffffffffffffffffffffffffff90811690602885901c1660d084901c610a51565b60405183907ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f90600090a2505050565b6000806000610bee8585612422565b60009081526006602090815260408083205464ffffffffff8082168552600390935292205473ffffffffffffffffffffffffffffffffffffffff169760289290921c1695509350505050565b84603c610c478260081c90565b61ffff1614610c985760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610575565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615610d0f5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610575565b6000610d1b8760d01c90565b905064174876e800811115610d985760405162461bcd60e51b815260206004820152603760248201527f466f7220736563757269747920726561736f6e2c20616d6f756e742063616e6e60448201527f6f742062652067726561746572207468616e203130306b0000000000000000006064820152608401610575565b6000610daf4264ffffffffff60308b901c16612c03565b9050610e108111610e025760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c79000000000000000000000000006044820152606401610575565b611c208110610e535760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c61746500000000000000000000000000006044820152606401610575565b73ffffffffffffffffffffffffffffffffffffffff602885901c16610e7b8989898985612483565b600089815260056020526040812080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff88161790558960ff808216600081815260208190526040902054929350610f099273ffffffffffffffffffffffffffffffffffffffff16918591889114611c10565b6040518a907f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d90600090a250505050505050505050565b60008211610f905760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f7369746976650000000000000000006044820152606401610575565b338164ffffffffff8116610fe65760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420757365203020617320706f6f6c20696e6465780000000000006044820152606401610575565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff16156110605760405162461bcd60e51b815260206004820152601d60248201527f506f6f6c20696e64657820616c726561647920726567697374657265640000006044820152606401610575565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205464ffffffffff16156111005760405162461bcd60e51b815260206004820152602160248201527f5369676e6572206164647265737320616c72656164792072656769737465726560448201527f64000000000000000000000000000000000000000000000000000000000000006064820152608401610575565b64ffffffffff8116600081815260036020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff881690811790915583526002825280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001690941790935565ffffffffffff861682526004905290812080548692906111af908490612bb0565b909155505060ff602884901c811660008181526020819052604090205490916111f49173ffffffffffffffffffffffffffffffffffffffff1690859088908514611c10565b5050505050565b606060015b6101008160ff1610156112b35760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff166112a1578060ff166001141561124a575090565b611255600182612c1a565b60ff1667ffffffffffffffff81111561127057611270612cbb565b604051908082528060200260200182016040528015611299578160200160208202803683370190505b5091506112b3565b806112ab81612c3d565b915050611200565b60015b8160ff168160ff1610156113435760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16836112f9600184612c1a565b60ff168151811061130c5761130c612c8c565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101909101528061133b81612c3d565b9150506112b6565b505090565b84603c6113558260201c90565b61ffff16146113a65760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610575565b60006113b28784612422565b60008181526006602052604090205490915069ffffffffffffffffffff161561141d5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610575565b61142a8787878787612483565b3360009081526002602052604090205464ffffffffff16806114b45760405162461bcd60e51b815260206004820152602f60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465722e00000000000000000000000000000000006064820152608401610575565b60006114c261096042612bb0565b9050603089901c64ffffffffff1681106115445760405162461bcd60e51b815260206004820152602560248201527f43616e6e6f74206c6f636b20626563617573652065787069726554732069732060448201527f736f6f6e2e0000000000000000000000000000000000000000000000000000006064820152608401610575565b64ffffffffff82811660108b901b65ff000000000016179060588b901c1660d08b901c6115719190612c03565b65ffffffffffff821660009081526004602052604081208054909190611598908490612c03565b909155505060008481526006602052604080822080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001664ffffffffff8716602887901b69ffffffffff00000000001617179055518b917fbfb879c34323c5601fafe832c3a8a1e31e12c288695838726ddeada86034edb491a250505050505050505050565b6000821161166f5760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f7369746976650000000000000000006044820152606401610575565b8064ffffffffff81166116c45760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420757365203020617320706f6f6c20696e6465780000000000006044820152606401610575565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1633146117655760405162461bcd60e51b815260206004820152602160248201527f4e6565642074686520706f6f6c206f776e657220617320746865207369676e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610575565b65ffffffffffff82166000908152600460205260408120805485929061178c908490612c03565b909155505060ff602883901c811660008181526020819052604090205490916108739173ffffffffffffffffffffffffffffffffffffffff16903390879085146122d3565b7940000000000000000000000000000000000000000000000000008616151560006117fc8885612422565b60008181526006602052604090205490915069ffffffffffffffffffff16806118675760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610575565b4260308a901c64ffffffffff16116118c15760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f742072656c656173652062656361757365206578706972656400006044820152606401610575565b6118cf89858a8a8a8a611e20565b600082815260066020526040812080547fffffffffffffffffffffffffffffffffffffffffffff0000000000000000000016905561190d8a60181c90565b9050600060588b901c64ffffffffff166119278c60d01c90565b6119319190612c03565b9050846119a95760006119438c6127f4565b905061194f8183612c03565b915080600460006119758f600064ffffffffff1660109190911b65ff0000000000161790565b65ffffffffffff1665ffffffffffff16815260200190815260200160002060008282546119a29190612bb0565b9091555050505b60ff8083166000818152602081905260409020546119e49273ffffffffffffffffffffffffffffffffffffffff9091169189918591146122d3565b6040518b907ffa628b578e095243f0544bfad9255f49d79d03a5bbf6c85875d05a215e247ad290600090a25050505050505050505050565b6000611a288383612422565b60008181526006602052604090205490915069ffffffffffffffffffff1680611a935760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610575565b42602882901c64ffffffffff1610611aed5760405162461bcd60e51b815260206004820152601260248201527f53776170207374696c6c20696e206c6f636b00000000000000000000000000006044820152606401610575565b64ffffffffff818116601086901b65ff0000000000161790605886901c1660d086901c611b1a9190612c03565b65ffffffffffff821660009081526004602052604081208054909190611b41908490612bb0565b90915550505060009182525060066020526040902080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001690555050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580611bd2575060ff8216155b15611be257600092505050611c0a565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b73ffffffffffffffffffffffffffffffffffffffff8416611c735760405162461bcd60e51b815260206004820152601360248201527f546f6b656e206e6f7420737570706f72746564000000000000000000000000006044820152606401610575565b60008211611cc35760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610575565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152306044830152606480830186905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790529151600092839290881691611d609190612b1b565b6000604051808303816000865af19150503d8060008114611d9d576040519150601f19603f3d011682016040523d82523d6000602084013e611da2565b606091505b5091509150818015611dcc575080511580611dcc575080806020019051810190611dcc91906128aa565b611e185760405162461bcd60e51b815260206004820152601360248201527f7472616e7366657246726f6d206661696c6564000000000000000000000000006044820152606401610575565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116611e835760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610575565b79080000000000000000000000000000000000000000000000000086161515600887901c61ffff1660c3141561207557600081611ee0577f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000611f02565b7f1954524f4e205369676e6564204d6573736167653a0a35330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018990527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606089901b166059820152606d01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015611fea573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461206e5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610575565b5050611e18565b60008115612167576040517f19457468657265756d205369676e6564204d6573736167653a0a333200000000906120e0908a908a9060200191825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905280516020918201207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090931690820152603c810191909152605c016040516020818303038152906040528051906020012090506121fc565b6121718860201c90565b61ffff1660c314156121c2578660155260416020538760005260356000206020527ff6ea10de668a877958d46ed7d53eaf47124fda9bee9423390a28c203556a2e55600052604060002090506121fc565b5060148690526000878152603481206020527fd23291d9d999318ac3ed13f43ac8003d6fbd69a4b532aeec9ffad516010a208c8152604090205b60408051600081526020810180835283905260ff861691810191909152606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561224f573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a5d5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610575565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152604480830186905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052915160009283929088169161236a9190612b1b565b6000604051808303816000865af19150503d80600081146123a7576040519150601f19603f3d011682016040523d82523d6000602084013e6123ac565b606091505b50915091508180156123d65750805115806123d65750808060200190518101906123d691906128aa565b611e185760405162461bcd60e51b815260206004820152600f60248201527f7472616e73666572206661696c656400000000000000000000000000000000006044820152606401610575565b6000828260405160200161246592919091825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b60405160208183030381529060405280519060200120905092915050565b73ffffffffffffffffffffffffffffffffffffffff81166124e65760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610575565b79080000000000000000000000000000000000000000000000000085161515600886901c61ffff1660c314156126ad57600081612543577f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000612565565b7f1954524f4e205369676e6564204d6573736167653a0a33330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018890526059015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015612622573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146126a65760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610575565b50506111f4565b80156126ee576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101879052600090605c0161259c565b6000868152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff87169084015260608301889052608083018790529160019060a0016020604051602081039080840390855afa158015612770573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614610a5d5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610575565b6000611c0a6103e860d084901c612bc8565b803573ffffffffffffffffffffffffffffffffffffffff8116811461282a57600080fd5b919050565b803564ffffffffff8116811461282a57600080fd5b803560ff8116811461282a57600080fd5b60006020828403121561286757600080fd5b61287082612806565b9392505050565b6000806040838503121561288a57600080fd5b61289383612806565b91506128a160208401612806565b90509250929050565b6000602082840312156128bc57600080fd5b815161287081612cea565b6000602082840312156128d957600080fd5b5035919050565b600080604083850312156128f357600080fd5b823591506128a160208401612806565b600080600080600060a0868803121561291b57600080fd5b85359450602086013593506040860135925061293960608701612844565b915061294760808701612806565b90509295509295909350565b60008060008060008060c0878903121561296c57600080fd5b86359550602087013594506040870135935061298a60608801612844565b925061299860808801612806565b91506129a660a08801612806565b90509295509295509295565b60008060008060008060c087890312156129cb57600080fd5b8635955060208701359450604087013593506129e960608801612844565b92506129f760808801612806565b915060a0870135612a0781612cea565b809150509295509295509295565b600080600080600060a08688031215612a2d57600080fd5b853594506020860135935060408601359250612a4b60608701612844565b9150608086013578ffffffffffffffffffffffffffffffffffffffffffffffffff81168114612a7957600080fd5b809150509295509295909350565b60008060408385031215612a9a57600080fd5b823591506128a16020840161282f565b60008060408385031215612abd57600080fd5b82359150602083013565ffffffffffff81168114612ada57600080fd5b809150509250929050565b600060208284031215612af757600080fd5b6128708261282f565b600060208284031215612b1257600080fd5b61287082612844565b6000825160005b81811015612b3c5760208186018101518583015201612b22565b81811115612b4b576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015612ba457835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101612b72565b50909695505050505050565b60008219821115612bc357612bc3612c5d565b500190565b600082612bfe577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082821015612c1557612c15612c5d565b500390565b600060ff821660ff841680821015612c3457612c34612c5d565b90039392505050565b600060ff821660ff811415612c5457612c54612c5d565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114612cf857600080fd5b5056fea164736f6c6343000806000a";

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
