import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo/client'
import Display from './components/Display'
export default App = () => (
  <ApolloProvider client={client}>
     <NativeRouter>
        <Route exact path="/" component={Display} />
     </NativeRouter>
  </ApolloProvider>
);
