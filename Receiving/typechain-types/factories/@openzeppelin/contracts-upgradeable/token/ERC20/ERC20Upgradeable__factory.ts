/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC20Upgradeable,
  ERC20UpgradeableInterface,
} from "../../../../../@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable";

const _abi = [
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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    inputs: [],
    name: "decimals",
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
        name: "to",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611233806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b10565b60405180910390f35b6100e660048036038101906100e19190610bcb565b610308565b6040516100f39190610c26565b60405180910390f35b61010461032b565b6040516101119190610c50565b60405180910390f35b610134600480360381019061012f9190610c6b565b610335565b6040516101419190610c26565b60405180910390f35b610152610364565b60405161015f9190610cda565b60405180910390f35b610182600480360381019061017d9190610bcb565b61036d565b60405161018f9190610c26565b60405180910390f35b6101b260048036038101906101ad9190610cf5565b6103a4565b6040516101bf9190610c50565b60405180910390f35b6101d06103ed565b6040516101dd9190610b10565b60405180910390f35b61020060048036038101906101fb9190610bcb565b61047f565b60405161020d9190610c26565b60405180910390f35b610230600480360381019061022b9190610bcb565b6104f6565b60405161023d9190610c26565b60405180910390f35b610260600480360381019061025b9190610d22565b610519565b60405161026d9190610c50565b60405180910390f35b60606036805461028590610d91565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d91565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b6000806103136105a0565b90506103208185856105a8565b600191505092915050565b6000603554905090565b6000806103406105a0565b905061034d858285610771565b6103588585856107fd565b60019150509392505050565b60006012905090565b6000806103786105a0565b905061039981858561038a8589610519565b6103949190610df1565b6105a8565b600191505092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060603780546103fc90610d91565b80601f016020809104026020016040519081016040528092919081815260200182805461042890610d91565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b5050505050905090565b60008061048a6105a0565b905060006104988286610519565b9050838110156104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d490610e97565b60405180910390fd5b6104ea82868684036105a8565b60019250505092915050565b6000806105016105a0565b905061050e8185856107fd565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e90610f29565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610686576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067d90610fbb565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107649190610c50565b60405180910390a3505050565b600061077d8484610519565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f757818110156107e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e090611027565b60405180910390fd5b6107f684848484036105a8565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610863906110b9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d29061114b565b60405180910390fd5b6108e6838383610a76565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610964906111dd565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a5d9190610c50565b60405180910390a3610a70848484610a7b565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610aba578082015181840152602081019050610a9f565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ae282610a80565b610aec8185610a8b565b9350610afc818560208601610a9c565b610b0581610ac6565b840191505092915050565b60006020820190508181036000830152610b2a8184610ad7565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b6282610b37565b9050919050565b610b7281610b57565b8114610b7d57600080fd5b50565b600081359050610b8f81610b69565b92915050565b6000819050919050565b610ba881610b95565b8114610bb357600080fd5b50565b600081359050610bc581610b9f565b92915050565b60008060408385031215610be257610be1610b32565b5b6000610bf085828601610b80565b9250506020610c0185828601610bb6565b9150509250929050565b60008115159050919050565b610c2081610c0b565b82525050565b6000602082019050610c3b6000830184610c17565b92915050565b610c4a81610b95565b82525050565b6000602082019050610c656000830184610c41565b92915050565b600080600060608486031215610c8457610c83610b32565b5b6000610c9286828701610b80565b9350506020610ca386828701610b80565b9250506040610cb486828701610bb6565b9150509250925092565b600060ff82169050919050565b610cd481610cbe565b82525050565b6000602082019050610cef6000830184610ccb565b92915050565b600060208284031215610d0b57610d0a610b32565b5b6000610d1984828501610b80565b91505092915050565b60008060408385031215610d3957610d38610b32565b5b6000610d4785828601610b80565b9250506020610d5885828601610b80565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da957607f821691505b602082108103610dbc57610dbb610d62565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610dfc82610b95565b9150610e0783610b95565b9250828201905080821115610e1f57610e1e610dc2565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610e81602583610a8b565b9150610e8c82610e25565b604082019050919050565b60006020820190508181036000830152610eb081610e74565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f13602483610a8b565b9150610f1e82610eb7565b604082019050919050565b60006020820190508181036000830152610f4281610f06565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fa5602283610a8b565b9150610fb082610f49565b604082019050919050565b60006020820190508181036000830152610fd481610f98565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611011601d83610a8b565b915061101c82610fdb565b602082019050919050565b6000602082019050818103600083015261104081611004565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006110a3602583610a8b565b91506110ae82611047565b604082019050919050565b600060208201905081810360008301526110d281611096565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611135602383610a8b565b9150611140826110d9565b604082019050919050565b6000602082019050818103600083015261116481611128565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111c7602683610a8b565b91506111d28261116b565b604082019050919050565b600060208201905081810360008301526111f6816111ba565b905091905056fea26469706673582212204a4c976ea37b734ea6897f3888cd7f3ddbe2b4a2a839298c925852dcbaead47e64736f6c63430008110033";

type ERC20UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC20UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC20Upgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Upgradeable {
    return super.attach(address) as ERC20Upgradeable;
  }
  override connect(signer: Signer): ERC20Upgradeable__factory {
    return super.connect(signer) as ERC20Upgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20UpgradeableInterface {
    return new utils.Interface(_abi) as ERC20UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Upgradeable;
  }
}
