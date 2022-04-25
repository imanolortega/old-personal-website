import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let client;

/* Get Apollo Client */

export function getApolloClient(uri) {
  if (!client) {
    client = _createApolloClient(uri);
  }
  return client;
}

/* Create Apollo Client */

export function _createApolloClient(uri) {
  return new ApolloClient({
    link: new HttpLink({
      uri: uri,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
}