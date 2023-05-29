/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  LiquidityProvider,
  LiquidityProviderInterface,
} from '../../../contracts/mocks/LiquidityProvider';

const _abi = [
  {
    inputs: [],
    name: 'DAI',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'USDC',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collectAllFees',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
    ],
    name: 'decreaseLiquidity',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'deposits',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        internalType: 'address',
        name: 'token0',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token1',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'getLiquidity',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amountAdd0',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountAdd1',
        type: 'uint256',
      },
    ],
    name: 'increaseLiquidityCurrentRange',
    outputs: [
      {
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mintNewPosition',
    outputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token0',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token1',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount0ToMint',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount1ToMint',
        type: 'uint256',
      },
      {
        internalType: 'uint24',
        name: '_poolFee',
        type: 'uint24',
      },
    ],
    name: 'mintNewPositionWithParams',
    outputs: [
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nonfungiblePositionManager',
    outputs: [
      {
        internalType: 'contract INonfungiblePositionManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC721Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolFee',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x6080604052600080546001600160a01b03191673c36442b4a4522e871399cd717abdd847ab11fe8817905534801561003657600080fd5b506117bb806100466000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063686f2c901161008c578063b02c43d011610066578063b02c43d0146101cf578063b44a2722146101f2578063da406491146101fa578063e0bab4c41461020d576100df565b8063686f2c901461018457806389a302711461019a578063951583c3146101af576100df565b8063306d9c61116100bd578063306d9c6114610137578063336eb1801461014f578063558954c914610162576100df565b8063089fe6aa146100e4578063150b7a021461010257806317d70f7c14610122575b600080fd5b6100ec610215565b6040516100f991906116ea565b60405180910390f35b6101156101103660046111b5565b61021a565b6040516100f991906114ec565b61012a610251565b6040516100f991906116fa565b61013f610257565b6040516100f99493929190611703565b61013f61015d36600461124f565b6104b0565b61017561017036600461135b565b610668565b6040516100f9939291906116c0565b61018c6107de565b6040516100f9929190611730565b6101a26108b8565b6040516100f9919061149b565b6101c26101bd366004611306565b6108d0565b6040516100f991906116a3565b6101e26101dd366004611306565b610980565b6040516100f994939291906114af565b6101a26109ca565b61018c6102083660046112ad565b6109d9565b6101a2610abd565b606481565b60006102268685610ad5565b507f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b60025481565b6000805481908190819068056bc75e2d63100000906305f5e1009061029b90736b175474e89094c44da98b954eedeac495271d0f906001600160a01b031684610cbb565b6000546102c79073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48906001600160a01b031683610cbb565b6040805161016081018252736b175474e89094c44da98b954eedeac495271d0f815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486020820152606481830152620d89e7196060820152620d89e8608082015260a0810184905260c08101839052600060e08201819052610100820181905230610120830152426101408301525491517f8831645600000000000000000000000000000000000000000000000000000000815290916001600160a01b03169063883164569061038f9084906004016115f5565b608060405180830381600087803b1580156103a957600080fd5b505af11580156103bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e1919061131e565b929950909750955093506103f53388610ad5565b8285101561044e576000805461042a91736b175474e89094c44da98b954eedeac495271d0f916001600160a01b031690610cbb565b84830361044c736b175474e89094c44da98b954eedeac495271d0f3383610e52565b505b818410156104a757600080546104839173a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48916001600160a01b031690610cbb565b8382036104a573a0b86991c6218b36c1d19d4a2e9eb0ce3606eb483383610e52565b505b50505090919293565b600080548190819081906104cf908a906001600160a01b031689610cbb565b6000546104e79089906001600160a01b031688610cbb565b60408051610160810182526001600160a01b03808c1682528a8116602083015262ffffff881682840152620d89e7196060830152620d89e8608083015260a082018a905260c08201899052600060e08301819052610100830181905230610120840152610e1042016101408401525492517f88316456000000000000000000000000000000000000000000000000000000008152919216906388316456906105939084906004016115f5565b608060405180830381600087803b1580156105ad57600080fd5b505af11580156105c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e5919061131e565b929750909550935091506105f93386610ad5565b8783101561062a576000805461061a918c916001600160a01b031690610cbb565b8288036106288b3383610e52565b505b8682101561065b576000805461064b918b916001600160a01b031690610cbb565b8187036106598a3383610e52565b505b5095509550955095915050565b600080600061068d736b175474e89094c44da98b954eedeac495271d0f333088610fe2565b6106ad73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48333087610fe2565b6000546106d990736b175474e89094c44da98b954eedeac495271d0f906001600160a01b031687610cbb565b6000546107059073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48906001600160a01b031686610cbb565b6040805160c081018252600254815260208101879052808201869052600060608201819052608082018190524260a08301525491517f219f5d1700000000000000000000000000000000000000000000000000000000815290916001600160a01b03169063219f5d179061077d9084906004016115b1565b606060405180830381600087803b15801561079757600080fd5b505af11580156107ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cf91906112d0565b91989097509095509350505050565b6040805160808101825260025481523060208201526fffffffffffffffffffffffffffffffff81830181905260608201526000805492517ffc6f786500000000000000000000000000000000000000000000000000000000815290928392916001600160a01b039091169063fc6f78659061085d908490600401611519565b6040805180830381600087803b15801561087657600080fd5b505af115801561088a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ae919061137c565b9094909350915050565b73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4881565b600080546040517f99fbab8800000000000000000000000000000000000000000000000000000000815282916001600160a01b0316906399fbab889061091a9086906004016116fa565b6101806040518083038186803b15801561093357600080fd5b505afa158015610947573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096b919061139f565b50929b5050505050505050505050505b919050565b600160208190526000918252604090912080549181015460028201546003909201546001600160a01b03938416936fffffffffffffffffffffffffffffffff909216928216911684565b6000546001600160a01b031681565b6040805160a08101825260025481526fffffffffffffffffffffffffffffffff83166020820152600081830181905260608201819052426080830152805492517f0c49ccbe00000000000000000000000000000000000000000000000000000000815290928392916001600160a01b0390911690630c49ccbe90610a61908490600401611565565b6040805180830381600087803b158015610a7a57600080fd5b505af1158015610a8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab2919061137c565b909590945092505050565b736b175474e89094c44da98b954eedeac495271d0f81565b600080546040517f99fbab88000000000000000000000000000000000000000000000000000000008152829182916001600160a01b03909116906399fbab8890610b239087906004016116fa565b6101806040518083038186803b158015610b3c57600080fd5b505afa158015610b50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b74919061139f565b5050505097505050509450945050506040518060800160405280866001600160a01b03168152602001826fffffffffffffffffffffffffffffffff168152602001846001600160a01b03168152602001836001600160a01b03168152506001600086815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160010160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550905050836002819055505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b60208310610d655780518252601f199092019160209182019101610d46565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610dc7576040519150601f19603f3d011682016040523d82523d6000602084013e610dcc565b606091505b5091509150818015610dfa575080511580610dfa5750808060200190516020811015610df757600080fd5b50515b610e4b576040805162461bcd60e51b815260206004820152600260248201527f5341000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b60208310610efc5780518252601f199092019160209182019101610edd565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610f5e576040519150601f19603f3d011682016040523d82523d6000602084013e610f63565b606091505b5091509150818015610f91575080511580610f915750808060200190516020811015610f8e57600080fd5b50515b610e4b576040805162461bcd60e51b815260206004820152600260248201527f5354000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938a169392918291908083835b602083106110945780518252601f199092019160209182019101611075565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146110f6576040519150601f19603f3d011682016040523d82523d6000602084013e6110fb565b606091505b5091509150818015611129575080511580611129575080806020019051602081101561112657600080fd5b50515b61117a576040805162461bcd60e51b815260206004820152600360248201527f5354460000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b505050505050565b805161097b8161173e565b8051600281900b811461097b57600080fd5b805161097b81611756565b805161097b81611774565b6000806000806000608086880312156111cc578081fd5b85356111d78161173e565b945060208601356111e78161173e565b935060408601359250606086013567ffffffffffffffff8082111561120a578283fd5b818801915088601f83011261121d578283fd5b81358181111561122b578384fd5b89602082850101111561123c578384fd5b9699959850939650602001949392505050565b600080600080600060a08688031215611266578081fd5b85356112718161173e565b945060208601356112818161173e565b93506040860135925060608601359150608086013561129f81611774565b809150509295509295909350565b6000602082840312156112be578081fd5b81356112c981611756565b9392505050565b6000806000606084860312156112e4578283fd5b83516112ef81611756565b602085015160409095015190969495509392505050565b600060208284031215611317578081fd5b5035919050565b60008060008060808587031215611333578384fd5b84519350602085015161134581611756565b6040860151606090960151949790965092505050565b6000806040838503121561136d578182fd5b50508035926020909101359150565b6000806040838503121561138e578182fd5b505080516020909101519092909150565b6000806000806000806000806000806000806101808d8f0312156113c1578687fd5b8c516bffffffffffffffffffffffff811681146113dc578788fd5b9b506113ea60208e01611182565b9a506113f860408e01611182565b995061140660608e01611182565b985061141460808e016111aa565b975061142260a08e0161118d565b965061143060c08e0161118d565b955061143e60e08e0161119f565b94506101008d015193506101208d0151925061145d6101408e0161119f565b915061146c6101608e0161119f565b90509295989b509295989b509295989b565b6001600160a01b03169052565b60020b9052565b62ffffff169052565b6001600160a01b0391909116815260200190565b6001600160a01b0394851681526fffffffffffffffffffffffffffffffff9390931660208401529083166040830152909116606082015260800190565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b815181526020808301516001600160a01b0316908201526040808301516fffffffffffffffffffffffffffffffff90811691830191909152606092830151169181019190915260800190565b600060a082019050825182526fffffffffffffffffffffffffffffffff602084015116602083015260408301516040830152606083015160608301526080830151608083015292915050565b600060c082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015292915050565b60006101608201905061160982845161147e565b602083015161161b602084018261147e565b50604083015161162e6040840182611492565b506060830151611641606084018261148b565b506080830151611654608084018261148b565b5060a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516116928285018261147e565b505061014092830151919092015290565b6fffffffffffffffffffffffffffffffff91909116815260200190565b6fffffffffffffffffffffffffffffffff9390931683526020830191909152604082015260600190565b62ffffff91909116815260200190565b90815260200190565b9384526fffffffffffffffffffffffffffffffff9290921660208401526040830152606082015260800190565b918252602082015260400190565b6001600160a01b038116811461175357600080fd5b50565b6fffffffffffffffffffffffffffffffff8116811461175357600080fd5b62ffffff8116811461175357600080fdfea2646970667358221220545814f48d641beafd7751224231f2fb64c8e0b433bb0ddd99851c24a2e61e9464736f6c63430007060033';

type LiquidityProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityProviderConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityProvider__factory extends ContractFactory {
  constructor(...args: LiquidityProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<LiquidityProvider> {
    return super.deploy(overrides || {}) as Promise<LiquidityProvider>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LiquidityProvider {
    return super.attach(address) as LiquidityProvider;
  }
  override connect(signer: Signer): LiquidityProvider__factory {
    return super.connect(signer) as LiquidityProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityProviderInterface {
    return new utils.Interface(_abi) as LiquidityProviderInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LiquidityProvider {
    return new Contract(address, _abi, signerOrProvider) as LiquidityProvider;
  }
}
