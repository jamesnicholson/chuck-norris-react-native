import React, {useState, useMemo} from 'react';
import { NativeRouter, Route, withRouter } from "react-router-native";
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo/client'
import {ThemeContext} from './utils/userContext'
import Display from './components/Display'
import Categories from './components/Categories'

export default App = () => {
   const [category, setCategory] = useState("random");
   const value = useMemo(() => ({ category, setCategory }), [category, setCategory]);

   return <ApolloProvider client={client}>
               <NativeRouter> 
                  <ThemeContext.Provider value={value}>
                     <Route exact path="/" component={withRouter(Display)} />
                     <Route path="/categories" component={withRouter(Categories)} />
                  </ThemeContext.Provider>
               </NativeRouter>
            </ApolloProvider>
      
}
   


