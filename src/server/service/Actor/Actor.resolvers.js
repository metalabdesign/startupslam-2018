import fetch from 'node-fetch';

export default {
  Price: {
    value: async (baseAmount, params, context) => {
      // if (!context.currencyCache) {
      //   const response = await fetch('http://api.openrates.io/latest?base=USD');
      //   const json = await response.json();
      //   context.currencyCache = json;
      // }
      // context.currencyCache.rates[params.currency]

      return {
        currency: params.currency,
        amount: 1.16 * baseAmount,
      };
    },
  },
};
