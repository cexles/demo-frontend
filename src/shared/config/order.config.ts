import { DateTime } from 'luxon';

const currentDateTime = DateTime.now();

export const orderTypes = {
  'stop-loss': {
    name: 'Stop-Loss',
    description:
      'Order that waits for prices to dip below a stop price trigger, designed to swap out of the input asset to prevent losses.',
    action: 0,
  },
  'take-profit': {
    name: 'Take-Profit',
    description:
      'Order that is triggered when an asset exceeds a price threshold, initiates profit taking, designed to replace an asset for profit.',
    action: 1,
  },
  dca: {
    name: 'DCA',
    description:
      'Order that helps to buy an asset on a regular basis (e.g. every week for one month) and allows you to average the purchase price. Perfect for beginners.',
    action: 2,
  },
  trailing: {
    name: 'Trailing profit',
    description:
      'Order in which the selling price of an asset is automatically adjusted upward as the market price rises, allowing investors to make a profit while allowing for potential further profits.',
    action: 3,
  },
};

export const orderExpirationOptions = [
  {
    id: crypto.randomUUID(),
    name: 'Never',
    value: currentDateTime.plus({ years: 10 }).toUnixInteger().toString(),
    defaultChecked: true,
  },
  {
    id: crypto.randomUUID(),
    name: '1 month',
    value: currentDateTime.plus({ month: 1 }).toUnixInteger().toString(),
  },
  {
    id: crypto.randomUUID(),
    name: '1 week',
    value: currentDateTime.plus({ weeks: 1 }).toUnixInteger().toString(),
  },
  {
    id: crypto.randomUUID(),
    name: '1 day',
    value: currentDateTime.plus({ days: 1 }).toUnixInteger().toString(),
  },
];

export const orderPeriodOptions = [
  {
    id: crypto.randomUUID(),
    name: '1 month',
    value: '2628000',
    defaultChecked: true,
  },
  {
    id: crypto.randomUUID(),
    name: '1 week',
    value: '604800',
  },
  {
    id: crypto.randomUUID(),
    name: '1 day',
    value: '86400',
  },
];
