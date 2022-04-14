/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonTokenUpgradeable,
  MesonTokenUpgradeableInterface,
} from "../MesonTokenUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "batchMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c611d7b61004b600039600081816104b60152818161054c015281816106d101526107670152611d7b6000f3fe6080604052600436106100e85760003560e01c80634f1ef2861161008a578063a457c2d711610059578063a457c2d714610270578063a9059cbb14610290578063c4d66de8146102b0578063dd62ed3e146102d057600080fd5b80634f1ef286146101e557806370a08231146101f857806383b74baa1461023b57806395d89b411461025b57600080fd5b806323b872dd116100c657806323b872dd14610167578063313ce567146101875780633659cfe6146101a357806339509351146101c557600080fd5b806306fdde03146100ed578063095ea7b31461011857806318160ddd14610148575b600080fd5b3480156100f957600080fd5b50610102610323565b60405161010f9190611b49565b60405180910390f35b34801561012457600080fd5b50610138610133366004611a49565b6103b5565b604051901515815260200161010f565b34801561015457600080fd5b506099545b60405190815260200161010f565b34801561017357600080fd5b50610138610182366004611949565b6103cb565b34801561019357600080fd5b506040516004815260200161010f565b3480156101af57600080fd5b506101c36101be3660046118fb565b61049e565b005b3480156101d157600080fd5b506101386101e0366004611a49565b610670565b6101c36101f3366004611985565b6106b9565b34801561020457600080fd5b506101596102133660046118fb565b73ffffffffffffffffffffffffffffffffffffffff1660009081526097602052604090205490565b34801561024757600080fd5b506101c3610256366004611a73565b61087c565b34801561026757600080fd5b506101026109cc565b34801561027c57600080fd5b5061013861028b366004611a49565b6109db565b34801561029c57600080fd5b506101386102ab366004611a49565b610a99565b3480156102bc57600080fd5b506101c36102cb3660046118fb565b610aa6565b3480156102dc57600080fd5b506101596102eb366004611916565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260986020908152604080832093909416825291909152205490565b6060609a805461033290611c2d565b80601f016020809104026020016040519081016040528092919081815260200182805461035e90611c2d565b80156103ab5780601f10610380576101008083540402835291602001916103ab565b820191906000526020600020905b81548152906001019060200180831161038e57829003601f168201915b5050505050905090565b60006103c2338484610c6a565b50600192915050565b60006103d8848484610de9565b73ffffffffffffffffffffffffffffffffffffffff84166000908152609860209081526040808320338452909152902054828110156104845760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6104918533858403610c6a565b60019150505b9392505050565b3073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561054a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161047b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105bf7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146106485760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161047b565b61065181611050565b6040805160008082526020820190925261066d918391906110cd565b50565b33600081815260986020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916103c29185906106b4908690611be9565b610c6a565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156107655760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161047b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107da7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146108635760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161047b565b61086c82611050565b610878828260016110cd565b5050565b60ca5473ffffffffffffffffffffffffffffffffffffffff1633146108e35760405162461bcd60e51b815260206004820152601760248201527f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000604482015260640161047b565b60008251116109345760405162461bcd60e51b815260206004820152601560248201527f54617267657420617272617920697320656d7074790000000000000000000000604482015260640161047b565b6104008251106109865760405162461bcd60e51b815260206004820152601960248201527f54617267657420617272617920697320746f6f206c6172676500000000000000604482015260640161047b565b60005b82518110156109c7576109b58382815181106109a7576109a7611ce9565b602002602001015183611312565b806109bf81611c81565b915050610989565b505050565b6060609b805461033290611c2d565b33600090815260986020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915281205482811015610a825760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161047b565b610a8f3385858403610c6a565b5060019392505050565b60006103c2338484610de9565b600054610100900460ff16610ac15760005460ff1615610ac5565b303b155b610b375760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161047b565b600054610100900460ff16158015610b7657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b610bea6040518060400160405280600b81526020017f4d65736f6e20546f6b656e0000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d534e0000000000000000000000000000000000000000000000000000000000815250611418565b60c98054337fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560ca805490911673ffffffffffffffffffffffffffffffffffffffff8416179055801561087857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b73ffffffffffffffffffffffffffffffffffffffff8316610cf25760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161047b565b73ffffffffffffffffffffffffffffffffffffffff8216610d7b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161047b565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526098602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e725760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161047b565b73ffffffffffffffffffffffffffffffffffffffff8216610efb5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161047b565b73ffffffffffffffffffffffffffffffffffffffff831660009081526097602052604090205481811015610f975760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161047b565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260976020526040808220858503905591851681529081208054849290610fdb908490611be9565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161104191815260200190565b60405180910390a35b50505050565b60c95473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461066d5760405162461bcd60e51b815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015260640161047b565b600061110d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b9050611118846114a7565b6000835111806111255750815b15611136576111348484611581565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff1661130b5780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117815560405173ffffffffffffffffffffffffffffffffffffffff8316602482015261122c908690604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f3659cfe600000000000000000000000000000000000000000000000000000000179052611581565b5080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001681557f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff8381169116146113025760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201527f7572746865722075706772616465730000000000000000000000000000000000606482015260840161047b565b61130b85611690565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff82166113755760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161047b565b80609960008282546113879190611be9565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260976020526040812080548392906113c1908490611be9565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600054610100900460ff166114955760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161047b565b61149d6116dd565b610878828261175c565b803b61151b5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161047b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6060823b6115f75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e74726163740000000000000000000000000000000000000000000000000000606482015260840161047b565b6000808473ffffffffffffffffffffffffffffffffffffffff168460405161161f9190611b2d565b600060405180830381855af49150503d806000811461165a576040519150601f19603f3d011682016040523d82523d6000602084013e61165f565b606091505b50915091506116878282604051806060016040528060278152602001611d4860279139611800565b95945050505050565b611699816114a7565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff1661175a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161047b565b565b600054610100900460ff166117d95760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161047b565b81516117ec90609a906020850190611839565b5080516109c790609b906020840190611839565b6060831561180f575081610497565b82511561181f5782518084602001fd5b8160405162461bcd60e51b815260040161047b9190611b49565b82805461184590611c2d565b90600052602060002090601f01602090048101928261186757600085556118ad565b82601f1061188057805160ff19168380011785556118ad565b828001600101855582156118ad579182015b828111156118ad578251825591602001919060010190611892565b506118b99291506118bd565b5090565b5b808211156118b957600081556001016118be565b803573ffffffffffffffffffffffffffffffffffffffff811681146118f657600080fd5b919050565b60006020828403121561190d57600080fd5b610497826118d2565b6000806040838503121561192957600080fd5b611932836118d2565b9150611940602084016118d2565b90509250929050565b60008060006060848603121561195e57600080fd5b611967846118d2565b9250611975602085016118d2565b9150604084013590509250925092565b6000806040838503121561199857600080fd5b6119a1836118d2565b915060208084013567ffffffffffffffff808211156119bf57600080fd5b818601915086601f8301126119d357600080fd5b8135818111156119e5576119e5611d18565b611a15847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611b9a565b91508082528784828501011115611a2b57600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060408385031215611a5c57600080fd5b611a65836118d2565b946020939093013593505050565b60008060408385031215611a8657600080fd5b823567ffffffffffffffff80821115611a9e57600080fd5b818501915085601f830112611ab257600080fd5b8135602082821115611ac657611ac6611d18565b8160051b9250611ad7818401611b9a565b8281528181019085830185870184018b1015611af257600080fd5b600096505b84871015611b1c57611b08816118d2565b835260019690960195918301918301611af7565b509997909101359750505050505050565b60008251611b3f818460208701611c01565b9190910192915050565b6020815260008251806020840152611b68816040850160208701611c01565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611be157611be1611d18565b604052919050565b60008219821115611bfc57611bfc611cba565b500190565b60005b83811015611c1c578181015183820152602001611c04565b8381111561104a5750506000910152565b600181811c90821680611c4157607f821691505b60208210811415611c7b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611cb357611cb3611cba565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000806000a";

type MesonTokenUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonTokenUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonTokenUpgradeable__factory extends ContractFactory {
  constructor(...args: MesonTokenUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonTokenUpgradeable> {
    return super.deploy(overrides || {}) as Promise<MesonTokenUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonTokenUpgradeable {
    return super.attach(address) as MesonTokenUpgradeable;
  }
  connect(signer: Signer): MesonTokenUpgradeable__factory {
    return super.connect(signer) as MesonTokenUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonTokenUpgradeableInterface {
    return new utils.Interface(_abi) as MesonTokenUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonTokenUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MesonTokenUpgradeable;
  }
}