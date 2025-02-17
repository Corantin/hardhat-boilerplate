/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IConnectorManager,
  IConnectorManagerInterface,
} from "../../../../../../@connext/nxtp-contracts/contracts/messaging/interfaces/IConnectorManager";

const _abi = [
  {
    inputs: [],
    name: "home",
    outputs: [
      {
        internalType: "contract IOutbox",
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
        name: "_potentialReplica",
        type: "address",
      },
    ],
    name: "isReplica",
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
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IConnectorManager__factory {
  static readonly abi = _abi;
  static createInterface(): IConnectorManagerInterface {
    return new utils.Interface(_abi) as IConnectorManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IConnectorManager {
    return new Contract(address, _abi, signerOrProvider) as IConnectorManager;
  }
}
