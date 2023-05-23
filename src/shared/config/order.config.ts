const orderTypes = {
  'stop-loss': {
    name: 'Stop loss',
    description:
      'A market order that waits for prices to dip below a stop price trigger, designed to swap out of the input asset to prevent losses.',
  },
  'take-profit': {
    name: 'Take profit',
    description:
      'Take Profits trigger when they surpass a price threshold, initiating a limit order, behaving like a reversed stop loss, designed to swap out of an asset to secure profits.',
  },
  dca: {
    name: 'DCA',
    description: 'Regularly investing fixed amounts to reduce market timing risk.',
  },
  trailing: {
    name: 'Trailing stop',
    description:
      'A Trailing Stop order is a stop order that can be set at a defined percentage or amount away from the current market price of a specific asset.',
  },
};

export default orderTypes;
