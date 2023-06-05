import { poolHelper } from '@/shared/config/token.config';

/**
 * Retrieves the pool ID for a given pair of tokens.
 * @param token0 The first token.
 * @param token1 The second token.
 * @returns The pool ID if found, otherwise null.
 */
function getPoolId(token0: string, token1: string) {
  const tokenA = parseInt(token0, 16);
  const tokenB = parseInt(token1, 16);
  if (tokenA > tokenB) {
    const pair = `${token1}_${token0}`;
    return poolHelper[pair].poolId;
  }
  if (tokenB > tokenA) {
    const pair = `${token0}_${token1}`;
    return poolHelper[pair].poolId;
  }

  return null;
}

export default getPoolId;
