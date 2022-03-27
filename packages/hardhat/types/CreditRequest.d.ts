/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CreditRequestInterface extends ethers.utils.Interface {
  functions: {
    "acceptRequest(address,address,address)": FunctionFragment;
    "approveRequest(address,address)": FunctionFragment;
    "createAndAcceptRequest(address,address,uint256,address)": FunctionFragment;
    "createRequest(address,address,uint256)": FunctionFragment;
    "creditManager()": FunctionFragment;
    "creditRoles()": FunctionFragment;
    "deleteRequest(address,address)": FunctionFragment;
    "getCreditRequest(address,address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestUnstake(address,address)": FunctionFragment;
    "requests(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateRequestLimit(address,address,uint256,bool)": FunctionFragment;
    "verifyCreditLineExpiration(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptRequest",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveRequest",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createAndAcceptRequest",
    values: [string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createRequest",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creditManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditRoles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deleteRequest",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditRequest",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestUnstake",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "requests",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRequestLimit",
    values: [string, string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCreditLineExpiration",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAndAcceptRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestUnstake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRequestLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCreditLineExpiration",
    data: BytesLike
  ): Result;

  events: {
    "CreditRequestCreated(address,address,address,uint256,bool)": EventFragment;
    "CreditRequestRemoved(address,address)": EventFragment;
    "CreditRequestUpdated(address,address,uint256,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "UnstakeRequestCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreditRequestCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreditRequestRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreditRequestUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnstakeRequestCreated"): EventFragment;
}

export type CreditRequestCreatedEvent = TypedEvent<
  [string, string, string, BigNumber, boolean] & {
    network: string;
    networkMember: string;
    ambassador: string;
    creditLimit: BigNumber;
    approved: boolean;
  }
>;

export type CreditRequestRemovedEvent = TypedEvent<
  [string, string] & { network: string; networkMember: string }
>;

export type CreditRequestUpdatedEvent = TypedEvent<
  [string, string, BigNumber, boolean] & {
    network: string;
    networkMember: string;
    creditLimit: BigNumber;
    approved: boolean;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type UnstakeRequestCreatedEvent = TypedEvent<
  [string, string] & { network: string; networkMember: string }
>;

export class CreditRequest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CreditRequestInterface;

  functions: {
    acceptRequest(
      _network: string,
      _networkMember: string,
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveRequest(
      _network: string,
      _networkMember: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createAndAcceptRequest(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRequest(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    creditManager(overrides?: CallOverrides): Promise<[string]>;

    creditRoles(overrides?: CallOverrides): Promise<[string]>;

    deleteRequest(
      _network: string,
      _networkMember: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCreditRequest(
      _network: string,
      _networkMember: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [boolean, boolean, BigNumber] & {
          approved: boolean;
          unstaking: boolean;
          creditLimit: BigNumber;
        }
      ]
    >;

    initialize(
      _creditRoles: string,
      _creditManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestUnstake(
      _network: string,
      _networkMember: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requests(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber] & {
        approved: boolean;
        unstaking: boolean;
        creditLimit: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRequestLimit(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifyCreditLineExpiration(
      _network: string,
      _networkMember: string,
      _transactionValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptRequest(
    _network: string,
    _networkMember: string,
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveRequest(
    _network: string,
    _networkMember: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createAndAcceptRequest(
    _network: string,
    _networkMember: string,
    _creditLimit: BigNumberish,
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRequest(
    _network: string,
    _networkMember: string,
    _creditLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  creditManager(overrides?: CallOverrides): Promise<string>;

  creditRoles(overrides?: CallOverrides): Promise<string>;

  deleteRequest(
    _network: string,
    _networkMember: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCreditRequest(
    _network: string,
    _networkMember: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, boolean, BigNumber] & {
      approved: boolean;
      unstaking: boolean;
      creditLimit: BigNumber;
    }
  >;

  initialize(
    _creditRoles: string,
    _creditManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestUnstake(
    _network: string,
    _networkMember: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requests(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, boolean, BigNumber] & {
      approved: boolean;
      unstaking: boolean;
      creditLimit: BigNumber;
    }
  >;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRequestLimit(
    _network: string,
    _networkMember: string,
    _creditLimit: BigNumberish,
    _approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifyCreditLineExpiration(
    _network: string,
    _networkMember: string,
    _transactionValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptRequest(
      _network: string,
      _networkMember: string,
      _pool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    approveRequest(
      _network: string,
      _networkMember: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createAndAcceptRequest(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      _pool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createRequest(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    creditManager(overrides?: CallOverrides): Promise<string>;

    creditRoles(overrides?: CallOverrides): Promise<string>;

    deleteRequest(
      _network: string,
      _networkMember: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getCreditRequest(
      _network: string,
      _networkMember: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber] & {
        approved: boolean;
        unstaking: boolean;
        creditLimit: BigNumber;
      }
    >;

    initialize(
      _creditRoles: string,
      _creditManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestUnstake(
      _network: string,
      _networkMember: string,
      overrides?: CallOverrides
    ): Promise<void>;

    requests(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber] & {
        approved: boolean;
        unstaking: boolean;
        creditLimit: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRequestLimit(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyCreditLineExpiration(
      _network: string,
      _networkMember: string,
      _transactionValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CreditRequestCreated(address,address,address,uint256,bool)"(
      network?: null,
      networkMember?: null,
      ambassador?: null,
      creditLimit?: null,
      approved?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, boolean],
      {
        network: string;
        networkMember: string;
        ambassador: string;
        creditLimit: BigNumber;
        approved: boolean;
      }
    >;

    CreditRequestCreated(
      network?: null,
      networkMember?: null,
      ambassador?: null,
      creditLimit?: null,
      approved?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, boolean],
      {
        network: string;
        networkMember: string;
        ambassador: string;
        creditLimit: BigNumber;
        approved: boolean;
      }
    >;

    "CreditRequestRemoved(address,address)"(
      network?: null,
      networkMember?: null
    ): TypedEventFilter<
      [string, string],
      { network: string; networkMember: string }
    >;

    CreditRequestRemoved(
      network?: null,
      networkMember?: null
    ): TypedEventFilter<
      [string, string],
      { network: string; networkMember: string }
    >;

    "CreditRequestUpdated(address,address,uint256,bool)"(
      network?: null,
      networkMember?: null,
      creditLimit?: null,
      approved?: null
    ): TypedEventFilter<
      [string, string, BigNumber, boolean],
      {
        network: string;
        networkMember: string;
        creditLimit: BigNumber;
        approved: boolean;
      }
    >;

    CreditRequestUpdated(
      network?: null,
      networkMember?: null,
      creditLimit?: null,
      approved?: null
    ): TypedEventFilter<
      [string, string, BigNumber, boolean],
      {
        network: string;
        networkMember: string;
        creditLimit: BigNumber;
        approved: boolean;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "UnstakeRequestCreated(address,address)"(
      network?: null,
      networkMember?: null
    ): TypedEventFilter<
      [string, string],
      { network: string; networkMember: string }
    >;

    UnstakeRequestCreated(
      network?: null,
      networkMember?: null
    ): TypedEventFilter<
      [string, string],
      { network: string; networkMember: string }
    >;
  };

  estimateGas: {
    acceptRequest(
      _network: string,
      _networkMember: string,
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveRequest(
      _network: string,
      _networkMember: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createAndAcceptRequest(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRequest(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<BigNumber>;

    creditRoles(overrides?: CallOverrides): Promise<BigNumber>;

    deleteRequest(
      _network: string,
      _networkMember: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCreditRequest(
      _network: string,
      _networkMember: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _creditRoles: string,
      _creditManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestUnstake(
      _network: string,
      _networkMember: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requests(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRequestLimit(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifyCreditLineExpiration(
      _network: string,
      _networkMember: string,
      _transactionValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptRequest(
      _network: string,
      _networkMember: string,
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveRequest(
      _network: string,
      _networkMember: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createAndAcceptRequest(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      _pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRequest(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creditRoles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deleteRequest(
      _network: string,
      _networkMember: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCreditRequest(
      _network: string,
      _networkMember: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _creditRoles: string,
      _creditManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestUnstake(
      _network: string,
      _networkMember: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requests(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRequestLimit(
      _network: string,
      _networkMember: string,
      _creditLimit: BigNumberish,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifyCreditLineExpiration(
      _network: string,
      _networkMember: string,
      _transactionValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
