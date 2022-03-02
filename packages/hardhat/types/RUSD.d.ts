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

interface RUSDInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "bulkTransfer(address[],uint256[])": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "burnFrom(address,uint256)": FunctionFragment;
    "creditBalanceOf(address)": FunctionFragment;
    "creditLimitLeftOf(address)": FunctionFragment;
    "creditLimitOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "freedom()": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initialize(string,string)": FunctionFragment;
    "initializeRUSD(address,uint256,address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "operator()": FunctionFragment;
    "owner()": FunctionFragment;
    "registry()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "restrictPositiveBalance()": FunctionFragment;
    "restrictRegistered()": FunctionFragment;
    "restrictionState()": FunctionFragment;
    "setCreditLimit(address,uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "underwriteManager()": FunctionFragment;
    "updateOperator(address)": FunctionFragment;
    "updateRestrictionExpiration()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "bulkTransfer",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "burnFrom",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creditBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "creditLimitLeftOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "creditLimitOf",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "freedom", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeRUSD",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restrictPositiveBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restrictRegistered",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restrictionState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCreditLimit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underwriteManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRestrictionExpiration",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bulkTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "creditBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditLimitLeftOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditLimitOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "freedom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeRUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restrictPositiveBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restrictRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restrictionState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreditLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underwriteManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRestrictionExpiration",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "BalanceUpdate(address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "BulkBalanceUpdate(address,address[],uint256,uint256,uint256[],uint256[])": EventFragment;
    "CreditLimitUpdate(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RestrictionExpirationUpdated(uint256)": EventFragment;
    "RestrictionUpdated(uint8)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BalanceUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BulkBalanceUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreditLimitUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RestrictionExpirationUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RestrictionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    spender: string;
    value: BigNumber;
  }
>;

export type BalanceUpdateEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
    sender: string;
    recipient: string;
    senderBalance: BigNumber;
    senderCreditBalance: BigNumber;
    recipientBalance: BigNumber;
    recipientCreditBalance: BigNumber;
  }
>;

export type BulkBalanceUpdateEvent = TypedEvent<
  [string, string[], BigNumber, BigNumber, BigNumber[], BigNumber[]] & {
    sender: string;
    recipients: string[];
    senderBalance: BigNumber;
    senderCreditBalance: BigNumber;
    recipientBalances: BigNumber[];
    recipientCreditBalances: BigNumber[];
  }
>;

