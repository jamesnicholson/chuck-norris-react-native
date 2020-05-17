import React, {useState, useMemo} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeContext} from './utils/userContext'
import client from './apollo/client'
import Display from './components/Display'
import Categories from './components/Categories'

export default App = () => {
   const [category, setCategory] = useState("random");
   const value = useMemo(() => ({ category, setCategory }), [category, setCategory]);
   const Stack = createStackNavigator();
   return   <ApolloProvider client={client}>
               <ThemeContext.Provider value={value}>
                  <NavigationContainer>
                     <Stack.Navigator>
                        <Stack.Screen name="display" component={Display} />
                        <Stack.Screen name="categories" component={Categories} />
                     </Stack.Navigator>
                     </NavigationContainer>
               </ThemeContext.Provider>
            </ApolloProvider>

      
}
   


