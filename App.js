import React, {useState, useMemo} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeContext} from './utils/userContext'
import client from './apollo/client'
import Display from './components/Display'
import Categories from './components/Categories'
import Search from './components/Search'
export default App = () => {
   const [category, setCategory] = useState("food");
   const [joke, setJoke] = useState(null);
   const [searchQuery, setSearchQuery] = useState(null);
   const [jokesLoading, setJokesLoading] = useState(true);
   const themeValue = useMemo(() => ({ category, setCategory, joke, setJoke , searchQuery, setSearchQuery, jokesLoading, setJokesLoading }), [category, setCategory, joke, setJoke, searchQuery, setSearchQuery, jokesLoading, setJokesLoading]);
   const Stack = createStackNavigator();
   return   <ApolloProvider client={client}>
               <ThemeContext.Provider value={themeValue}>
                  <NavigationContainer>
                     <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name="search" component={Search} />
                        <Stack.Screen name="display" component={Display} />
                        <Stack.Screen name="categories" component={Categories} />
                       
                     </Stack.Navigator>
                  </NavigationContainer>
               </ThemeContext.Provider>
            </ApolloProvider>
}