export type CreditLimitUpdateEvent = TypedEvent<
  [string, BigNumber] & { member: string; limit: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RestrictionExpirationUpdatedEvent = TypedEvent<
  [BigNumber] & { restrictionRenewal: BigNumber }
>;

export type RestrictionUpdatedEvent = TypedEvent<[number] & { state: number }>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
>;

export class RUSD extends BaseContract {
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

  interface: RUSDInterface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    bulkTransfer(
      _to: string[],
      _values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    creditBalanceOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    creditLimitLeftOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    creditLimitOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    freedom(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      name_: string,
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeRUSD(
      registryAddress: string,
      expiration: BigNumberish,
      underwriteManagerAddress: string,
      operatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    restrictPositiveBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    restrictRegistered(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    restrictionState(overrides?: CallOverrides): Promise<[number]>;

    setCreditLimit(
      _member: string,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underwriteManager(overrides?: CallOverrides): Promise<[string]>;

    updateOperator(
      newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRestrictionExpiration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  bulkTransfer(
    _to: string[],
    _values: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burn(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnFrom(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  creditBalanceOf(
    _member: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  creditLimitLeftOf(
    _member: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  creditLimitOf(_member: string, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  freedom(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeRUSD(
    registryAddress: string,
    expiration: BigNumberish,
    underwriteManagerAddress: string,
    operatorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  operator(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  restrictPositiveBalance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  restrictRegistered(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  restrictionState(overrides?: CallOverrides): Promise<number>;

  setCreditLimit(
    _member: string,
    _limit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underwriteManager(overrides?: CallOverrides): Promise<string>;

  updateOperator(
    newOperator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRestrictionExpiration(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    bulkTransfer(
      _to: string[],
      _values: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    burn(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    creditBalanceOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditLimitLeftOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditLimitOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    freedom(overrides?: CallOverrides): Promise<void>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      name_: string,
      symbol_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeRUSD(
      registryAddress: string,
      expiration: BigNumberish,
      underwriteManagerAddress: string,
      operatorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    operator(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    restrictPositiveBalance(overrides?: CallOverrides): Promise<void>;

    restrictRegistered(overrides?: CallOverrides): Promise<void>;

    restrictionState(overrides?: CallOverrides): Promise<number>;

    setCreditLimit(
      _member: string,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    underwriteManager(overrides?: CallOverrides): Promise<string>;

    updateOperator(
      newOperator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRestrictionExpiration(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    "BalanceUpdate(address,address,uint256,uint256,uint256,uint256)"(
      sender?: null,
      recipient?: null,
      senderBalance?: null,
      senderCreditBalance?: null,
      recipientBalance?: null,
      recipientCreditBalance?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        recipient: string;
        senderBalance: BigNumber;
        senderCreditBalance: BigNumber;
        recipientBalance: BigNumber;
        recipientCreditBalance: BigNumber;
      }
    >;

    BalanceUpdate(
      sender?: null,
      recipient?: null,
      senderBalance?: null,
      senderCreditBalance?: null,
      recipientBalance?: null,
      recipientCreditBalance?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        sender: string;
        recipient: string;
        senderBalance: BigNumber;
        senderCreditBalance: BigNumber;
        recipientBalance: BigNumber;
        recipientCreditBalance: BigNumber;
      }
    >;

    "BulkBalanceUpdate(address,address[],uint256,uint256,uint256[],uint256[])"(
      sender?: null,
      recipients?: null,
      senderBalance?: null,
      senderCreditBalance?: null,
      recipientBalances?: null,
      recipientCreditBalances?: null
    ): TypedEventFilter<
      [string, string[], BigNumber, BigNumber, BigNumber[], BigNumber[]],
      {
        sender: string;
        recipients: string[];
        senderBalance: BigNumber;
        senderCreditBalance: BigNumber;
        recipientBalances: BigNumber[];
        recipientCreditBalances: BigNumber[];
      }
    >;

    BulkBalanceUpdate(
      sender?: null,
      recipients?: null,
      senderBalance?: null,
      senderCreditBalance?: null,
      recipientBalances?: null,
      recipientCreditBalances?: null
    ): TypedEventFilter<
      [string, string[], BigNumber, BigNumber, BigNumber[], BigNumber[]],
      {
        sender: string;
        recipients: string[];
        senderBalance: BigNumber;
        senderCreditBalance: BigNumber;
        recipientBalances: BigNumber[];
        recipientCreditBalances: BigNumber[];
      }
    >;

    "CreditLimitUpdate(address,uint256)"(
      member?: null,
      limit?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { member: string; limit: BigNumber }
    >;

    CreditLimitUpdate(
      member?: null,
      limit?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { member: string; limit: BigNumber }
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

    "RestrictionExpirationUpdated(uint256)"(
      restrictionRenewal?: null
    ): TypedEventFilter<[BigNumber], { restrictionRenewal: BigNumber }>;

    RestrictionExpirationUpdated(
      restrictionRenewal?: null
    ): TypedEventFilter<[BigNumber], { restrictionRenewal: BigNumber }>;

    "RestrictionUpdated(uint8)"(
      state?: BigNumberish | null
    ): TypedEventFilter<[number], { state: number }>;

    RestrictionUpdated(
      state?: BigNumberish | null
    ): TypedEventFilter<[number], { state: number }>;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    bulkTransfer(
      _to: string[],
      _values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    creditBalanceOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditLimitLeftOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditLimitOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    freedom(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      name_: string,
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeRUSD(
      registryAddress: string,
      expiration: BigNumberish,
      underwriteManagerAddress: string,
      operatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    restrictPositiveBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    restrictRegistered(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    restrictionState(overrides?: CallOverrides): Promise<BigNumber>;

    setCreditLimit(
      _member: string,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underwriteManager(overrides?: CallOverrides): Promise<BigNumber>;

    updateOperator(
      newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRestrictionExpiration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bulkTransfer(
      _to: string[],
      _values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    creditBalanceOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditLimitLeftOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditLimitOf(
      _member: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    freedom(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      name_: string,
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeRUSD(
      registryAddress: string,
      expiration: BigNumberish,
      underwriteManagerAddress: string,
      operatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    restrictPositiveBalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    restrictRegistered(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    restrictionState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCreditLimit(
      _member: string,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underwriteManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateOperator(
      newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRestrictionExpiration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
