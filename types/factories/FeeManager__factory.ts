/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FeeManager, FeeManagerInterface } from "../FeeManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalFee",
        type: "uint256",
      },
    ],
    name: "FeesCollected",
    type: "event",
  },
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
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "access",
    outputs: [
      {
        internalType: "contract IAccessManager",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "collectFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collectedFees",
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
    name: "distributeFees",
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
    inputs: [
      {
        internalType: "address",
        name: "_accessManager",
        type: "address",
      },
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
        name: "_reservePool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_savingsFeePercent",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "pauseFees",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reservePool",
    outputs: [
      {
        internalType: "contract IReservePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rserveFeePercent",
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
    name: "savingsFeePercent",
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
    inputs: [],
    name: "unpauseFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_savingsFeePercent",
        type: "uint256",
      },
    ],
    name: "updateFeePercents",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612584806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806385d79652116100ad578063bb57ad2011610071578063bb57ad201461028a578063c147289a14610294578063e00efe4a146102b2578063f2fde38b146102ce578063f7013ef6146102ea57610121565b806385d796521461020a5780638980f11f146102145780638da5cb5b146102305780639003adfe1461024e578063b481f8331461026c57610121565b80635c975abb116100f45780635c975abb14610188578063647846a5146101a65780636fa0e653146101c4578063715018a6146101e257806371907f17146101ec57610121565b80630266f04414610126578063047ba40d146101445780630ee70d4914610162578063579cb36d1461016c575b600080fd5b61012e610306565b60405161013b91906117cf565b60405180910390f35b61014c61032c565b604051610159919061180b565b60405180910390f35b61016a610352565b005b61018660048036038101906101819190611861565b610446565b005b6101906105a3565b60405161019d91906118a9565b60405180910390f35b6101ae6105ba565b6040516101bb91906118e5565b60405180910390f35b6101cc6105e0565b6040516101d99190611921565b60405180910390f35b6101ea610606565b005b6101f461068e565b604051610201919061195d565b60405180910390f35b6102126106b4565b005b61022e600480360381019061022991906119b6565b6107a8565b005b6102386108c1565b6040516102459190611a05565b60405180910390f35b6102566108eb565b6040516102639190611a2f565b60405180910390f35b6102746108f1565b6040516102819190611a2f565b60405180910390f35b6102926108f7565b005b61029c610a65565b6040516102a99190611a2f565b60405180910390f35b6102cc60048036038101906102c79190611a4a565b610a6b565b005b6102e860048036038101906102e39190611a9d565b610bd4565b005b61030460048036038101906102ff9190611aca565b610ccc565b005b609b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b609960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4807adf336040518263ffffffff1660e01b81526004016103ad9190611a05565b60206040518083038186803b1580156103c557600080fd5b505afa1580156103d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fd9190611b71565b61043c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043390611c21565b60405180910390fd5b610444611021565b565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4807adf336040518263ffffffff1660e01b81526004016104a19190611a05565b60206040518083038186803b1580156104b957600080fd5b505afa1580156104cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f19190611b71565b610530576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052790611c21565b60405180910390fd5b620f424063ffffffff1681111561057c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057390611cb3565b60405180910390fd5b80609c81905550609c54620f424063ffffffff1661059a9190611d02565b609d8190555050565b6000603360009054906101000a900460ff16905090565b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b609a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61060e6110c4565b73ffffffffffffffffffffffffffffffffffffffff1661062c6108c1565b73ffffffffffffffffffffffffffffffffffffffff1614610682576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067990611d82565b60405180910390fd5b61068c60006110cc565b565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4807adf336040518263ffffffff1660e01b815260040161070f9190611a05565b60206040518083038186803b15801561072757600080fd5b505afa15801561073b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075f9190611b71565b61079e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079590611c21565b60405180910390fd5b6107a6611192565b565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4807adf336040518263ffffffff1660e01b81526004016108039190611a05565b60206040518083038186803b15801561081b57600080fd5b505afa15801561082f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108539190611b71565b610892576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088990611c21565b60405180910390fd5b6108bd33828473ffffffffffffffffffffffffffffffffffffffff166112349092919063ffffffff16565b5050565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b609e5481565b609d5481565b6000620f424063ffffffff16609e54609c546109139190611da2565b61091d9190611e2b565b90506000620f424063ffffffff16609e54609d5461093b9190611da2565b6109459190611e2b565b9050609a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633c6b16ab836040518263ffffffff1660e01b81526004016109a29190611a2f565b600060405180830381600087803b1580156109bc57600080fd5b505af11580156109d0573d6000803e3d6000fd5b50505050609b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ebdac090826040518263ffffffff1660e01b8152600401610a2f9190611a2f565b600060405180830381600087803b158015610a4957600080fd5b505af1158015610a5d573d6000803e3d6000fd5b505050505050565b609c5481565b610a736105a3565b15610a7d57610bcf565b6000609960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a08ed36a836040518263ffffffff1660e01b8152600401610ada9190611a2f565b60206040518083038186803b158015610af257600080fd5b505afa158015610b06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2a9190611e71565b9050610b7b843083609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166112ba909392919063ffffffff16565b80609e6000828254610b8d9190611e9e565b925050819055507f9dc46f23cfb5ddcad0ae7ea2be38d47fec07bb9382ec7e564efc69e036dd66ce8482604051610bc5929190611ef4565b60405180910390a1505b505050565b610bdc6110c4565b73ffffffffffffffffffffffffffffffffffffffff16610bfa6108c1565b73ffffffffffffffffffffffffffffffffffffffff1614610c50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4790611d82565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cc0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb790611f8f565b60405180910390fd5b610cc9816110cc565b50565b600060019054906101000a900460ff16610cf45760008054906101000a900460ff1615610cfd565b610cfc611343565b5b610d3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3390612021565b60405180910390fd5b60008060019054906101000a900460ff161590508015610d8c576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b620f424063ffffffff16821115610dd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcf906120b3565b60405180910390fd5b610de0611354565b610de86113ad565b610df0611021565b85609860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084609960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550609960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ca709a256040518163ffffffff1660e01b815260040160206040518083038186803b158015610eda57600080fd5b505afa158015610eee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1291906120e8565b609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083609a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082609b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081609c81905550609c54620f424063ffffffff16610ff29190611d02565b609d8190555080156110195760008060016101000a81548160ff0219169083151502179055505b505050505050565b6110296105a3565b15611069576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106090612161565b60405180910390fd5b6001603360006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110ad6110c4565b6040516110ba9190611a05565b60405180910390a1565b600033905090565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61119a6105a3565b6111d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d0906121cd565b60405180910390fd5b6000603360006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61121d6110c4565b60405161122a9190611a05565b60405180910390a1565b6112b58363a9059cbb60e01b8484604051602401611253929190611ef4565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611406565b505050565b61133d846323b872dd60e01b8585856040516024016112db939291906121ed565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611406565b50505050565b600061134e306114cd565b15905090565b600060019054906101000a900460ff166113a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139a90612296565b60405180910390fd5b6113ab6114f0565b565b600060019054906101000a900460ff166113fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f390612296565b60405180910390fd5b611404611551565b565b6000611468826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115bd9092919063ffffffff16565b90506000815111156114c857808060200190518101906114889190611b71565b6114c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114be90612328565b60405180910390fd5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff1661153f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153690612296565b60405180910390fd5b61154f61154a6110c4565b6110cc565b565b600060019054906101000a900460ff166115a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159790612296565b60405180910390fd5b6000603360006101000a81548160ff021916908315150217905550565b60606115cc84846000856115d5565b90509392505050565b60608247101561161a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611611906123ba565b60405180910390fd5b611623856114cd565b611662576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165990612426565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161168b91906124c0565b60006040518083038185875af1925050503d80600081146116c8576040519150601f19603f3d011682016040523d82523d6000602084013e6116cd565b606091505b50915091506116dd8282866116e9565b92505050949350505050565b606083156116f957829050611749565b60008351111561170c5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611740919061252c565b60405180910390fd5b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061179561179061178b84611750565b611770565b611750565b9050919050565b60006117a78261177a565b9050919050565b60006117b98261179c565b9050919050565b6117c9816117ae565b82525050565b60006020820190506117e460008301846117c0565b92915050565b60006117f58261179c565b9050919050565b611805816117ea565b82525050565b600060208201905061182060008301846117fc565b92915050565b600080fd5b6000819050919050565b61183e8161182b565b811461184957600080fd5b50565b60008135905061185b81611835565b92915050565b60006020828403121561187757611876611826565b5b60006118858482850161184c565b91505092915050565b60008115159050919050565b6118a38161188e565b82525050565b60006020820190506118be600083018461189a565b92915050565b60006118cf8261179c565b9050919050565b6118df816118c4565b82525050565b60006020820190506118fa60008301846118d6565b92915050565b600061190b8261179c565b9050919050565b61191b81611900565b82525050565b60006020820190506119366000830184611912565b92915050565b60006119478261179c565b9050919050565b6119578161193c565b82525050565b6000602082019050611972600083018461194e565b92915050565b600061198382611750565b9050919050565b61199381611978565b811461199e57600080fd5b50565b6000813590506119b08161198a565b92915050565b600080604083850312156119cd576119cc611826565b5b60006119db858286016119a1565b92505060206119ec8582860161184c565b9150509250929050565b6119ff81611978565b82525050565b6000602082019050611a1a60008301846119f6565b92915050565b611a298161182b565b82525050565b6000602082019050611a446000830184611a20565b92915050565b600080600060608486031215611a6357611a62611826565b5b6000611a71868287016119a1565b9350506020611a82868287016119a1565b9250506040611a938682870161184c565b9150509250925092565b600060208284031215611ab357611ab2611826565b5b6000611ac1848285016119a1565b91505092915050565b600080600080600060a08688031215611ae657611ae5611826565b5b6000611af4888289016119a1565b9550506020611b05888289016119a1565b9450506040611b16888289016119a1565b9350506060611b27888289016119a1565b9250506080611b388882890161184c565b9150509295509295909350565b611b4e8161188e565b8114611b5957600080fd5b50565b600081519050611b6b81611b45565b92915050565b600060208284031215611b8757611b86611826565b5b6000611b9584828501611b5c565b91505092915050565b600082825260208201905092915050565b7f4665654d616e616765723a2043616c6c6572206973206e6f742063726564697460008201527f206f70657261746f720000000000000000000000000000000000000000000000602082015250565b6000611c0b602983611b9e565b9150611c1682611baf565b604082019050919050565b60006020820190508181036000830152611c3a81611bfe565b9050919050565b7f4665654d616e616765723a20736176696e6720666565206d757374206265206c60008201527f657373207468616e203130302500000000000000000000000000000000000000602082015250565b6000611c9d602d83611b9e565b9150611ca882611c41565b604082019050919050565b60006020820190508181036000830152611ccc81611c90565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d0d8261182b565b9150611d188361182b565b925082821015611d2b57611d2a611cd3565b5b828203905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611d6c602083611b9e565b9150611d7782611d36565b602082019050919050565b60006020820190508181036000830152611d9b81611d5f565b9050919050565b6000611dad8261182b565b9150611db88361182b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611df157611df0611cd3565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611e368261182b565b9150611e418361182b565b925082611e5157611e50611dfc565b5b828204905092915050565b600081519050611e6b81611835565b92915050565b600060208284031215611e8757611e86611826565b5b6000611e9584828501611e5c565b91505092915050565b6000611ea98261182b565b9150611eb48361182b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ee957611ee8611cd3565b5b828201905092915050565b6000604082019050611f0960008301856119f6565b611f166020830184611a20565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611f79602683611b9e565b9150611f8482611f1d565b604082019050919050565b60006020820190508181036000830152611fa881611f6c565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600061200b602e83611b9e565b915061201682611faf565b604082019050919050565b6000602082019050818103600083015261203a81611ffe565b9050919050565b7f4665654d616e616765723a2066656573206d757374206265206c65737320746860008201527f616e203130302500000000000000000000000000000000000000000000000000602082015250565b600061209d602783611b9e565b91506120a882612041565b604082019050919050565b600060208201905081810360008301526120cc81612090565b9050919050565b6000815190506120e28161198a565b92915050565b6000602082840312156120fe576120fd611826565b5b600061210c848285016120d3565b91505092915050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b600061214b601083611b9e565b915061215682612115565b602082019050919050565b6000602082019050818103600083015261217a8161213e565b9050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b60006121b7601483611b9e565b91506121c282612181565b602082019050919050565b600060208201905081810360008301526121e6816121aa565b9050919050565b600060608201905061220260008301866119f6565b61220f60208301856119f6565b61221c6040830184611a20565b949350505050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000612280602b83611b9e565b915061228b82612224565b604082019050919050565b600060208201905081810360008301526122af81612273565b9050919050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612312602a83611b9e565b915061231d826122b6565b604082019050919050565b6000602082019050818103600083015261234181612305565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006123a4602683611b9e565b91506123af82612348565b604082019050919050565b600060208201905081810360008301526123d381612397565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612410601d83611b9e565b915061241b826123da565b602082019050919050565b6000602082019050818103600083015261243f81612403565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561247a57808201518184015260208101905061245f565b83811115612489576000848401525b50505050565b600061249a82612446565b6124a48185612451565b93506124b481856020860161245c565b80840191505092915050565b60006124cc828461248f565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b60006124fe826124d7565b6125088185611b9e565b935061251881856020860161245c565b612521816124e2565b840191505092915050565b6000602082019050818103600083015261254681846124f3565b90509291505056fea26469706673582212203dd45564a23a63ef44852c3ae890e49811913f0f521dcc1bbf93cee98337091b64736f6c63430008090033";

export class FeeManager__factory extends ContractFactory {
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
  ): Promise<FeeManager> {
    return super.deploy(overrides || {}) as Promise<FeeManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FeeManager {
    return super.attach(address) as FeeManager;
  }
  connect(signer: Signer): FeeManager__factory {
    return super.connect(signer) as FeeManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeManagerInterface {
    return new utils.Interface(_abi) as FeeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeManager {
    return new Contract(address, _abi, signerOrProvider) as FeeManager;
  }
}
