
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from './apollo/client'
import Display from './components/display'
const client = createApolloClient(9988989889);
export default App = () => (
  <ApolloProvider client={client}>
     <NativeRouter>
        <Route exact path="/" component={Display} />
     </NativeRouter>
  </ApolloProvider>
);
