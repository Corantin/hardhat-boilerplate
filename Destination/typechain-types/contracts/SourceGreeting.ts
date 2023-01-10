/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface SourceGreetingInterface extends utils.Interface {
  functions: {
    "connext()": FunctionFragment;
    "cost()": FunctionFragment;
    "token()": FunctionFragment;
    "updateGreeting(address,uint32,string,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "connext" | "cost" | "token" | "updateGreeting"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "connext", values?: undefined): string;
  encodeFunctionData(functionFragment: "cost", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateGreeting",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "connext", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateGreeting",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SourceGreeting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SourceGreetingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    connext(overrides?: CallOverrides): Promise<[string]>;

    cost(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    updateGreeting(
      target: PromiseOrValue<string>,
      destinationDomain: PromiseOrValue<BigNumberish>,
      newGreeting: PromiseOrValue<string>,
      relayerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  connext(overrides?: CallOverrides): Promise<string>;

  cost(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  updateGreeting(
    target: PromiseOrValue<string>,
    destinationDomain: PromiseOrValue<BigNumberish>,
    newGreeting: PromiseOrValue<string>,
    relayerFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    connext(overrides?: CallOverrides): Promise<string>;

    cost(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    updateGreeting(
      target: PromiseOrValue<string>,
      destinationDomain: PromiseOrValue<BigNumberish>,
      newGreeting: PromiseOrValue<string>,
      relayerFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    connext(overrides?: CallOverrides): Promise<BigNumber>;

    cost(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    updateGreeting(
      target: PromiseOrValue<string>,
      destinationDomain: PromiseOrValue<BigNumberish>,
      newGreeting: PromiseOrValue<string>,
      relayerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    connext(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cost(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateGreeting(
      target: PromiseOrValue<string>,
      destinationDomain: PromiseOrValue<BigNumberish>,
      newGreeting: PromiseOrValue<string>,
      relayerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
