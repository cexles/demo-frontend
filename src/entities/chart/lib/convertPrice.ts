import Decimal from 'decimal.js';

/**
 * Converts the square root price represented as a string to a number.
 * @param sqrtPriceX96 - The square root price value to convert.
 * @returns The converted price as a number.
 */
function convertPrice(sqrtPriceX96: string): Number {
  const price = new Decimal(sqrtPriceX96)
    .dividedBy(new Decimal(2).pow(96))
    .pow(2)
    .toFixed(4)
    .toString();

  return Number(price);
}

export default convertPrice;
