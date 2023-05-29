/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers';
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types';

import * as Contracts from '.';

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'AutomationCompatibleInterface',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AutomationCompatibleInterface__factory>;
    getContractFactory(
      name: 'IERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: 'IERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: 'IERC721Enumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: 'IERC721Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: 'AccessControl',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: 'IERC721Receiver',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: 'AccessControl',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: 'AccessControlEnumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: 'IAccessControl',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: 'IAccessControlEnumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: 'IERC20Permit',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: 'IERC20Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: 'ERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: 'IERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: 'IUniswapV3MintCallback',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3MintCallback__factory>;
    getContractFactory(
      name: 'IUniswapV3SwapCallback',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: 'IUniswapV3Factory',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: 'IUniswapV3Pool',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolActions',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolDerivedState',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolEvents',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolImmutables',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolOwnerActions',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: 'IUniswapV3PoolState',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: 'LiquidityManagement',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.LiquidityManagement__factory>;
    getContractFactory(
      name: 'PeripheryImmutableState',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.PeripheryImmutableState__factory>;
    getContractFactory(
      name: 'PeripheryPayments',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.PeripheryPayments__factory>;
    getContractFactory(
      name: 'IWETH9',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IWETH9__factory>;
    getContractFactory(
      name: 'IERC721Permit',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Permit__factory>;
    getContractFactory(
      name: 'INonfungiblePositionManager',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.INonfungiblePositionManager__factory>;
    getContractFactory(
      name: 'IPeripheryImmutableState',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IPeripheryImmutableState__factory>;
    getContractFactory(
      name: 'IPeripheryPayments',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IPeripheryPayments__factory>;
    getContractFactory(
      name: 'IPoolInitializer',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IPoolInitializer__factory>;
    getContractFactory(
      name: 'ISwapRouter',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: 'IERC20WithDecimals',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20WithDecimals__factory>;
    getContractFactory(
      name: 'ISwapHelperUniswapV3',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ISwapHelperUniswapV3__factory>;
    getContractFactory(
      name: 'IWETH',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: 'LiquidityProvider',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.LiquidityProvider__factory>;
    getContractFactory(
      name: 'MockERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: 'MockERC20WithName',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MockERC20WithName__factory>;
    getContractFactory(
      name: 'MockWETH',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.MockWETH__factory>;
    getContractFactory(
      name: 'SwapHelperUniswapV3',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.SwapHelperUniswapV3__factory>;
    getContractFactory(
      name: 'TradingPlatform',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.TradingPlatform__factory>;

    getContractAt(
      name: 'AutomationCompatibleInterface',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AutomationCompatibleInterface>;
    getContractAt(
      name: 'IERC165',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: 'IERC20',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: 'IERC721',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: 'IERC721Enumerable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: 'IERC721Metadata',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: 'AccessControl',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: 'IERC20',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: 'IERC721Receiver',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: 'AccessControl',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: 'AccessControlEnumerable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AccessControlEnumerable>;
    getContractAt(
      name: 'IAccessControl',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: 'IAccessControlEnumerable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IAccessControlEnumerable>;
    getContractAt(name: 'ERC20', address: string, signer?: ethers.Signer): Promise<Contracts.ERC20>;
    getContractAt(
      name: 'IERC20Permit',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: 'IERC20Metadata',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: 'IERC20',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: 'ERC165',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: 'IERC165',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: 'IUniswapV3MintCallback',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3MintCallback>;
    getContractAt(
      name: 'IUniswapV3SwapCallback',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3SwapCallback>;
    getContractAt(
      name: 'IUniswapV3Factory',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3Factory>;
    getContractAt(
      name: 'IUniswapV3Pool',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: 'IUniswapV3PoolActions',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: 'IUniswapV3PoolDerivedState',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: 'IUniswapV3PoolEvents',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: 'IUniswapV3PoolImmutables',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: 'IUniswapV3PoolOwnerActions',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: 'IUniswapV3PoolState',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: 'LiquidityManagement',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.LiquidityManagement>;
    getContractAt(
      name: 'PeripheryImmutableState',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.PeripheryImmutableState>;
    getContractAt(
      name: 'PeripheryPayments',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.PeripheryPayments>;
    getContractAt(
      name: 'IWETH9',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IWETH9>;
    getContractAt(
      name: 'IERC721Permit',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Permit>;
    getContractAt(
      name: 'INonfungiblePositionManager',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.INonfungiblePositionManager>;
    getContractAt(
      name: 'IPeripheryImmutableState',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IPeripheryImmutableState>;
    getContractAt(
      name: 'IPeripheryPayments',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IPeripheryPayments>;
    getContractAt(
      name: 'IPoolInitializer',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IPoolInitializer>;
    getContractAt(
      name: 'ISwapRouter',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ISwapRouter>;
    getContractAt(
      name: 'IERC20WithDecimals',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20WithDecimals>;
    getContractAt(
      name: 'ISwapHelperUniswapV3',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ISwapHelperUniswapV3>;
    getContractAt(name: 'IWETH', address: string, signer?: ethers.Signer): Promise<Contracts.IWETH>;
    getContractAt(
      name: 'LiquidityProvider',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.LiquidityProvider>;
    getContractAt(
      name: 'MockERC20',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.MockERC20>;
    getContractAt(
      name: 'MockERC20WithName',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.MockERC20WithName>;
    getContractAt(
      name: 'MockWETH',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.MockWETH>;
    getContractAt(
      name: 'SwapHelperUniswapV3',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.SwapHelperUniswapV3>;
    getContractAt(
      name: 'TradingPlatform',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.TradingPlatform>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer,
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer,
    ): Promise<ethers.Contract>;
  }
}
