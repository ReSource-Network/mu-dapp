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

interface CreditPoolInterface extends ethers.utils.Interface {
  functions: {
    "addReward(address,address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "earned(address,address)": FunctionFragment;
    "exit()": FunctionFragment;
    "getReward()": FunctionFragment;
    "getRewardForDuration(address)": FunctionFragment;
    "getTotalCredit()": FunctionFragment;
    "getUnderwriter()": FunctionFragment;
    "increaseTotalCredit(uint256)": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "lastTimeRewardApplicable(address)": FunctionFragment;
    "notifyRewardAmount(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "recoverERC20(address,uint256)": FunctionFragment;
    "reduceTotalCredit(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardData(address)": FunctionFragment;
    "rewardPerToken(address)": FunctionFragment;
    "rewardTokens(uint256)": FunctionFragment;
    "rewards(address,address)": FunctionFragment;
    "setRewardsDistributor(address,address)": FunctionFragment;
    "setRewardsDuration(address,uint256)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakeFor(address,uint256)": FunctionFragment;
    "stakingToken()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferUnderwriter(address)": FunctionFragment;
    "userRewardPerTokenPaid(address,address)": FunctionFragment;
    "viewMapping(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addReward",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRewardForDuration",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalCredit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderwriter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseTotalCredit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reduceTotalCredit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rewardData", values: [string]): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardsDistributor",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardsDuration",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakeFor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferUnderwriter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenPaid",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "viewMapping", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardForDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalCredit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderwriter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseTotalCredit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reduceTotalCredit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferUnderwriter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Recovered(address,uint256)": EventFragment;
    "RewardAdded(uint256)": EventFragment;
    "RewardPaid(address,address,uint256)": EventFragment;
    "RewardsDurationUpdated(address,uint256)": EventFragment;
    "Staked(address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Recovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsDurationUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type RecoveredEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export type RewardAddedEvent = TypedEvent<[BigNumber] & { reward: BigNumber }>;

export type RewardPaidEvent = TypedEvent<
  [string, string, BigNumber] & {
    user: string;
    rewardsToken: string;
    reward: BigNumber;
  }
>;

export type RewardsDurationUpdatedEvent = TypedEvent<
  [string, BigNumber] & { token: string; newDuration: BigNumber }
>;

export type StakedEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export class CreditPool extends BaseContract {
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

  interface: CreditPoolInterface;

  functions: {
    addReward(
      _rewardsToken: string,
      _rewardsDistributor: string,
      _rewardsDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    earned(
      account: string,
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRewardForDuration(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalCredit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUnderwriter(overrides?: CallOverrides): Promise<[string]>;

    increaseTotalCredit(
      _amountToRemove: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _creditManager: string,
      _creditRoles: string,
      _underwriter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastTimeRewardApplicable(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    notifyRewardAmount(
      _rewardsToken: string,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reduceTotalCredit(
      _amountToAdd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        rewardsDistributor: string;
        rewardsDuration: BigNumber;
        periodFinish: BigNumber;
        rewardRate: BigNumber;
        lastUpdateTime: BigNumber;
        rewardPerTokenStored: BigNumber;
      }
    >;

    rewardPerToken(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    rewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setRewardsDistributor(
      _rewardsToken: string,
      _rewardsDistributor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardsDuration(
      _rewardsToken: string,
      _rewardsDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeFor(
      _staker: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferUnderwriter(
      _underwriter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userRewardPerTokenPaid(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    viewMapping(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
          rewardsDistributor: string;
          rewardsDuration: BigNumber;
          periodFinish: BigNumber;
          rewardRate: BigNumber;
          lastUpdateTime: BigNumber;
          rewardPerTokenStored: BigNumber;
        }
      ]
    >;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addReward(
    _rewardsToken: string,
    _rewardsDistributor: string,
    _rewardsDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  earned(
    account: string,
    _rewardsToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRewardForDuration(
    _rewardsToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalCredit(overrides?: CallOverrides): Promise<BigNumber>;

  getUnderwriter(overrides?: CallOverrides): Promise<string>;

  increaseTotalCredit(
    _amountToRemove: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _creditManager: string,
    _creditRoles: string,
    _underwriter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastTimeRewardApplicable(
    _rewardsToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  notifyRewardAmount(
    _rewardsToken: string,
    reward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  recoverERC20(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reduceTotalCredit(
    _amountToAdd: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardData(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      rewardsDistributor: string;
      rewardsDuration: BigNumber;
      periodFinish: BigNumber;
      rewardRate: BigNumber;
      lastUpdateTime: BigNumber;
      rewardPerTokenStored: BigNumber;
    }
  >;

  rewardPerToken(
    _rewardsToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  rewards(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setRewardsDistributor(
    _rewardsToken: string,
    _rewardsDistributor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardsDuration(
    _rewardsToken: string,
    _rewardsDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeFor(
    _staker: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferUnderwriter(
    _underwriter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userRewardPerTokenPaid(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  viewMapping(
    _rewardsToken: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      rewardsDistributor: string;
      rewardsDuration: BigNumber;
      periodFinish: BigNumber;
      rewardRate: BigNumber;
      lastUpdateTime: BigNumber;
      rewardPerTokenStored: BigNumber;
    }
  >;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addReward(
      _rewardsToken: string,
      _rewardsDistributor: string,
      _rewardsDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    earned(
      account: string,
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    getReward(overrides?: CallOverrides): Promise<void>;

    getRewardForDuration(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalCredit(overrides?: CallOverrides): Promise<BigNumber>;

    getUnderwriter(overrides?: CallOverrides): Promise<string>;

    increaseTotalCredit(
      _amountToRemove: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _creditManager: string,
      _creditRoles: string,
      _underwriter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lastTimeRewardApplicable(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    notifyRewardAmount(
      _rewardsToken: string,
      reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    reduceTotalCredit(
      _amountToAdd: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        rewardsDistributor: string;
        rewardsDuration: BigNumber;
        periodFinish: BigNumber;
        rewardRate: BigNumber;
        lastUpdateTime: BigNumber;
        rewardPerTokenStored: BigNumber;
      }
    >;

    rewardPerToken(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    rewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRewardsDistributor(
      _rewardsToken: string,
      _rewardsDistributor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardsDuration(
      _rewardsToken: string,
      _rewardsDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeFor(
      _staker: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferUnderwriter(
      _underwriter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userRewardPerTokenPaid(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewMapping(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        rewardsDistributor: string;
        rewardsDuration: BigNumber;
        periodFinish: BigNumber;
        rewardRate: BigNumber;
        lastUpdateTime: BigNumber;
        rewardPerTokenStored: BigNumber;
      }
    >;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
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

    "Recovered(address,uint256)"(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    Recovered(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    "RewardAdded(uint256)"(
      reward?: null
    ): TypedEventFilter<[BigNumber], { reward: BigNumber }>;

    RewardAdded(
      reward?: null
    ): TypedEventFilter<[BigNumber], { reward: BigNumber }>;

    "RewardPaid(address,address,uint256)"(
      user?: string | null,
      rewardsToken?: string | null,
      reward?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; rewardsToken: string; reward: BigNumber }
    >;

    RewardPaid(
      user?: string | null,
      rewardsToken?: string | null,
      reward?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; rewardsToken: string; reward: BigNumber }
    >;

    "RewardsDurationUpdated(address,uint256)"(
      token?: null,
      newDuration?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; newDuration: BigNumber }
    >;

    RewardsDurationUpdated(
      token?: null,
      newDuration?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; newDuration: BigNumber }
    >;

    "Staked(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Staked(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Withdrawn(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Withdrawn(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    addReward(
      _rewardsToken: string,
      _rewardsDistributor: string,
      _rewardsDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    earned(
      account: string,
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRewardForDuration(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalCredit(overrides?: CallOverrides): Promise<BigNumber>;

    getUnderwriter(overrides?: CallOverrides): Promise<BigNumber>;

    increaseTotalCredit(
      _amountToRemove: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _creditManager: string,
      _creditRoles: string,
      _underwriter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastTimeRewardApplicable(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    notifyRewardAmount(
      _rewardsToken: string,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reduceTotalCredit(
      _amountToAdd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardData(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRewardsDistributor(
      _rewardsToken: string,
      _rewardsDistributor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardsDuration(
      _rewardsToken: string,
      _rewardsDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeFor(
      _staker: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferUnderwriter(
      _underwriter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewMapping(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addReward(
      _rewardsToken: string,
      _rewardsDistributor: string,
      _rewardsDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    earned(
      account: string,
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRewardForDuration(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalCredit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUnderwriter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseTotalCredit(
      _amountToRemove: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _creditManager: string,
      _creditRoles: string,
      _underwriter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      _rewardsToken: string,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reduceTotalCredit(
      _amountToAdd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardData(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPerToken(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewards(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRewardsDistributor(
      _rewardsToken: string,
      _rewardsDistributor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardsDuration(
      _rewardsToken: string,
      _rewardsDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeFor(
      _staker: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferUnderwriter(
      _underwriter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewMapping(
      _rewardsToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
