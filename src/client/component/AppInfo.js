import * as React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const APP_VERSION_QUERY = gql`
  query myQuery {
    appVersion
  }
`;

export default () => (
  <Query query={APP_VERSION_QUERY}>
    {({data, error, loading}) => {
      if (error || loading) {
        return ':(';
      }
      return data.appVersion;
    }}
  </Query>
);
