import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let client;

/* Get Apollo Client */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/* Create Apollo Client */

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri:  process.env.STRAPI_URL,
      credentials: "same-origin",
    }),
    cache: new InMemoryCache(),
  });
}
