import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import {ApolloProvider} from 'react-apollo';

import AppInfo from './component/AppInfo';

const cache = new InMemoryCache();
const link = createHttpLink({
  cache,
  fetch,
  uri: 'http://localhost:4041/graphql',
});

const client = new ApolloClient({
  link,
  cache,
});

const render = () => {
  const root = document.getElementById('app');

  if (!root) {
    throw new Error('`app` node missing');
  }

  ReactDOM.render(
    <ApolloProvider client={client}>
      <AppInfo />
    </ApolloProvider>,
    root,
  );
};

render();
