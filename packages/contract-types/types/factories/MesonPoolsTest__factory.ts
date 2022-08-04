/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonPoolsTest,
  MesonPoolsTestInterface,
} from "../MesonPoolsTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "premiumManager",
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
  "0x60806040523480156200001157600080fd5b506040516200242f3803806200242f833981016040819052620000349162000124565b6200004182600162000068565b600680546001600160a01b0319166001600160a01b0392909216919091179055506200015c565b60ff8116620000bd5760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b80516001600160a01b03811681146200011f57600080fd5b919050565b600080604083850312156200013857600080fd5b620001438362000107565b9150620001536020840162000107565b90509250929050565b6122c3806200016c6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063be18e8a411610097578063f1d2ec1d11610066578063f1d2ec1d146102c6578063f7208175146102d9578063f7888aec14610316578063ff3787191461032957600080fd5b8063be18e8a414610260578063ce7f79b914610273578063ce92474314610286578063eba7fb771461029957600080fd5b806389a734c0116100d357806389a734c0146101a45780638f487dc9146101ff57806391cc39d014610212578063b002249d1461024b57600080fd5b80632335093c146100fa57806337b90a4f1461014a57806360a2da981461015f575b600080fd5b610133610108366004611f21565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff90911681526020015b60405180910390f35b61015d61015836600461206a565b610362565b005b61017261016d366004611f98565b61051f565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835264ffffffffff909116602083015201610141565b6101da6101b23660046120a5565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610141565b61015d61020d36600461206a565b61057a565b61023d6102203660046120cc565b60281b65ff00000000001660009081526004602052604090205490565b604051908152602001610141565b610253610835565b6040516101419190612122565b61015d61026e366004611fbb565b610982565b61015d61028136600461206a565b610c59565b61015d61029436600461200b565b610e0b565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610141565b61015d6102d4366004611f98565b611064565b6103006102e7366004611f21565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff9091168152602001610141565b61023d610324366004611f43565b6111c8565b6101da6103373660046120cc565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600082116103b75760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064015b60405180910390fd5b8064ffffffffff811661040c5760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420757365203020617320706f6f6c20696e64657800000000000060448201526064016103ae565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1633146104ad5760405162461bcd60e51b815260206004820152602160248201527f4e6565642074686520706f6f6c206f776e657220617320746865207369676e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016103ae565b65ffffffffffff8216600090815260046020526040812080548592906104d490849061217c565b909155505060ff602883901c811660008181526020819052604090205490916105199173ffffffffffffffffffffffffffffffffffffffff1690339087908514611258565b50505050565b600080600061052e8585611468565b60009081526005602090815260408083205464ffffffffff8082168552600390935292205473ffffffffffffffffffffffffffffffffffffffff169760289290921c1695509350505050565b600082116105ca5760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064016103ae565b338164ffffffffff81166106205760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420757365203020617320706f6f6c20696e64657800000000000060448201526064016103ae565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff161561069a5760405162461bcd60e51b815260206004820152601d60248201527f506f6f6c20696e64657820616c7265616479207265676973746572656400000060448201526064016103ae565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205464ffffffffff161561073a5760405162461bcd60e51b815260206004820152602160248201527f5369676e6572206164647265737320616c72656164792072656769737465726560448201527f640000000000000000000000000000000000000000000000000000000000000060648201526084016103ae565b64ffffffffff8116600081815260036020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff881690811790915583526002825280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001690941790935565ffffffffffff861682526004905290812080548692906107e990849061217c565b909155505060ff602884901c8116600081815260208190526040902054909161082e9173ffffffffffffffffffffffffffffffffffffffff1690859088908514611258565b5050505050565b606060015b6101008160ff1610156108ed5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff166108db578060ff1660011415610884575090565b61088f6001826121e6565b60ff1667ffffffffffffffff8111156108aa576108aa612287565b6040519080825280602002602001820160405280156108d3578160200160208202803683370190505b5091506108ed565b806108e581612209565b91505061083a565b60015b8160ff168160ff16101561097d5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16836109336001846121e6565b60ff168151811061094657610946612258565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101909101528061097581612209565b9150506108f0565b505090565b84603c61098f8260201c90565b61ffff16146109e05760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e00000000000000000060448201526064016103ae565b60006109ec8784611468565b60008181526005602052604090205490915069ffffffffffffffffffff1615610a575760405162461bcd60e51b815260206004820152601360248201527f5377617020616c7265616479206578697374730000000000000000000000000060448201526064016103ae565b610a6487878787876114c9565b3360009081526002602052604090205464ffffffffff1680610aee5760405162461bcd60e51b815260206004820152602f60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465722e000000000000000000000000000000000060648201526084016103ae565b6000610afc6109604261217c565b9050603089901c64ffffffffff168110610b7e5760405162461bcd60e51b815260206004820152602560248201527f43616e6e6f74206c6f636b20626563617573652065787069726554732069732060448201527f736f6f6e2e00000000000000000000000000000000000000000000000000000060648201526084016103ae565b64ffffffffff82811660108b901b65ff000000000016179060588b901c1660d08b901c610bab91906121cf565b65ffffffffffff821660009081526004602052604081208054909190610bd29084906121cf565b909155505060008481526005602052604080822080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001664ffffffffff8716602887901b69ffffffffff00000000001617179055518b917fbfb879c34323c5601fafe832c3a8a1e31e12c288695838726ddeada86034edb491a250505050505050505050565b60008211610ca95760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064016103ae565b8064ffffffffff8116610cfe5760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420757365203020617320706f6f6c20696e64657800000000000060448201526064016103ae565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff163314610d9f5760405162461bcd60e51b815260206004820152602160248201527f4e6565642074686520706f6f6c206f776e657220617320746865207369676e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016103ae565b65ffffffffffff821660009081526004602052604081208054859290610dc69084906121cf565b909155505060ff602883901c811660008181526020819052604090205490916105199173ffffffffffffffffffffffffffffffffffffffff1690339087908514611844565b794000000000000000000000000000000000000000000000000000861615801590610e3857610e38611993565b6000610e448885611468565b60008181526005602052604090205490915069ffffffffffffffffffff1680610eaf5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016103ae565b4260308a901c64ffffffffff1611610f095760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f742072656c6561736520626563617573652065787069726564000060448201526064016103ae565b610f1789858a8a8a8a611a22565b600082815260056020526040812080547fffffffffffffffffffffffffffffffffffffffffffff00000000000000000000169055610f558a60181c90565b9050600060588b901c64ffffffffff16610f6f8c60d01c90565b610f7991906121cf565b905084610ff1576000610f8b8c611ed5565b9050610f9781836121cf565b91508060046000610fbd8f600064ffffffffff1660109190911b65ff0000000000161790565b65ffffffffffff1665ffffffffffff1681526020019081526020016000206000828254610fea919061217c565b9091555050505b60ff80831660008181526020819052604090205461102c9273ffffffffffffffffffffffffffffffffffffffff909116918991859114611844565b6040518b907ffa628b578e095243f0544bfad9255f49d79d03a5bbf6c85875d05a215e247ad290600090a25050505050505050505050565b60006110708383611468565b60008181526005602052604090205490915069ffffffffffffffffffff16806110db5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016103ae565b42602882901c64ffffffffff16106111355760405162461bcd60e51b815260206004820152601260248201527f53776170207374696c6c20696e206c6f636b000000000000000000000000000060448201526064016103ae565b64ffffffffff818116601086901b65ff0000000000161790605886901c1660d086901c61116291906121cf565b65ffffffffffff82166000908152600460205260408120805490919061118990849061217c565b90915550505060009182525060056020526040902080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001690555050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff1680158061121a575060ff8216155b1561122a57600092505050611252565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b73ffffffffffffffffffffffffffffffffffffffff84166112bb5760405162461bcd60e51b815260206004820152601360248201527f546f6b656e206e6f7420737570706f727465640000000000000000000000000060448201526064016103ae565b6000821161130b5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064016103ae565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152306044830152606480830186905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905291516000928392908816916113a891906120e7565b6000604051808303816000865af19150503d80600081146113e5576040519150601f19603f3d011682016040523d82523d6000602084013e6113ea565b606091505b50915091508180156114145750805115806114145750808060200190518101906114149190611f76565b6114605760405162461bcd60e51b815260206004820152601360248201527f7472616e7366657246726f6d206661696c65640000000000000000000000000060448201526064016103ae565b505050505050565b600082826040516020016114ab92919091825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b60405160208183030381529060405280519060200120905092915050565b73ffffffffffffffffffffffffffffffffffffffff811661152c5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016103ae565b79080000000000000000000000000000000000000000000000000085161515600886901c61ffff1660c314156116f357600081611589577f1954524f4e205369676e6564204d6573736167653a0a33320a000000000000006115ab565b7f1954524f4e205369676e6564204d6573736167653a0a33330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018890526059015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015611668573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146116ec5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103ae565b505061082e565b8015611734576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101879052600090605c016115e2565b6000868152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff87169084015260608301889052608083018790529160019060a0016020604051602081039080840390855afa1580156117b6573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461183a5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103ae565b5050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152604480830186905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908816916118db91906120e7565b6000604051808303816000865af19150503d8060008114611918576040519150601f19603f3d011682016040523d82523d6000602084013e61191d565b606091505b50915091508180156119475750805115806119475750808060200190518101906119479190611f76565b6114605760405162461bcd60e51b815260206004820152600f60248201527f7472616e73666572206661696c6564000000000000000000000000000000000060448201526064016103ae565b60065473ffffffffffffffffffffffffffffffffffffffff163314611a205760405162461bcd60e51b815260206004820152602160248201527f43616c6c6572206973206e6f7420746865207072656d69756d206d616e61676560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016103ae565b565b73ffffffffffffffffffffffffffffffffffffffff8116611a855760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016103ae565b79080000000000000000000000000000000000000000000000000086161515600887901c61ffff1660c31415611c7757600081611ae2577f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000611b04565b7f1954524f4e205369676e6564204d6573736167653a0a35330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018990527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606089901b166059820152606d01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015611bec573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611c705760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103ae565b5050611460565b60008115611d69576040517f19457468657265756d205369676e6564204d6573736167653a0a33320000000090611ce2908a908a9060200191825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905280516020918201207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090931690820152603c810191909152605c01604051602081830303815290604052805190602001209050611dfe565b611d738860201c90565b61ffff1660c31415611dc4578660155260416020538760005260356000206020527ff6ea10de668a877958d46ed7d53eaf47124fda9bee9423390a28c203556a2e5560005260406000209050611dfe565b5060148690526000878152603481206020527fd23291d9d999318ac3ed13f43ac8003d6fbd69a4b532aeec9ffad516010a208c8152604090205b60408051600081526020810180835283905260ff861691810191909152606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611e51573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461183a5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103ae565b60006112526103e860d084901c612194565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f0b57600080fd5b919050565b803560ff81168114611f0b57600080fd5b600060208284031215611f3357600080fd5b611f3c82611ee7565b9392505050565b60008060408385031215611f5657600080fd5b611f5f83611ee7565b9150611f6d60208401611ee7565b90509250929050565b600060208284031215611f8857600080fd5b81518015158114611f3c57600080fd5b60008060408385031215611fab57600080fd5b82359150611f6d60208401611ee7565b600080600080600060a08688031215611fd357600080fd5b853594506020860135935060408601359250611ff160608701611f10565b9150611fff60808701611ee7565b90509295509295909350565b60008060008060008060c0878903121561202457600080fd5b86359550602087013594506040870135935061204260608801611f10565b925061205060808801611ee7565b915061205e60a08801611ee7565b90509295509295509295565b6000806040838503121561207d57600080fd5b82359150602083013565ffffffffffff8116811461209a57600080fd5b809150509250929050565b6000602082840312156120b757600080fd5b813564ffffffffff81168114611f3c57600080fd5b6000602082840312156120de57600080fd5b611f3c82611f10565b6000825160005b8181101561210857602081860181015185830152016120ee565b81811115612117576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561217057835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010161213e565b50909695505050505050565b6000821982111561218f5761218f612229565b500190565b6000826121ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000828210156121e1576121e1612229565b500390565b600060ff821660ff84168082101561220057612200612229565b90039392505050565b600060ff821660ff81141561222057612220612229565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000806000a";

type MesonPoolsTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonPoolsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonPoolsTest__factory extends ContractFactory {
  constructor(...args: MesonPoolsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    token: string,
    premiumManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonPoolsTest> {
    return super.deploy(
      token,
      premiumManager,
      overrides || {}
    ) as Promise<MesonPoolsTest>;
  }
  getDeployTransaction(
    token: string,
    premiumManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, premiumManager, overrides || {});
  }
  attach(address: string): MesonPoolsTest {
    return super.attach(address) as MesonPoolsTest;
  }
  connect(signer: Signer): MesonPoolsTest__factory {
    return super.connect(signer) as MesonPoolsTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonPoolsTestInterface {
    return new utils.Interface(_abi) as MesonPoolsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonPoolsTest {
    return new Contract(address, _abi, signerOrProvider) as MesonPoolsTest;
  }
}
