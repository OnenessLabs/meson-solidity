/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonSwapTest, MesonSwapTestInterface } from "../MesonSwapTest";

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
      {
        indexed: false,
        internalType: "uint256",
        name: "ts",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inToken",
        type: "address",
      },
    ],
    name: "SwapPosted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "addTokenToSwapList",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "hasSwap",
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
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
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
    name: "postSwap",
    outputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
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
    name: "requests",
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
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "totalDemandFor",
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
        name: "token",
        type: "address",
      },
    ],
    name: "totalSupplyFor",
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
];

const _bytecode =
  "0x61010060405260526080818152906113a060a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d457600080fd5b506112bc806100e46000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639d866985116100665780639d86698514610161578063a8f81b1a146101e4578063bcc20ff61461020d578063d23d1c7614610220578063d541beb31461023357600080fd5b80633ce758b5146100a357806361565d25146100b857806368c4ac26146100f45780638dac03cd1461012757806394149c1a1461014c575b600080fd5b6100b66100b136600461102f565b610246565b005b6100e16100c6366004610fd2565b6001600160a01b031660009081526004602052604090205490565b6040519081526020015b60405180910390f35b610117610102366004610fd2565b60016020526000908152604090205460ff1681565b60405190151581526020016100eb565b610117610135366004611016565b600090815260066020526040902060040154151590565b604051632000000f60e21b81526020016100eb565b6101ad61016f366004611016565b600660205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169391929091169085565b604080516001600160a01b03968716815294861660208601528401929092529092166060820152608081019190915260a0016100eb565b6100e16101f2366004610fd2565b6001600160a01b031660009081526005602052604090205490565b6100e161021b3660046110da565b61039e565b6100b661022e366004610fd2565b610838565b6100b6610241366004611016565b610844565b600084815260066020526040902060040154849061029c5760405162461bcd60e51b815260206004820152600e60248201526d1cddd85c081b9bdd08199bdd5b9960921b60448201526064015b60405180910390fd5b600085815260066020908152604091829020825160a08101845281546001600160a01b03908116808352600184015482169483019490945260028301549482019490945260038201549093166060840152600401546080830152610304908790878787610a83565b6080810151606082015160208084015160008a815260069092526040822080546001600160a01b031990811682556001820180548216905560028201849055600382018054909116905560040191909155610360828285610c5c565b6040518981527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d20629060200160405180910390a1505050505050505050565b6001600160a01b038516600090815260016020526040812054869060ff166103fc5760405162461bcd60e51b81526020600482015260116024820152703ab739bab83837b93a32b2103a37b5b2b760791b6044820152606401610293565b600080600061040a8b610d99565b6040516bffffffffffffffffffffffff1960608f901b16602082015292955090935091508290603401604051602081830303815290604052805190602001201461048f5760405162461bcd60e51b81526020600482015260166024820152750d2dca8ded6cadc40c8decae640dcdee840dac2e8c6d60531b6044820152606401610293565b600081116104ed5760405162461bcd60e51b815260206004820152602560248201527f7377617020616d6f756e74206d7573742062652067726561746572207468616e604482015264207a65726f60d81b6064820152608401610293565b426104fa610e108261120a565b841161053f5760405162461bcd60e51b81526020600482015260146024820152736578706972657320747320746f6f206561726c7960601b6044820152606401610293565b61054b611c208261120a565b841061058f5760405162461bcd60e51b81526020600482015260136024820152726578706972657320747320746f6f206c61746560681b6044820152606401610293565b336105d78d80516020918201206000546040805161190160f01b8186015260228101929092526042808301939093528051808303909301835260629091019052805191012090565b600081815260066020526040902060040154909750156106295760405162461bcd60e51b815260206004820152600d60248201526c1cddd85c0818dbdb999b1a58dd609a1b6044820152606401610293565b60408051600081526020810180835289905260ff8a1691810191909152606081018b9052608081018a905260019060a0016020604051602081039080840390855afa15801561067c573d6000803e3d6000fd5b505050602060405103516001600160a01b03168b6001600160a01b0316146106da5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610293565b6040518060a001604052808c6001600160a01b03168152602001826001600160a01b031681526020018681526020018d6001600160a01b03168152602001848152506006600089815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506040820151816002015560608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550608082015181600401559050506107d88c8c85610e3f565b60408051888152602081018490529081018490526001600160a01b038d1660608201527ff60f3861c423568d0aae6a3a3bc9d4b41c40ab0cb0267599d9d35122e4f320e89060800160405180910390a15050505050509695505050505050565b61084181610ecd565b50565b60008181526006602052604090206004015481906108955760405162461bcd60e51b815260206004820152600e60248201526d1cddd85c081b9bdd08199bdd5b9960921b6044820152606401610293565b600082815260066020526040902060020154829042116108ea5760405162461bcd60e51b815260206004820152601060248201526f1cddd85c081b9bdd08195e1c1a5c995960821b6044820152606401610293565b6000600660008581526020019081526020016000206040518060a00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282015481526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600482015481525050905060008160600151905060008260000151905060008360800151905060066000888152602001908152602001600020600080820160006101000a8154906001600160a01b0302191690556001820160006101000a8154906001600160a01b03021916905560028201600090556003820160006101000a8154906001600160a01b03021916905560048201600090555050610a47838383610c5c565b6040518781527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200160405180910390a150505050505050565b6001600160a01b038416610ad95760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610293565b604080518082018252601b81527f5377617052656c656173652862797465733332207377617049642900000000006020918201529051600091610b49917ffb1f98601c589a04e2ceca199119c17bd547893fffb8d088acdae5aff4f9b19d91899101918252602082015260400190565b6040516020818303038152906040528051906020012090506000805482604051602001610b8d92919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610bf5573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614610c535760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610293565b50505050505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691610ce891906111cf565b6000604051808303816000865af19150503d8060008114610d25576040519150601f19603f3d011682016040523d82523d6000602084013e610d2a565b606091505b5091509150818015610d54575080511580610d54575080806020019051810190610d549190610ff4565b610d925760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610293565b5050505050565b600080600080600080600087806020019051810190610db8919061106e565b50505093509350935093506040518060a001604052806069815260200161124760699139805190602001208414610e315760405162461bcd60e51b815260206004820152601d60248201527f496e76616c6964207377617020726571756573742074797065686173680000006044820152606401610293565b919790965090945092505050565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610e8f57600080fd5b505af1158015610ea3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec79190610ff4565b50505050565b6001600160a01b0381166000818152600160208181526040808420805460ff19168417905580516080810182528481528083018581528183018681526060838101818152988852600380875294909720835181559151958201959095559351600285015594518051949594610d9293928501929190910190828054828255906000526020600020908101928215610f80579160200282015b82811115610f80578251825591602001919060010190610f65565b50610f8c929150610f90565b5090565b5b80821115610f8c5760008155600101610f91565b80356001600160a01b0381168114610fbc57600080fd5b919050565b803560ff81168114610fbc57600080fd5b600060208284031215610fe457600080fd5b610fed82610fa5565b9392505050565b60006020828403121561100657600080fd5b81518015158114610fed57600080fd5b60006020828403121561102857600080fd5b5035919050565b6000806000806080858703121561104557600080fd5b84359350602085013592506040850135915061106360608601610fc1565b905092959194509250565b600080600080600080600060e0888a03121561108957600080fd5b87519650602088015195506040880151945060608801519350608088015163ffffffff60e01b811681146110bc57600080fd5b8093505060a0880151915060c0880151905092959891949750929550565b60008060008060008060c087890312156110f357600080fd5b863567ffffffffffffffff8082111561110b57600080fd5b818901915089601f83011261111f57600080fd5b81358181111561113157611131611230565b604051601f8201601f19908116603f0116810190838211818310171561115957611159611230565b816040528281528c602084870101111561117257600080fd5b82602086016020830137600060208483010152809a50505050505061119960208801610fa5565b94506111a760408801610fa5565b935060608701359250608087013591506111c360a08801610fc1565b90509295509295509295565b6000825160005b818110156111f057602081860181015185830152016111d6565b818111156111ff576000828501525b509190910192915050565b6000821982111561122b57634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052604160045260246000fdfe53776170526571756573742875696e743235362065787069726554732c627974657320696e546f6b656e2c75696e7432353620616d6f756e742c627974657334206f7574436861696e2c6279746573206f7574546f6b656e2c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonSwapTest> {
    return super.deploy(overrides || {}) as Promise<MesonSwapTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
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
