/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReservePool, ReservePoolInterface } from "../ReservePool";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stableCredit",
        type: "address",
      },
      {
        internalType: "address",
        name: "_savingsPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sourceAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swapRouter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_sourceSyncPercent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_operatorPercent",
        type: "uint256",
      },
    ],
    name: "__ReservePool_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collateralPercent",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeToken",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorPercent",
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
    name: "owner",
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
    inputs: [],
    name: "paused",
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
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "reimburseMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "reimburseSavings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "savingsPool",
    outputs: [
      {
        internalType: "contract ISavingsPool",
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
        internalType: "uint24",
        name: "_poolFee",
        type: "uint24",
      },
    ],
    name: "setPoofFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sourceAddress",
        type: "address",
      },
    ],
    name: "setSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sourceSyncPercent",
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
    name: "stableCredit",
    outputs: [
      {
        internalType: "contract IStableCredit",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_sourceSyncPercent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_operatorPercent",
        type: "uint256",
      },
    ],
    name: "updatePercents",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613abd806100206000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80637b4044a0116100c3578063ccc120941161007c578063ccc120941461032e578063cd8cd6331461034c578063d8e0903514610368578063e3423bec14610384578063ebdac090146103a0578063f2fde38b146103bc5761014d565b80637b4044a0146102805780638980f11f1461029e5780638da5cb5b146102ba578063a8026912146102d8578063bad4a01f146102f4578063c31c9c07146103105761014d565b80634bcfc0c7116101155780634bcfc0c7146101e457806356a45770146102005780635c975abb1461021c578063647846a51461023a5780636fa0e65314610258578063715018a6146102765761014d565b8063047ba40d146101525780630609379c14610170578063089fe6aa1461018e57806325fb9ec7146101ac57806349a6b1db146101c8575b600080fd5b61015a6103d8565b604051610167919061292b565b60405180910390f35b6101786103fe565b604051610185919061295f565b60405180910390f35b610196610404565b6040516101a39190612998565b60405180910390f35b6101c660048036038101906101c191906129e4565b610419565b005b6101e260048036038101906101dd9190612a24565b610592565b005b6101fe60048036038101906101f99190612a24565b6107c3565b005b61021a60048036038101906102159190612a8f565b610a78565b005b610224610fb6565b6040516102319190612b37565b60405180910390f35b610242610fcd565b60405161024f9190612b73565b60405180910390f35b610260610ff3565b60405161026d9190612baf565b60405180910390f35b61027e611019565b005b6102886110a1565b604051610295919061295f565b60405180910390f35b6102b860048036038101906102b39190612bca565b6110a7565b005b6102c261131b565b6040516102cf9190612c19565b60405180910390f35b6102f260048036038101906102ed9190612c34565b611345565b005b61030e60048036038101906103099190612a24565b611473565b005b610318611661565b6040516103259190612c82565b60405180910390f35b610336611687565b604051610343919061295f565b60405180910390f35b61036660048036038101906103619190612a24565b61168d565b005b610382600480360381019061037d9190612bca565b61187b565b005b61039e60048036038101906103999190612cc9565b611a23565b005b6103ba60048036038101906103b59190612a24565b611b2f565b005b6103d660048036038101906103d19190612c34565b611dcc565b005b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60d15481565b60d460009054906101000a900462ffffff1681565b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe9fbb80336040518263ffffffff1660e01b81526004016104749190612c19565b60206040518083038186803b15801561048c57600080fd5b505afa1580156104a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c49190612d22565b610503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fa90612dd2565b60405180910390fd5b620f424063ffffffff1681836105199190612e21565b111561055a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055190612ee9565b60405180910390fd5b8160d1819055508060d28190555080826105749190612e21565b620f424063ffffffff166105889190612f09565b60d3819055505050565b600260975414156105d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cf90612f89565b60405180910390fd5b600260978190555060c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe9fbb80336040518263ffffffff1660e01b815260040161063b9190612c19565b60206040518083038186803b15801561065357600080fd5b505afa158015610667573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068b9190612d22565b6106ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c190612dd2565b60405180910390fd5b6000811161070d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070490612ff5565b60405180910390fd5b60d054811115610752576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074990613087565b60405180910390fd5b8060d060008282546107649190612f09565b925050819055506107b8338260ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611ec49092919063ffffffff16565b600160978190555050565b600060ce5414156107d357610a75565b60ce548110156109325760cb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634a44c2e460c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a08ed36a846040518263ffffffff1660e01b8152600401610876919061295f565b60206040518083038186803b15801561088e57600080fd5b505afa1580156108a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c691906130bc565b6040518263ffffffff1660e01b81526004016108e2919061295f565b600060405180830381600087803b1580156108fc57600080fd5b505af1158015610910573d6000803e3d6000fd5b505050508060ce60008282546109269190612f09565b92505081905550610a74565b60cb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634a44c2e460c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a08ed36a60ce546040518263ffffffff1660e01b81526004016109cd919061295f565b60206040518083038186803b1580156109e557600080fd5b505afa1580156109f9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1d91906130bc565b6040518263ffffffff1660e01b8152600401610a39919061295f565b600060405180830381600087803b158015610a5357600080fd5b505af1158015610a67573d6000803e3d6000fd5b50505050600060ce819055505b5b50565b600060019054906101000a900460ff16610aa05760008054906101000a900460ff1615610aa9565b610aa8611f4a565b5b610ae8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610adf9061315b565b60405180910390fd5b60008060019054906101000a900460ff161590508015610b38576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b620f424063ffffffff168284610b4e9190612e21565b1115610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b86906131ed565b60405180910390fd5b610b97611f5b565b610b9f611fb4565b610ba761200d565b610baf612066565b8660c960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ca709a256040518163ffffffff1660e01b815260040160206040518083038186803b158015610c5857600080fd5b505afa158015610c6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c909190613222565b60ca60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508560cb60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360cc60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401610dcf92919061324f565b602060405180830381600087803b158015610de957600080fd5b505af1158015610dfd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e219190612d22565b5060ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401610e9f92919061324f565b602060405180830381600087803b158015610eb957600080fd5b505af1158015610ecd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef19190612d22565b50610bb860d460006101000a81548162ffffff021916908362ffffff1602179055508460cd60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260d1819055508160d28190555060d25460d154610f729190612e21565b620f424063ffffffff16610f869190612f09565b60d3819055508015610fad5760008060016101000a81548160ff0219169083151502179055505b50505050505050565b6000606560009054906101000a900460ff16905090565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60cb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611021612109565b73ffffffffffffffffffffffffffffffffffffffff1661103f61131b565b73ffffffffffffffffffffffffffffffffffffffff1614611095576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108c906132c4565b60405180910390fd5b61109f6000612111565b565b60d25481565b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe9fbb80336040518263ffffffff1660e01b81526004016111029190612c19565b60206040518083038186803b15801561111a57600080fd5b505afa15801561112e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111529190612d22565b611191576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118890612dd2565b60405180910390fd5b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611222576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121990613356565b60405180910390fd5b60cd60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112aa906133e8565b60405180910390fd5b6112de33828473ffffffffffffffffffffffffffffffffffffffff16611ec49092919063ffffffff16565b7f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28828260405161130f92919061324f565b60405180910390a15050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe9fbb80336040518263ffffffff1660e01b81526004016113a09190612c19565b60206040518083038186803b1580156113b857600080fd5b505afa1580156113cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f09190612d22565b61142f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142690612dd2565b60405180910390fd5b8060cd60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260975414156114b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b090612f89565b60405180910390fd5b600260978190555060c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe9fbb80336040518263ffffffff1660e01b815260040161151c9190612c19565b60206040518083038186803b15801561153457600080fd5b505afa158015611548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061156c9190612d22565b6115ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a290612dd2565b60405180910390fd5b600081116115ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e590613454565b60405180910390fd5b8060ce60008282546116009190612e21565b9250508190555061165633308360ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166121d7909392919063ffffffff16565b600160978190555050565b60cc60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60d35481565b600260975414156116d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ca90612f89565b60405180910390fd5b600260978190555060c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe9fbb80336040518263ffffffff1660e01b81526004016117369190612c19565b60206040518083038186803b15801561174e57600080fd5b505afa158015611762573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117869190612d22565b6117c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bc90612dd2565b60405180910390fd5b60008111611808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ff90613454565b60405180910390fd5b8060ce600082825461181a9190612e21565b9250508190555061187033308360ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166121d7909392919063ffffffff16565b600160978190555050565b600060ce54141561188b57611a1f565b60ce54811015611963578060ce60008282546118a79190612f09565b9250508190555060ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b815260040161190b92919061324f565b602060405180830381600087803b15801561192557600080fd5b505af1158015611939573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061195d9190612d22565b50611a1e565b600060ce8190555060ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8360ce546040518363ffffffff1660e01b81526004016119ca92919061324f565b602060405180830381600087803b1580156119e457600080fd5b505af11580156119f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1c9190612d22565b505b5b5050565b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe9fbb80336040518263ffffffff1660e01b8152600401611a7e9190612c19565b60206040518083038186803b158015611a9657600080fd5b505afa158015611aaa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ace9190612d22565b611b0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0490612dd2565b60405180910390fd5b8060d460006101000a81548162ffffff021916908362ffffff16021790555050565b60026097541415611b75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b6c90612f89565b60405180910390fd5b600260978190555060c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe9fbb80336040518263ffffffff1660e01b8152600401611bd89190612c19565b60206040518083038186803b158015611bf057600080fd5b505afa158015611c04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c289190612d22565b611c67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5e90612dd2565b60405180910390fd5b60008111611caa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ca190613454565b60405180910390fd5b6000611cd6620f424063ffffffff168360d154611cc79190613474565b611cd191906134fd565b612260565b90506000620f424063ffffffff168360d254611cf29190613474565b611cfc91906134fd565b90506000620f424063ffffffff168460d354611d189190613474565b611d2291906134fd565b90508260cf6000828254611d369190612e21565b925050819055508160d06000828254611d4f9190612e21565b925050819055508060ce6000828254611d689190612e21565b92505081905550611dbe33308660ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166121d7909392919063ffffffff16565b505050600160978190555050565b611dd4612109565b73ffffffffffffffffffffffffffffffffffffffff16611df261131b565b73ffffffffffffffffffffffffffffffffffffffff1614611e48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e3f906132c4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611eb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eaf906135a0565b60405180910390fd5b611ec181612111565b50565b611f458363a9059cbb60e01b8484604051602401611ee392919061324f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612509565b505050565b6000611f55306125d0565b15905090565b600060019054906101000a900460ff16611faa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fa190613632565b60405180910390fd5b611fb26125f3565b565b600060019054906101000a900460ff16612003576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ffa90613632565b60405180910390fd5b61200b61264c565b565b600060019054906101000a900460ff1661205c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161205390613632565b60405180910390fd5b6120646126b8565b565b61206e610fb6565b156120ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120a59061369e565b60405180910390fd5b6001606560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586120f2612109565b6040516120ff9190612c19565b60405180910390a1565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61225a846323b872dd60e01b8585856040516024016121f8939291906136be565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612509565b50505050565b600060c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe9fbb80336040518263ffffffff1660e01b81526004016122bd9190612c19565b60206040518083038186803b1580156122d557600080fd5b505afa1580156122e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061230d9190612d22565b61234c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161234390612dd2565b60405180910390fd5b612354610fb6565b1561236157819050612504565b600060405180610100016040528060ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160cd60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160d460009054906101000a900462ffffff1662ffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff16815260200142815260200184815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815250905060cc60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663414bf389826040518263ffffffff1660e01b81526004016124ae91906137d3565b602060405180830381600087803b1580156124c857600080fd5b505af11580156124dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061250091906130bc565b9150505b919050565b600061256b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166127199092919063ffffffff16565b90506000815111156125cb578080602001905181019061258b9190612d22565b6125ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125c190613861565b60405180910390fd5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16612642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161263990613632565b60405180910390fd5b6001609781905550565b600060019054906101000a900460ff1661269b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161269290613632565b60405180910390fd5b6000606560006101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff16612707576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126fe90613632565b60405180910390fd5b612717612712612109565b612111565b565b60606127288484600085612731565b90509392505050565b606082471015612776576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161276d906138f3565b60405180910390fd5b61277f856125d0565b6127be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127b59061395f565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516127e791906139f9565b60006040518083038185875af1925050503d8060008114612824576040519150601f19603f3d011682016040523d82523d6000602084013e612829565b606091505b5091509150612839828286612845565b92505050949350505050565b60608315612855578290506128a5565b6000835111156128685782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161289c9190613a65565b60405180910390fd5b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006128f16128ec6128e7846128ac565b6128cc565b6128ac565b9050919050565b6000612903826128d6565b9050919050565b6000612915826128f8565b9050919050565b6129258161290a565b82525050565b6000602082019050612940600083018461291c565b92915050565b6000819050919050565b61295981612946565b82525050565b60006020820190506129746000830184612950565b92915050565b600062ffffff82169050919050565b6129928161297a565b82525050565b60006020820190506129ad6000830184612989565b92915050565b600080fd5b6129c181612946565b81146129cc57600080fd5b50565b6000813590506129de816129b8565b92915050565b600080604083850312156129fb576129fa6129b3565b5b6000612a09858286016129cf565b9250506020612a1a858286016129cf565b9150509250929050565b600060208284031215612a3a57612a396129b3565b5b6000612a48848285016129cf565b91505092915050565b6000612a5c826128ac565b9050919050565b612a6c81612a51565b8114612a7757600080fd5b50565b600081359050612a8981612a63565b92915050565b60008060008060008060c08789031215612aac57612aab6129b3565b5b6000612aba89828a01612a7a565b9650506020612acb89828a01612a7a565b9550506040612adc89828a01612a7a565b9450506060612aed89828a01612a7a565b9350506080612afe89828a016129cf565b92505060a0612b0f89828a016129cf565b9150509295509295509295565b60008115159050919050565b612b3181612b1c565b82525050565b6000602082019050612b4c6000830184612b28565b92915050565b6000612b5d826128f8565b9050919050565b612b6d81612b52565b82525050565b6000602082019050612b886000830184612b64565b92915050565b6000612b99826128f8565b9050919050565b612ba981612b8e565b82525050565b6000602082019050612bc46000830184612ba0565b92915050565b60008060408385031215612be157612be06129b3565b5b6000612bef85828601612a7a565b9250506020612c00858286016129cf565b9150509250929050565b612c1381612a51565b82525050565b6000602082019050612c2e6000830184612c0a565b92915050565b600060208284031215612c4a57612c496129b3565b5b6000612c5884828501612a7a565b91505092915050565b6000612c6c826128f8565b9050919050565b612c7c81612c61565b82525050565b6000602082019050612c976000830184612c73565b92915050565b612ca68161297a565b8114612cb157600080fd5b50565b600081359050612cc381612c9d565b92915050565b600060208284031215612cdf57612cde6129b3565b5b6000612ced84828501612cb4565b91505092915050565b612cff81612b1c565b8114612d0a57600080fd5b50565b600081519050612d1c81612cf6565b92915050565b600060208284031215612d3857612d376129b3565b5b6000612d4684828501612d0d565b91505092915050565b600082825260208201905092915050565b7f52657365727665506f6f6c3a2063616c6c6572206e6f7420617574686f72697a60008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b6000612dbc602283612d4f565b9150612dc782612d60565b604082019050919050565b60006020820190508181036000830152612deb81612daf565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612e2c82612946565b9150612e3783612946565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612e6c57612e6b612df2565b5b828201905092915050565b7f52657365727665506f6f6c3a2070657263656e7473206d757374206265206c6560008201527f7373207468616e20313030250000000000000000000000000000000000000000602082015250565b6000612ed3602c83612d4f565b9150612ede82612e77565b604082019050919050565b60006020820190508181036000830152612f0281612ec6565b9050919050565b6000612f1482612946565b9150612f1f83612946565b925082821015612f3257612f31612df2565b5b828203905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000612f73601f83612d4f565b9150612f7e82612f3d565b602082019050919050565b60006020820190508181036000830152612fa281612f66565b9050919050565b7f52657365727665506f6f6c3a2043616e6e6f7420776974686472617720300000600082015250565b6000612fdf601e83612d4f565b9150612fea82612fa9565b602082019050919050565b6000602082019050818103600083015261300e81612fd2565b9050919050565b7f52657365727665506f6f6c3a20496e73756666696369656e74206f706572617460008201527f6f722062616c616e636500000000000000000000000000000000000000000000602082015250565b6000613071602a83612d4f565b915061307c82613015565b604082019050919050565b600060208201905081810360008301526130a081613064565b9050919050565b6000815190506130b6816129b8565b92915050565b6000602082840312156130d2576130d16129b3565b5b60006130e0848285016130a7565b91505092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000613145602e83612d4f565b9150613150826130e9565b604082019050919050565b6000602082019050818103600083015261317481613138565b9050919050565b7f52657365727665506f6f6c3a20736f757263652073796e63206d75737420626560008201527f206c657373207468616e20313030250000000000000000000000000000000000602082015250565b60006131d7602f83612d4f565b91506131e28261317b565b604082019050919050565b60006020820190508181036000830152613206816131ca565b9050919050565b60008151905061321c81612a63565b92915050565b600060208284031215613238576132376129b3565b5b60006132468482850161320d565b91505092915050565b60006040820190506132646000830185612c0a565b6132716020830184612950565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006132ae602083612d4f565b91506132b982613278565b602082019050919050565b600060208201905081810360008301526132dd816132a1565b9050919050565b7f52657365727665506f6f6c3a2043616e6e6f742077697468647261772066656560008201527f20746f6b656e0000000000000000000000000000000000000000000000000000602082015250565b6000613340602683612d4f565b915061334b826132e4565b604082019050919050565b6000602082019050818103600083015261336f81613333565b9050919050565b7f52657365727665506f6f6c3a2043616e6e6f7420776974686472617720534f5560008201527f5243450000000000000000000000000000000000000000000000000000000000602082015250565b60006133d2602383612d4f565b91506133dd82613376565b604082019050919050565b60006020820190508181036000830152613401816133c5565b9050919050565b7f52657365727665506f6f6c3a2043616e6e6f74207374616b6520300000000000600082015250565b600061343e601b83612d4f565b915061344982613408565b602082019050919050565b6000602082019050818103600083015261346d81613431565b9050919050565b600061347f82612946565b915061348a83612946565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156134c3576134c2612df2565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061350882612946565b915061351383612946565b925082613523576135226134ce565b5b828204905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061358a602683612d4f565b91506135958261352e565b604082019050919050565b600060208201905081810360008301526135b98161357d565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b600061361c602b83612d4f565b9150613627826135c0565b604082019050919050565b6000602082019050818103600083015261364b8161360f565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000613688601083612d4f565b915061369382613652565b602082019050919050565b600060208201905081810360008301526136b78161367b565b9050919050565b60006060820190506136d36000830186612c0a565b6136e06020830185612c0a565b6136ed6040830184612950565b949350505050565b6136fe81612a51565b82525050565b61370d8161297a565b82525050565b61371c81612946565b82525050565b61372b816128ac565b82525050565b6101008201600082015161374860008501826136f5565b50602082015161375b60208501826136f5565b50604082015161376e6040850182613704565b50606082015161378160608501826136f5565b5060808201516137946080850182613713565b5060a08201516137a760a0850182613713565b5060c08201516137ba60c0850182613713565b5060e08201516137cd60e0850182613722565b50505050565b6000610100820190506137e96000830184613731565b92915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b600061384b602a83612d4f565b9150613856826137ef565b604082019050919050565b6000602082019050818103600083015261387a8161383e565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006138dd602683612d4f565b91506138e882613881565b604082019050919050565b6000602082019050818103600083015261390c816138d0565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000613949601d83612d4f565b915061395482613913565b602082019050919050565b600060208201905081810360008301526139788161393c565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156139b3578082015181840152602081019050613998565b838111156139c2576000848401525b50505050565b60006139d38261397f565b6139dd818561398a565b93506139ed818560208601613995565b80840191505092915050565b6000613a0582846139c8565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b6000613a3782613a10565b613a418185612d4f565b9350613a51818560208601613995565b613a5a81613a1b565b840191505092915050565b60006020820190508181036000830152613a7f8184613a2c565b90509291505056fea264697066735822122059670fbc98c1f151a4a906b8253a7ee92b5662260769a439891b8810ea563c9764736f6c63430008090033";

export class ReservePool__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReservePool> {
    return super.deploy(overrides || {}) as Promise<ReservePool>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReservePool {
    return super.attach(address) as ReservePool;
  }
  connect(signer: Signer): ReservePool__factory {
    return super.connect(signer) as ReservePool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReservePoolInterface {
    return new utils.Interface(_abi) as ReservePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReservePool {
    return new Contract(address, _abi, signerOrProvider) as ReservePool;
  }
}
