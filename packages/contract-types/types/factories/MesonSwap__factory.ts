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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "getSwap",
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
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "requestSwap",
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
  "0x608060405234801561001057600080fd5b50611785806100206000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806394149c1a1161008c578063b3df5b3611610066578063b3df5b3614610285578063f7888aec146102e0578063ff37871914610314578063ffa96ec41461034d57600080fd5b806394149c1a1461022f578063a0f1d35f1461025d578063b002249d1461027057600080fd5b80633da0e66e116100bd5780633da0e66e1461018657806354d6a2b7146102095780637c8501871461021c57600080fd5b80631aba3a55146100e45780632217d483146101265780632335093c1461013b575b600080fd5b61010b6100f23660046113e3565b60046020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b610139610134366004611455565b610360565b005b6101746101493660046113e3565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205460ff1690565b60405160ff909116815260200161011d565b6101dc610194366004611455565b60009081526007602090815260408083205464ffffffffff8116845260059092529091205473ffffffffffffffffffffffffffffffffffffffff60289290921c821692911690565b6040805173ffffffffffffffffffffffffffffffffffffffff93841681529290911660208301520161011d565b610139610217366004611455565b61049c565b61013961022a366004611491565b610629565b6040517f8000003c00000000000000000000000000000000000000000000000000000000815260200161011d565b61013961026b36600461146e565b610806565b610278610965565b60405161011d91906115be565b6102bb61029336600461154d565b60056020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011d565b6102f36102ee366004611405565b610ab6565b6040516fffffffffffffffffffffffffffffffff909116815260200161011d565b6102bb610322366004611568565b60ff1660009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b61013961035b3660046114ed565b610b27565b600061036e82600354610d3a565b60008181526007602052604090205490915078ffffffffffffffffffffffffffffffffffffffffffffffffff16156103ed5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c7265616479206578697374730000000000000000000000000060448201526064015b60405180910390fd5b600033600083815260076020526040812080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffff0000000000602885901b161790559091508061045285610dc2565b91509150610461818484610f43565b6040518481527fa67aeefca6ffac499b56c6e714636f7ade5d82fde82aef50665ad3e88be5cb4b906020015b60405180910390a15050505050565b60006104aa82600354610d3a565b60008181526007602052604090205490915078ffffffffffffffffffffffffffffffffffffffffffffffffff16806105245760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016103e4565b4264ffffffffff16603084901c64ffffffffff16106105855760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b656400000000000000000000000060448201526064016103e4565b60ff8316600090815260016020908152604080832054858452600790925290912080547fffffffffffffff0000000000000000000000000000000000000000000000000016905573ffffffffffffffffffffffffffffffffffffffff602883901c811691166105f98183608088901c610ff7565b6040518481527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200161048d565b60035460006106388883610d3a565b600081815260076020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000811690915590915078ffffffffffffffffffffffffffffffffffffffffffffffffff16831561074957601581815260108051908b905260005191519091906106b6858c888d8d8d8961117d565b65ffffffffffff81166000908152600660205260409020546106ea906fffffffffffffffffffffffffffffffff1683611312565b65ffffffffffff91909116600090815260066020526040902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff909216919091179055506107c89050565b6107778289858a8a8a60288878ffffffffffffffffffffffffffffffffffffffffffffffffff16901c61117d565b60ff891660009081526001602090815260408083205464ffffffffff851684526005909252909120546107c89173ffffffffffffffffffffffffffffffffffffffff908116911660808c901c610ff7565b6040518281527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d20629060200160405180910390a1505050505050505050565b60008281526007602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff168061087d5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016103e4565b64ffffffffff8116156108d25760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f76696465720060448201526064016103e4565b60008381526007602090815260409182902080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff86161717905590518481527f9dadb60bc000bbd7b49430723ed56b6aa35909dcab91ec2cb17ed5da7ae4ffd6910160405180910390a1505050565b606060015b6101008160ff161015610a1d5760ff811660009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff16610a0b578060ff16600114156109b4575090565b6109bf60018261166c565b60ff1667ffffffffffffffff8111156109da576109da61170d565b604051908082528060200260200182016040528015610a03578160200160208202803683370190505b509150610a1d565b80610a158161168f565b91505061096a565b60015b8160ff168160ff161015610ab15760ff811660009081526001602081905260409091205473ffffffffffffffffffffffffffffffffffffffff16908490610a67908461166c565b60ff1681518110610a7a57610a7a6116de565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610aa98161168f565b915050610a20565b505090565b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600260209081526040808320549385168352600482528083205464ffffffffff1660289490941b65ff0000000000169390931782526006905220546fffffffffffffffffffffffffffffffff165b92915050565b6000610b3585600354610d3a565b60008181526007602052604090205490915078ffffffffffffffffffffffffffffffffffffffffffffffffff1615610baf5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c7265616479206578697374730000000000000000000000000060448201526064016103e4565b6020828152600751601b51604080516000815293840180825285905260ff83169084015260608301879052608083018690529091849060019060a0016020604051602081039080840390855afa158015610c0d573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610c915760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103e4565b600084815260076020526040812080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff841617905580610cec8a610dc2565b91509150610cfb818584610f43565b6040518681527fd7a1fd45274eb446b18cdf83061f521e75114fa2c53ecb42bd853bba72097bab9060200160405180910390a150505050505050505050565b604080518082018252601c81527f53776170526571756573742875696e7432353620656e636f646564290000000060209182015281517f9e30b23744f36fc02f504355e3ffa6d1fda34e5ac9e3c78a1d6e7dffbc9c57266000818152928690529282206022529091906019835360018053836002526042600020925080604052505092915050565b608081901c600081610e3c5760405162461bcd60e51b815260206004820152602560248201527f5377617020616d6f756e74206d7573742062652067726561746572207468616e60448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016103e4565b5060ff821660009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff16603083901c42610e78610e108261164c565b64ffffffffff168264ffffffffff1611610ed45760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c790000000000000000000000000060448201526064016103e4565b610ee0611c208261164c565b64ffffffffff168264ffffffffff1610610f3c5760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c617465000000000000000000000000000060448201526064016103e4565b5050915091565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610fb957600080fd5b505af1158015610fcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff19190611438565b50505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052915160009283928716916110be9190611583565b6000604051808303816000865af19150503d80600081146110fb576040519150601f19603f3d011682016040523d82523d6000602084013e611100565b606091505b509150915081801561112a57508051158061112a57508080602001905181019061112a9190611438565b6111765760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c6564000000000000000000000000000000000060448201526064016103e4565b5050505050565b60006040518060600160405280602b815260200161174e602b91398051602090910120905073ffffffffffffffffffffffffffffffffffffffff82166112055760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016103e4565b600060405182600052896020528860405260606000206022526019600053600180536002889052604260009081209082526020820160408181529082905260ff8716908301526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015611283573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146113075760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103e4565b505050505050505050565b60006fffffffffffffffffffffffffffffffff83166113318385611618565b9150816fffffffffffffffffffffffffffffffff161015610b215760405162461bcd60e51b815260206004820152600860248201527f6f766572666c6f7700000000000000000000000000000000000000000000000060448201526064016103e4565b803573ffffffffffffffffffffffffffffffffffffffff811681146113b857600080fd5b919050565b803564ffffffffff811681146113b857600080fd5b803560ff811681146113b857600080fd5b6000602082840312156113f557600080fd5b6113fe82611394565b9392505050565b6000806040838503121561141857600080fd5b61142183611394565b915061142f60208401611394565b90509250929050565b60006020828403121561144a57600080fd5b81516113fe8161173c565b60006020828403121561146757600080fd5b5035919050565b6000806040838503121561148157600080fd5b8235915061142f602084016113bd565b60008060008060008060c087890312156114aa57600080fd5b863595506020870135945060408701359350606087013592506114cf608088016113d2565b915060a08701356114df8161173c565b809150509295509295509295565b6000806000806080858703121561150357600080fd5b843593506020850135925060408501359150606085013579ffffffffffffffffffffffffffffffffffffffffffffffffffff8116811461154257600080fd5b939692955090935050565b60006020828403121561155f57600080fd5b6113fe826113bd565b60006020828403121561157a57600080fd5b6113fe826113d2565b6000825160005b818110156115a4576020818601810151858301520161158a565b818111156115b3576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561160c57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016115da565b50909695505050505050565b60006fffffffffffffffffffffffffffffffff808316818516808303821115611643576116436116af565b01949350505050565b600064ffffffffff808316818516808303821115611643576116436116af565b600060ff821660ff841680821015611686576116866116af565b90039392505050565b600060ff821660ff8114156116a6576116a66116af565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461174a57600080fd5b5056fe5377617052656c656173652862797465733332207377617049642c627974657320726563697069656e7429a164736f6c6343000806000a";

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
