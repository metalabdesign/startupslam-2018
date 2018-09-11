import gql from 'graphql-tag';

export default gql`
  type PriceValue {
    amount: Float!
    currency: String!
  }

  type Price {
    value(currency: String): PriceValue
  }
`;
