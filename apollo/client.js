import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: 'http://159.203.110.164:9001/graphql',
});
export  default client;