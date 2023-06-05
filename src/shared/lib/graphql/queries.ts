import { gql } from '@apollo/client';

export const GET_POOL_PRICE = gql`
  query GetPoolPrice($poolId: String!) {
    pool(id: $poolId) {
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      token0Price
      token1Price
    }
  }
`;

export const GET_POOL_SWAPS = gql`
  query GetPoolSwaps($poolId: String!, $first: Int!) {
    pool(id: $poolId) {
      token0 {
        id
      }
      token1 {
        id
      }
      swaps(first: $first, orderBy: timestamp, orderDirection: desc) {
        timestamp
        sqrtPriceX96
      }
    }
  }
`;
