import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
const createApolloClient = (token) => {
  const link = new HttpLink({
    uri: `http://159.203.110.164:9001/graphql`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const cache = new InMemoryCache()
  const client = new ApolloClient({
    link,
    cache
  });
  return client;
}
export default createApolloClient;