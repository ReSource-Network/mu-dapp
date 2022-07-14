/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IReservePool, IReservePoolInterface } from "../IReservePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCollateral",
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

export class IReservePool__factory {
  static readonly abi = _abi;
  static createInterface(): IReservePoolInterface {
    return new utils.Interface(_abi) as IReservePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReservePool {
    return new Contract(address, _abi, signerOrProvider) as IReservePool;
  }
}
