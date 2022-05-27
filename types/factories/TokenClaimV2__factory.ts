/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenClaimV2, TokenClaimV2Interface } from "../TokenClaimV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "unlockedAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "totalAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountStaked",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "expirationBlock",
                    type: "uint256",
                  },
                ],
                internalType: "struct IERC20SOUL.Schedule[]",
                name: "schedules",
                type: "tuple[]",
              },
            ],
            internalType: "struct IERC20SOUL.Lock",
            name: "lock",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "released",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct TokenClaimV2.Claim",
        name: "claim",
        type: "tuple",
      },
    ],
    name: "ClaimUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "unlockedAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "totalAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountStaked",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "expirationBlock",
                    type: "uint256",
                  },
                ],
                internalType: "struct IERC20SOUL.Schedule[]",
                name: "schedules",
                type: "tuple[]",
              },
            ],
            internalType: "struct IERC20SOUL.Lock",
            name: "lock",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "released",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct TokenClaimV2.Claim",
        name: "claim",
        type: "tuple",
      },
    ],
    name: "NewClaimAdded",
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
        components: [
          {
            internalType: "uint256",
            name: "unlockedAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "totalAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountStaked",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "expirationBlock",
                    type: "uint256",
                  },
                ],
                internalType: "struct IERC20SOUL.Schedule[]",
                name: "schedules",
                type: "tuple[]",
              },
            ],
            internalType: "struct IERC20SOUL.Lock",
            name: "lock",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "released",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct TokenClaimV2.Claim",
        name: "claim",
        type: "tuple",
      },
    ],
    name: "Released",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_unlockedAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountStaked",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "expirationBlock",
                type: "uint256",
              },
            ],
            internalType: "struct IERC20SOUL.Schedule[]",
            name: "schedules",
            type: "tuple[]",
          },
        ],
        internalType: "struct IERC20SOUL.Lock",
        name: "_lock",
        type: "tuple",
      },
    ],
    name: "addClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "claims",
    outputs: [
      {
        internalType: "uint256",
        name: "unlockedAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountStaked",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "expirationBlock",
                type: "uint256",
              },
            ],
            internalType: "struct IERC20SOUL.Schedule[]",
            name: "schedules",
            type: "tuple[]",
          },
        ],
        internalType: "struct IERC20SOUL.Lock",
        name: "lock",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "released",
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
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getClaimLockSchedule",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationBlock",
            type: "uint256",
          },
        ],
        internalType: "struct IERC20SOUL.Schedule[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getClaimTotal",
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
    name: "getToken",
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
    name: "getWithdrawableAmount",
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
        name: "token_",
        type: "address",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimable",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613198806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c57806390be10cc1161006657806390be10cc14610211578063c4d66de81461022f578063c6788bdd1461024b578063f2fde38b1461027d576100ea565b8063715018a6146101cd57806374a8f103146101d75780638da5cb5b146101f3576100ea565b80634e71d92d116100c85780634e71d92d146101475780634f8d507114610151578063571b8132146101815780636d737b8f146101b1576100ea565b806321df0da7146100ef5780632e1a7d4d1461010d5780634838ed1914610129575b600080fd5b6100f7610299565b6040516101049190611c3c565b60405180910390f35b61012760048036038101906101229190611c97565b6102c3565b005b610131610499565b60405161013e9190611cd3565b60405180910390f35b61014f61049f565b005b61016b60048036038101906101669190611d1a565b610a5d565b6040516101789190611e34565b60405180910390f35b61019b60048036038101906101969190611d1a565b610b15565b6040516101a89190611cd3565b60405180910390f35b6101cb60048036038101906101c69190611e7a565b610c44565b005b6101d5611028565b005b6101f160048036038101906101ec9190611d1a565b6110b0565b005b6101fb6112b9565b6040516102089190611c3c565b60405180910390f35b6102196112e3565b6040516102269190611cd3565b60405180910390f35b61024960048036038101906102449190611d1a565b6113a2565b005b61026560048036038101906102609190611d1a565b61150a565b60405161027493929190611fc3565b60405180910390f35b61029760048036038101906102929190611d1a565b6115d2565b005b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60026065541415610309576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103009061205e565b60405180910390fd5b60026065819055506103196116ca565b73ffffffffffffffffffffffffffffffffffffffff166103376112b9565b73ffffffffffffffffffffffffffffffffffffffff161461038d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610384906120ca565b60405180910390fd5b806103966112e3565b10156103d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ce9061215c565b60405180910390fd5b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61041d6112b9565b836040518363ffffffff1660e01b815260040161043b92919061217c565b602060405180830381600087803b15801561045557600080fd5b505af1158015610469573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048d91906121d1565b50600160658190555050565b60995481565b600260655414156104e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104dc9061205e565b60405180910390fd5b60026065819055503360006104f982610b15565b141561053a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105319061224a565b60405180910390fd5b60001515609860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff161515146105d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c7906122dc565b60405180910390fd5b6000609860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000808260010160020180549050905060005b818110156107e9576000838261063c919061232b565b9050426201518086600101600201838154811061065c5761065b61235f565b5b906000526020600020906002020160010154610678919061232b565b10156107d5578460010160020181815481106106975761069661235f565b5b9060005260206000209060020201600001548560000160008282546106bc919061238e565b925050819055508460010160020181815481106106dc576106db61235f565b5b906000526020600020906002020160000154856001016000016000828254610704919061232b565b925050819055508460010160020160018660010160020180549050610729919061232b565b8154811061073a5761073961235f565b5b90600052602060002090600202018560010160020182815481106107615761076061235f565b5b906000526020600020906002020160008201548160000155600182015481600101559050508460010160020180548061079d5761079c6123e4565b5b600190038181906000526020600020906002020160008082016000905560018201600090555050905583806107d190612413565b9450505b5080806107e190612413565b915050610626565b506000836000015411156108ac57609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb3385600001546040518363ffffffff1660e01b815260040161085892919061217c565b602060405180830381600087803b15801561087257600080fd5b505af1158015610886573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108aa91906121d1565b505b60008360010160000154111561094f57609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aa1e119933856001016040518363ffffffff1660e01b815260040161091c9291906125dd565b600060405180830381600087803b15801561093657600080fd5b505af115801561094a573d6000803e3d6000fd5b505050505b600061095a33610b15565b9050609860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000808201600090556001820160008082016000905560018201600090556002820160006109c99190611bb0565b50506004820160006101000a81549060ff0219169055505060018460040160006101000a81548160ff0219169083151502179055508060996000828254610a10919061232b565b925050819055507fe2cd961dcb957c97f9f8e1d73f62d5a0a1afaf40f9cc7265f7cf846a9fbf94a484604051610a469190612711565b60405180910390a150505050506001606581905550565b6060609860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600201805480602002602001604051908101604052809291908181526020016000905b82821015610b0a57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610ac4565b505050509050919050565b600080609860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820154815260200160018201604051806060016040529081600082015481526020016001820154815260200160028201805480602002602001604051908101604052809291908181526020016000905b82821015610bfb57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610bb5565b505050508152505081526020016004820160009054906101000a900460ff16151515158152505090508060200151600001518160000151610c3c919061238e565b915050919050565b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cac9061277f565b60405180910390fd5b610cbd6116ca565b73ffffffffffffffffffffffffffffffffffffffff16610cdb6112b9565b73ffffffffffffffffffffffffffffffffffffffff1614610d31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d28906120ca565b60405180910390fd5b6000826000013584610d43919061238e565b905080610d4e6112e3565b1015610d8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8690612811565b60405180910390fd5b60008111610dd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc99061287d565b60405180910390fd5b600083600001351115610de957610de8836116d2565b5b6000609860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000610e3787610b15565b1415610e965783816001018181610e4e9190612d60565b9050508481600001819055507fd9339bf5e45e737d7af10b5ee28fa69680d9b6942736fbf5d9dfb17b25d6724481604051610e899190612711565b60405180910390a1610fea565b8360000135816001016000016000828254610eb1919061238e565b9250508190555060005b848060400190610ecb9190612999565b9050811015610f9657816001016002016040518060400160405280878060400190610ef69190612999565b85818110610f0757610f0661235f565b5b905060400201600001358152602001878060400190610f269190612999565b85818110610f3757610f3661235f565b5b905060400201602001358152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508080610f8e90612413565b915050610ebb565b5084816000016000828254610fab919061238e565b925050819055507f1d21af6610cd8bfca43325b98b54cc11382db8440fb18eb2277bd867488ff28c81604051610fe19190612711565b60405180910390a15b60008160040160006101000a81548160ff0219169083151502179055508160996000828254611019919061238e565b92505081905550505050505050565b6110306116ca565b73ffffffffffffffffffffffffffffffffffffffff1661104e6112b9565b73ffffffffffffffffffffffffffffffffffffffff16146110a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109b906120ca565b60405180910390fd5b6110ae60006119fc565b565b6110b86116ca565b73ffffffffffffffffffffffffffffffffffffffff166110d66112b9565b73ffffffffffffffffffffffffffffffffffffffff161461112c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611123906120ca565b60405180910390fd5b80600061113882610b15565b1415611179576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111709061224a565b60405180910390fd5b60001515609860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff1615151461120f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611206906122dc565b60405180910390fd5b61121882610b15565b60996000828254611229919061232b565b92505081905550609860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008082016000905560018201600080820160009055600182016000905560028201600061129d9190611bb0565b50506004820160006101000a81549060ff021916905550505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000609954609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016113439190611c3c565b60206040518083038186803b15801561135b57600080fd5b505afa15801561136f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113939190612d83565b61139d919061232b565b905090565b600060019054906101000a900460ff166113ca5760008054906101000a900460ff16156113d3565b6113d2611ac2565b5b611412576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140990612e22565b60405180910390fd5b60008060019054906101000a900460ff161590508015611462576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561149c57600080fd5b6114a4611ad3565b81609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156115065760008060016101000a81548160ff0219169083151502179055505b5050565b609860205280600052604060002060009150905080600001549080600101604051806060016040529081600082015481526020016001820154815260200160028201805480602002602001604051908101604052809291908181526020016000905b828210156115b25783829060005260206000209060020201604051806040016040529081600082015481526020016001820154815250508152602001906001019061156c565b5050505081525050908060040160009054906101000a900460ff16905083565b6115da6116ca565b73ffffffffffffffffffffffffffffffffffffffff166115f86112b9565b73ffffffffffffffffffffffffffffffffffffffff161461164e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611645906120ca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156116be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b590612eb4565b60405180910390fd5b6116c7816119fc565b50565b600033905090565b6000816000013511611719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171090612f20565b60405180910390fd5b600080600090505b8280604001906117319190612999565b90508110156119b15782806040019061174a9190612999565b8281811061175b5761175a61235f565b5b9050604002016000013582611770919061238e565b9150609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ca8f45bd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156117da57600080fd5b505afa1580156117ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118129190612d83565b4261181d919061238e565b83806040019061182d9190612999565b8381811061183e5761183d61235f565b5b9050604002016020013511611888576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161187f90612fb2565b60405180910390fd5b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663417450086040518163ffffffff1660e01b815260040160206040518083038186803b1580156118f057600080fd5b505afa158015611904573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119289190612d83565b42611933919061238e565b8380604001906119439190612999565b838181106119545761195361235f565b5b905060400201602001351061199e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161199590613044565b60405180910390fd5b80806119a990612413565b915050611721565b50816000013581146119f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ef906130b0565b60405180910390fd5b5050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000611acd30611b2c565b15905090565b600060019054906101000a900460ff16611b22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b1990613142565b60405180910390fd5b611b2a611b4f565b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611b9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9590613142565b60405180910390fd5b611bae611ba96116ca565b6119fc565b565b5080546000825560020290600052602060002090810190611bd19190611bd4565b50565b5b80821115611bf757600080820160009055600182016000905550600201611bd5565b5090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c2682611bfb565b9050919050565b611c3681611c1b565b82525050565b6000602082019050611c516000830184611c2d565b92915050565b600080fd5b600080fd5b6000819050919050565b611c7481611c61565b8114611c7f57600080fd5b50565b600081359050611c9181611c6b565b92915050565b600060208284031215611cad57611cac611c57565b5b6000611cbb84828501611c82565b91505092915050565b611ccd81611c61565b82525050565b6000602082019050611ce86000830184611cc4565b92915050565b611cf781611c1b565b8114611d0257600080fd5b50565b600081359050611d1481611cee565b92915050565b600060208284031215611d3057611d2f611c57565b5b6000611d3e84828501611d05565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d7c81611c61565b82525050565b604082016000820151611d986000850182611d73565b506020820151611dab6020850182611d73565b50505050565b6000611dbd8383611d82565b60408301905092915050565b6000602082019050919050565b6000611de182611d47565b611deb8185611d52565b9350611df683611d63565b8060005b83811015611e27578151611e0e8882611db1565b9750611e1983611dc9565b925050600181019050611dfa565b5085935050505092915050565b60006020820190508181036000830152611e4e8184611dd6565b905092915050565b600080fd5b600060608284031215611e7157611e70611e56565b5b81905092915050565b600080600060608486031215611e9357611e92611c57565b5b6000611ea186828701611d05565b9350506020611eb286828701611c82565b925050604084013567ffffffffffffffff811115611ed357611ed2611c5c565b5b611edf86828701611e5b565b9150509250925092565b600082825260208201905092915050565b6000611f0582611d47565b611f0f8185611ee9565b9350611f1a83611d63565b8060005b83811015611f4b578151611f328882611db1565b9750611f3d83611dc9565b925050600181019050611f1e565b5085935050505092915050565b6000606083016000830151611f706000860182611d73565b506020830151611f836020860182611d73565b5060408301518482036040860152611f9b8282611efa565b9150508091505092915050565b60008115159050919050565b611fbd81611fa8565b82525050565b6000606082019050611fd86000830186611cc4565b8181036020830152611fea8185611f58565b9050611ff96040830184611fb4565b949350505050565b600082825260208201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000612048601f83612001565b915061205382612012565b602082019050919050565b600060208201905081810360008301526120778161203b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006120b4602083612001565b91506120bf8261207e565b602082019050919050565b600060208201905081810360008301526120e3816120a7565b9050919050565b7f546f6b656e436c61696d3a206e6f7420656e6f7567682077697468647261776160008201527f626c652066756e64730000000000000000000000000000000000000000000000602082015250565b6000612146602983612001565b9150612151826120ea565b604082019050919050565b6000602082019050818103600083015261217581612139565b9050919050565b60006040820190506121916000830185611c2d565b61219e6020830184611cc4565b9392505050565b6121ae81611fa8565b81146121b957600080fd5b50565b6000815190506121cb816121a5565b92915050565b6000602082840312156121e7576121e6611c57565b5b60006121f5848285016121bc565b91505092915050565b7f546f6b656e436c61696d3a20436c61696d20646f6573206e6f74206578697374600082015250565b6000612234602083612001565b915061223f826121fe565b602082019050919050565b6000602082019050818103600083015261226381612227565b9050919050565b7f546f6b656e436c61696d3a20436c61696d20686173206265656e2072656c656160008201527f7365640000000000000000000000000000000000000000000000000000000000602082015250565b60006122c6602383612001565b91506122d18261226a565b604082019050919050565b600060208201905081810360008301526122f5816122b9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061233682611c61565b915061234183611c61565b925082821015612354576123536122fc565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061239982611c61565b91506123a483611c61565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156123d9576123d86122fc565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600061241e82611c61565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612451576124506122fc565b5b600182019050919050565b60008160001c9050919050565b6000819050919050565b60006124866124818361245c565b612469565b9050919050565b600081549050919050565b60008190508160005260206000209050919050565b6040820160008083015490506124c281612473565b6124cf6000860182611d73565b50600183015490506124e081612473565b6124ed6020860182611d73565b5050505050565b600061250083836124ad565b60408301905092915050565b6000600282019050919050565b60006125248261248d565b61252e8185611ee9565b935061253983612498565b8060005b83811015612569578161255088826124f4565b975061255b8361250c565b92505060018101905061253d565b5085935050505092915050565b600060608301600080840154905061258d81612473565b61259a6000870182611d73565b50600184015490506125ab81612473565b6125b86020870182611d73565b506002840185830360408701526125cf8382612519565b925050819250505092915050565b60006040820190506125f26000830185611c2d565b81810360208301526126048184612576565b90509392505050565b600060608301600080840154905061262481612473565b6126316000870182611d73565b506001840154905061264281612473565b61264f6020870182611d73565b506002840185830360408701526126668382612519565b925050819250505092915050565b600060ff82169050919050565b600061269461268f8361245c565b612674565b9050919050565b6126a481611fa8565b82525050565b60006060830160008084015490506126c181612473565b6126ce6000870182611d73565b506001840185830360208701526126e5838261260d565b925050600484015490506126f881612681565b612705604087018261269b565b50819250505092915050565b6000602082019050818103600083015261272b81846126aa565b905092915050565b7f496e76616c696420616464726573730000000000000000000000000000000000600082015250565b6000612769600f83612001565b915061277482612733565b602082019050919050565b600060208201905081810360008301526127988161275c565b9050919050565b7f546f6b656e436c61696d3a2063616e6e6f742063726561746520636c61696d2060008201527f62656361757365206e6f742073756666696369656e7420746f6b656e73000000602082015250565b60006127fb603d83612001565b91506128068261279f565b604082019050919050565b6000602082019050818103600083015261282a816127ee565b9050919050565b7f546f6b656e436c61696d3a20616d6f756e74206d757374206265203e20300000600082015250565b6000612867601e83612001565b915061287282612831565b602082019050919050565b600060208201905081810360008301526128968161285a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b600081356128d981611c6b565b80915050919050565b60008160001b9050919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61291b846128e2565b9350801983169250808416831791505092915050565b6000819050919050565b600061295661295161294c84611c61565b612931565b611c61565b9050919050565b6000819050919050565b6129708261293b565b61298361297c8261295d565b83546128ef565b8255505050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126129b6576129b561298a565b5b80840192508235915067ffffffffffffffff8211156129d8576129d761298f565b5b6020830192506040820236038313156129f4576129f3612994565b5b509250929050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000612a4082611c61565b9150612a4b83611c61565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612a8457612a836122fc565b5b828202905092915050565b6000819050612a9f826002612a35565b9050919050565b600082821b905092915050565b600060088302612ae37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612aa6565b612aed8683612aa6565b95508019841693508086168417925050509392505050565b612b0e8361293b565b612b22612b1a8261295d565b848454612ab3565b825550505050565b600090565b612b37612b2a565b612b42818484612b05565b505050565b612b546000808301612b2f565b612b62600060018301612b2f565b50565b60008214612b7657612b7561289d565b5b612b7f81612b47565b5050565b5b81811015612ba257612b97600082612b65565b600281019050612b84565b5050565b81831015612bdf57612bb782612a8f565b612bc084612a8f565b612bc983612498565b818101838201612bd98183612b83565b50505050505b505050565b68010000000000000000821115612bfe57612bfd612a06565b5b612c078161248d565b828255612c15838284612ba6565b505050565b600082905092915050565b600081016000830180612c37816128cc565b9050612c438184612967565b505050600181016020830180612c58816128cc565b9050612c648184612967565b5050505050565b8115612c7a57612c7961289d565b5b612c848382612c25565b505050565b612c938383612c1a565b612c9d8183612be4565b612ca6836129fc565b612caf83612498565b6000805b84811015612cdf5783612cc7818486612c6b565b60408501945060028401935050600181019050612cb3565b5050505050505050565b612cf4838383612c89565b505050565b600081016000830180612d0b816128cc565b9050612d178184612967565b505050600181016020830180612d2c816128cc565b9050612d388184612967565b5050506002810160408301612d4d8185612999565b612d58818386612ce9565b505050505050565b612d6a8282612cf9565b5050565b600081519050612d7d81611c6b565b92915050565b600060208284031215612d9957612d98611c57565b5b6000612da784828501612d6e565b91505092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000612e0c602e83612001565b9150612e1782612db0565b604082019050919050565b60006020820190508181036000830152612e3b81612dff565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612e9e602683612001565b9150612ea982612e42565b604082019050919050565b60006020820190508181036000830152612ecd81612e91565b9050919050565b7f496e76616c6964204c6f636b20616d6f756e7400000000000000000000000000600082015250565b6000612f0a601383612001565b9150612f1582612ed4565b602082019050919050565b60006020820190508181036000830152612f3981612efd565b9050919050565b7f4c6f636b207363686564756c6520646f6573206e6f74206d656574206d696e6960008201527f6d756d0000000000000000000000000000000000000000000000000000000000602082015250565b6000612f9c602383612001565b9150612fa782612f40565b604082019050919050565b60006020820190508181036000830152612fcb81612f8f565b9050919050565b7f4c6f636b207363686564756c6520646f6573206e6f74206d656574206d61786960008201527f6d756d0000000000000000000000000000000000000000000000000000000000602082015250565b600061302e602383612001565b915061303982612fd2565b604082019050919050565b6000602082019050818103600083015261305d81613021565b9050919050565b7f496e76616c6964204c6f636b0000000000000000000000000000000000000000600082015250565b600061309a600c83612001565b91506130a582613064565b602082019050919050565b600060208201905081810360008301526130c98161308d565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b600061312c602b83612001565b9150613137826130d0565b604082019050919050565b6000602082019050818103600083015261315b8161311f565b905091905056fea264697066735822122059588e4a2b247bfb134cf65bd518383c9e7c491a8c0c6c5f5f3ad66c613e659364736f6c63430008090033";

export class TokenClaimV2__factory extends ContractFactory {
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
  ): Promise<TokenClaimV2> {
    return super.deploy(overrides || {}) as Promise<TokenClaimV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenClaimV2 {
    return super.attach(address) as TokenClaimV2;
  }
  connect(signer: Signer): TokenClaimV2__factory {
    return super.connect(signer) as TokenClaimV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenClaimV2Interface {
    return new utils.Interface(_abi) as TokenClaimV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenClaimV2 {
    return new Contract(address, _abi, signerOrProvider) as TokenClaimV2;
  }
}
