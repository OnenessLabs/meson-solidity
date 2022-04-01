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
  "0x60806040523480156200001157600080fd5b5060405162001d9538038062001d958339810160408190526200003491620000e7565b6200004181600162000048565b5062000119565b60ff81166200009d5760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b600060208284031215620000fa57600080fd5b81516001600160a01b03811681146200011257600080fd5b9392505050565b611c6c80620001296000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063b3df5b3611610097578063eba7fb7711610066578063eba7fb77146102d6578063f1d2ec1d14610303578063f7888aec14610316578063ff3787191461032957600080fd5b8063b3df5b361461021c578063be18e8a414610277578063ce9247431461028a578063e16a567d1461029d57600080fd5b806360a2da98116100d357806360a2da981461019c5780638f487dc9146101e1578063903d4296146101f4578063b002249d1461020757600080fd5b80631aba3a55146100fa5780632335093c1461013c57806337b90a4f14610187575b600080fd5b6101216101083660046118e2565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b61017561014a3660046118e2565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff9091168152602001610133565b61019a610195366004611a2b565b610362565b005b6101af6101aa366004611959565b61041f565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835264ffffffffff909116602083015201610133565b61019a6101ef366004611a2b565b61047a565b61019a610202366004611a66565b610706565b61020f6107fd565b6040516101339190611b06565b61025261022a366004611a89565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610133565b61019a61028536600461197c565b61094a565b61019a6102983660046119cc565b610c05565b6102c86102ab366004611ab0565b60281b65ff00000000001660009081526004602052604090205490565b604051908152602001610133565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610133565b61019a610311366004611959565b610d40565b6102c8610324366004611904565b610e88565b610252610337366004611ab0565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600082116103b75760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064015b60405180910390fd5b65ffffffffffff8116600090815260046020526040812080548492906103de908490611b60565b909155505060ff602882901c1660009081526020819052604090205461041b9073ffffffffffffffffffffffffffffffffffffffff163384610f18565b5050565b600080600061042e8585611127565b60009081526005602090815260408083205464ffffffffff8082168552600390935292205473ffffffffffffffffffffffffffffffffffffffff169760289290921c1695509350505050565b600082116104ca5760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064016103ae565b338164ffffffffff81166105205760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f742075736520302061732070726f766964657220696e646578000060448201526064016103ae565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff161561059a5760405162461bcd60e51b815260206004820152601860248201527f496e64657820616c72656164792072656769737465726564000000000000000060448201526064016103ae565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205464ffffffffff16156106145760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c7265616479207265676973746572656400000000000060448201526064016103ae565b64ffffffffff8116600081815260036020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff881690811790915583526002825280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001690941790935565ffffffffffff861682526004905290812080548692906106c3908490611b60565b909155505060ff602884901c166000908152602081905260409020546107009073ffffffffffffffffffffffffffffffffffffffff168386610f18565b50505050565b3360008181526002602052604090205464ffffffffff16806107905760405162461bcd60e51b815260206004820152602e60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e64526567697374657200000000000000000000000000000000000060648201526084016103ae565b64ffffffffff8116602884901b65ff00000000001617600090815260046020526040812080548692906107c4908490611b78565b909155505060ff83166000908152602081905260409020546107009073ffffffffffffffffffffffffffffffffffffffff168386611188565b606060015b6101008160ff1610156108b55760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff166108a3578060ff166001141561084c575090565b610857600182611b8f565b60ff1667ffffffffffffffff81111561087257610872611c30565b60405190808252806020026020018201604052801561089b578160200160208202803683370190505b5091506108b5565b806108ad81611bb2565b915050610802565b60015b8160ff168160ff1610156109455760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16836108fb600184611b8f565b60ff168151811061090e5761090e611c01565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101909101528061093d81611bb2565b9150506108b8565b505090565b84603c6109578260201c90565b61ffff16146109a85760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e00000000000000000060448201526064016103ae565b60006109b48784611127565b60008181526005602052604090205490915069ffffffffffffffffffff1615610a1f5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c7265616479206578697374730000000000000000000000000060448201526064016103ae565b610a2c87878787876112d7565b3360009081526002602052604090205464ffffffffff1680610ab65760405162461bcd60e51b815260206004820152602f60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465722e000000000000000000000000000000000060648201526084016103ae565b6000610ac461096042611b60565b9050603089901c64ffffffffff168110610b465760405162461bcd60e51b815260206004820152602560248201527f43616e6e6f74206c6f636b20626563617573652065787069726554732069732060448201527f736f6f6e2e00000000000000000000000000000000000000000000000000000060648201526084016103ae565b65ff000000000060108a901b1664ffffffffff8316176000818152600460205260408120805460d08d901c9290610b7e908490611b78565b909155505060008481526005602052604080822080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001664ffffffffff8716602887901b69ffffffffff00000000001617179055518b917fbfb879c34323c5601fafe832c3a8a1e31e12c288695838726ddeada86034edb491a250505050505050505050565b6000610c118784611127565b60008181526005602052604090205490915069ffffffffffffffffffff1680610c7c5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016103ae565b610c8a8884898989896115a5565b600082815260056020526040812080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001690558080610cca8b60181c90565b60ff16815260208101919091526040016000205473ffffffffffffffffffffffffffffffffffffffff169050610d0a8185610d058c60d01c90565b611188565b60405189907ffa628b578e095243f0544bfad9255f49d79d03a5bbf6c85875d05a215e247ad290600090a2505050505050505050565b6000610d4c8383611127565b60008181526005602052604090205490915069ffffffffffffffffffff1680610db75760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016103ae565b42602882901c64ffffffffff1610610e115760405162461bcd60e51b815260206004820152601260248201527f53776170207374696c6c20696e206c6f636b000000000000000000000000000060448201526064016103ae565b65ff0000000000601085901b1664ffffffffff8216176000818152600460205260408120805460d088901c9290610e49908490611b60565b90915550505060009182525060056020526040902080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001690555050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580610eda575060ff8216155b15610eea57600092505050610f12565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610f7b5760405162461bcd60e51b815260206004820152601360248201527f546f6b656e206e6f7420737570706f727465640000000000000000000000000060448201526064016103ae565b60008111610fcb5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064016103ae565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152306044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905291516000928392908716916110689190611acb565b6000604051808303816000865af19150503d80600081146110a5576040519150601f19603f3d011682016040523d82523d6000602084013e6110aa565b606091505b50915091508180156110d45750805115806110d45750808060200190518101906110d49190611937565b6111205760405162461bcd60e51b815260206004820152601360248201527f7472616e7366657246726f6d206661696c65640000000000000000000000000060448201526064016103ae565b5050505050565b6000828260405160200161116a92919091825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b60405160208183030381529060405280519060200120905092915050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052915160009283929087169161121f9190611acb565b6000604051808303816000865af19150503d806000811461125c576040519150601f19603f3d011682016040523d82523d6000602084013e611261565b606091505b509150915081801561128b57508051158061128b57508080602001905181019061128b9190611937565b6111205760405162461bcd60e51b815260206004820152600f60248201527f7472616e73666572206661696c6564000000000000000000000000000000000060448201526064016103ae565b73ffffffffffffffffffffffffffffffffffffffff811661133a5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016103ae565b6113448560081c90565b61ffff1660c31415611496576040517f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000602082015260398101869052600090605901604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa15801561140c573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146114905760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103ae565b50611120565b6000858152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff86169084015260608301879052608083018690529160019060a0016020604051602081039080840390855afa158015611518573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461159c5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103ae565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff81166116085760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016103ae565b6116128660081c90565b61ffff1660c31415611790576040517f1954524f4e205369676e6564204d6573736167653a0a33320a000000000000006020820152603981018790527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b166059820152600090606d01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015611706573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461178a5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103ae565b506118a0565b601485905260008681526034812060209081527fd23291d9d999318ac3ed13f43ac8003d6fbd69a4b532aeec9ffad516010a208c8083526040808420815194855292840180825283905260ff86169084015260608301879052608083018690529160019060a0016020604051602081039080840390855afa158015611819573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461189d5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103ae565b50505b505050505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146118cc57600080fd5b919050565b803560ff811681146118cc57600080fd5b6000602082840312156118f457600080fd5b6118fd826118a8565b9392505050565b6000806040838503121561191757600080fd5b611920836118a8565b915061192e602084016118a8565b90509250929050565b60006020828403121561194957600080fd5b815180151581146118fd57600080fd5b6000806040838503121561196c57600080fd5b8235915061192e602084016118a8565b600080600080600060a0868803121561199457600080fd5b8535945060208601359350604086013592506119b2606087016118d1565b91506119c0608087016118a8565b90509295509295909350565b60008060008060008060c087890312156119e557600080fd5b863595506020870135945060408701359350611a03606088016118d1565b9250611a11608088016118a8565b9150611a1f60a088016118a8565b90509295509295509295565b60008060408385031215611a3e57600080fd5b82359150602083013565ffffffffffff81168114611a5b57600080fd5b809150509250929050565b60008060408385031215611a7957600080fd5b8235915061192e602084016118d1565b600060208284031215611a9b57600080fd5b813564ffffffffff811681146118fd57600080fd5b600060208284031215611ac257600080fd5b6118fd826118d1565b6000825160005b81811015611aec5760208186018101518583015201611ad2565b81811115611afb576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015611b5457835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611b22565b50909695505050505050565b60008219821115611b7357611b73611bd2565b500190565b600082821015611b8a57611b8a611bd2565b500390565b600060ff821660ff841680821015611ba957611ba9611bd2565b90039392505050565b600060ff821660ff811415611bc957611bc9611bd2565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000806000a";

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonPoolsTest> {
    return super.deploy(token, overrides || {}) as Promise<MesonPoolsTest>;
  }
  getDeployTransaction(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
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
