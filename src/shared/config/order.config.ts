import { DateTime } from 'luxon';

const currentDateTime = DateTime.now();

export const orderTypes = {
  'stop-loss': {
    name: 'Stop-Loss',
    description:
      'A market order that waits for prices to dip below a stop price trigger, designed to swap out of the input asset to prevent losses.',
    action: 0,
  },
  'take-profit': {
    name: 'Take-Profit',
    description:
      'Take Profits trigger when they surpass a price threshold, initiating a limit order, behaving like a reversed stop loss, designed to swap out of an asset to secure profits.',
    action: 1,
  },
  dca: {
    name: 'DCA',
    description: 'Regularly investing fixed amounts to reduce market timing risk.',
    action: 2,
  },
  trailing: {
    name: 'Trailing profit',
    description:
      'A Trailing Stop order is a stop order that can be set at a defined percentage or amount away from the current market price of a specific asset.',
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
