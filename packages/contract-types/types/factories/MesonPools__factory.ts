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
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "SwapLocked",
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
    name: "SwapReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
    inputs: [],
    name: "challenge",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "deposit",
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
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "token",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "lockingSwaps",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "until",
        type: "uint64",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "metaAmount",
        type: "uint128",
      },
      {
        internalType: "bytes32",
        name: "domainHash",
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
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "supportedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61010060405260526080818152906113bb60a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d457600080fd5b506112d7806100e46000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806394149c1a1161006657806394149c1a146101c4578063b3fb6564146101d9578063d2ef7398146100b6578063ec9b5b3a146101ec578063f7888aec146101ff57600080fd5b806308fab167146100a357806337858541146100b857806368c4ac26146100cb5780636bb39ae014610103578063721c5aff146101b1575b600080fd5b6100b66100b1366004611087565b61024b565b005b6100b66100c6366004611139565b6102a1565b6100ee6100d9366004611032565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6101666101113660046110d3565b600360208190526000918252604090912080546001820154600283015492909301546001600160a01b0391821693821692909116906001600160801b0381169067ffffffffffffffff600160801b9091041685565b604080516001600160a01b039687168152948616602086015292909416918301919091526001600160801b0316606082015267ffffffffffffffff909116608082015260a0016100fa565b6100b66101bf3660046110ec565b610560565b604051632000000f60e21b81526020016100fa565b6100b66101e7366004611087565b610873565b6100b66101fa3660046110d3565b610933565b61023361020d366004611054565b60026020908152600092835260408084209091529082529020546001600160801b031681565b6040516001600160801b0390911681526020016100fa565b6001600160a01b038216600090815260016020526040902054829060ff1661028e5760405162461bcd60e51b8152600401610285906111e8565b60405180910390fd5b3361029b81808686610b2c565b50505050565b6000878152600360208181526040808420815160a08101835281546001600160a01b0390811682526001830154811682860152600283015416928101929092528301546001600160801b03811660608301819052600160801b90910467ffffffffffffffff166080830152938b9052919052906103565760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b6044820152606401610285565b80606001516001600160801b0316866001600160801b031611156103d95760405162461bcd60e51b815260206004820152603460248201527f72656c6561736520616d6f756e742063616e6e6f742062652067726561746572604482015273081d1a185b881b1bd8dada5b99c8185b5bdd5b9d60621b6064820152608401610285565b6040516bffffffffffffffffffffffff19606089901b16602082015261042290899060340160405160208183030381529060405280519060200120878460000151888888610c20565b6040810151602082015160608301516001600160801b0390811690891610156104d1576001600160a01b03808316600090815260026020908152604080832093851683529290522054606084015161048d916001600160801b031690610488908b610dc7565b610dfa565b6001600160a01b03838116600090815260026020908152604080832093861683529290522080546001600160801b0319166001600160801b03929092169190911790555b60008a815260036020819052604090912080546001600160a01b031990811682556001820180548216905560028201805490911690550180546001600160c01b0319169055610521828a8a610e27565b6040518a81527fe8aa10932e72fe72aa2f3879a4dd799b95f5fbe728be1be0609e5baa14ec40f49060200160405180910390a150505050505050505050565b6001600160a01b038116600090815260016020526040902054819060ff1661059a5760405162461bcd60e51b8152600401610285906111e8565b6000836001600160801b0316116105f35760405162461bcd60e51b815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610285565b600085815260036020819052604090912001546001600160801b03161561065c5760405162461bcd60e51b815260206004820152601b60248201527f6c6f636b696e67207377617020616c72656164792065786973747300000000006044820152606401610285565b6001600160a01b0382166000908152600260209081526040808320338085529252909120546001600160801b03858116911610156106d35760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b6044820152606401610285565b6001600160a01b0380841660009081526002602090815260408083209385168352929052205461070d9085906001600160801b0316611261565b6001600160a01b0384811660008181526002602090815260408083208786168085529083529281902080546001600160801b0319166001600160801b03978816179055805160a081018252948b1685529084019190915282015290851660608201526080810161077f6104b04261123e565b67ffffffffffffffff908116909152600088815260036020818152604092839020855181546001600160a01b039182166001600160a01b0319918216178355928701516001830180549183169185169190911790558685015160028301805491909216931692909217909155606085015191018054608090950151909316600160801b026001600160c01b03199094166001600160801b0390911617929092179055517faad18fe672f0d6b379db88b0e1176f10cc003e9a4d8ed142a90c0b6f8bedb8de9061086390889084909182526001600160a01b0316602082015260400190565b60405180910390a1505050505050565b6001600160a01b038216600090815260016020526040902054829060ff166108ad5760405162461bcd60e51b8152600401610285906111e8565b6001600160a01b0383166000908152600260209081526040808320338085529252909120546108e5906001600160801b031684610dfa565b6001600160a01b03858116600090815260026020908152604080832093861683529290522080546001600160801b0319166001600160801b039290921691909117905561029b848285610f6f565b600081815260036020819052604090912001546001600160801b03166109915760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b6044820152606401610285565b600081815260036020818152604092839020835160a08101855281546001600160a01b03908116825260018301548116938201939093526002820154909216938201939093529101546001600160801b038116606083015267ffffffffffffffff600160801b9091048116608083018190524290911611610a545760405162461bcd60e51b815260206004820152601960248201527f5468652073776170206973207374696c6c20696e206c6f636b000000000000006044820152606401610285565b60408082015160608301516020808501516001600160a01b03808516600090815260028452868120918316815292529390205491929091610a9e906001600160801b031683610dfa565b6001600160a01b03938416600090815260026020818152604080842095909716835293845285822080546001600160801b0319166001600160801b0394909416939093179092559586526003918290529290942080546001600160a01b031990811682556001820180548216905592810180549093169092555090910180546001600160c01b031916905550565b6001600160a01b038083166000908152600260209081526040808320938716835292905220546001600160801b0380831691161015610b995760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b6044820152606401610285565b6001600160a01b03808316600090815260026020908152604080832093871683529290522054610bd2906001600160801b031682610dc7565b6001600160a01b03838116600090815260026020908152604080832093881683529290522080546001600160801b0319166001600160801b039290921691909117905561029b828583610e27565b6001600160a01b038416610c765760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610285565b60006040518060600160405280602b81526020016112a0602b91398051602091820120604080519283019190915281018990526060810188905260800160405160208183030381529060405280519060200120905060008682604051602001610cf692919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610d5e573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614610dbc5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610285565b505050505050505050565b60006001600160801b038316610ddd8385611261565b9150816001600160801b03161115610df457600080fd5b92915050565b60006001600160801b038316610e108385611213565b9150816001600160801b03161015610df457600080fd5b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526001600160801b038516604480840191909152845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691610ebe91906111ad565b6000604051808303816000865af19150503d8060008114610efb576040519150601f19603f3d011682016040523d82523d6000602084013e610f00565b606091505b5091509150818015610f2a575080511580610f2a575080806020019051810190610f2a91906110b1565b610f685760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610285565b5050505050565b6040516323b872dd60e01b81526001600160a01b0383811660048301523060248301526001600160801b03831660448301528416906323b872dd90606401602060405180830381600087803b158015610fc757600080fd5b505af1158015610fdb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029b91906110b1565b80356001600160a01b038116811461101657600080fd5b919050565b80356001600160801b038116811461101657600080fd5b60006020828403121561104457600080fd5b61104d82610fff565b9392505050565b6000806040838503121561106757600080fd5b61107083610fff565b915061107e60208401610fff565b90509250929050565b6000806040838503121561109a57600080fd5b6110a383610fff565b915061107e6020840161101b565b6000602082840312156110c357600080fd5b8151801515811461104d57600080fd5b6000602082840312156110e557600080fd5b5035919050565b6000806000806080858703121561110257600080fd5b8435935061111260208601610fff565b92506111206040860161101b565b915061112e60608601610fff565b905092959194509250565b600080600080600080600060e0888a03121561115457600080fd5b8735965061116460208901610fff565b95506111726040890161101b565b9450606088013593506080880135925060a0880135915060c088013560ff8116811461119d57600080fd5b8091505092959891949750929550565b6000825160005b818110156111ce57602081860181015185830152016111b4565b818111156111dd576000828501525b509190910192915050565b6020808252601190820152703ab739bab83837b93a32b2103a37b5b2b760791b604082015260600190565b60006001600160801b0380831681851680830382111561123557611235611289565b01949350505050565b600067ffffffffffffffff80831681851680830382111561123557611235611289565b60006001600160801b038381169083168181101561128157611281611289565b039392505050565b634e487b7160e01b600052601160045260246000fdfe5377617052656c656173652862797465733332207377617049642c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

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
