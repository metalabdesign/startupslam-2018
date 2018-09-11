import gql from 'graphql-tag';

export default gql`
  type Query {
    appVersion: String
  }
  type Mutation {
    stub: Boolean
  }
`;
