import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import {ApolloLink} from 'apollo-link';
import {setContext} from 'apollo-link-context';
import {BrowserRouter} from 'react-router-dom';

import AppRoot from './component/AppRoot';

const cache = new InMemoryCache();
const contextLink = setContext((context) => {
  return context;
});
const httpLink = createHttpLink({
  cache,
  fetch,
  uri: 'http://localhost:4041/graphql',
});
const link = ApolloLink.from([contextLink, httpLink]);

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
    <BrowserRouter>
      <AppRoot client={client} />
    </BrowserRouter>,
    root,
  );
};

render();
