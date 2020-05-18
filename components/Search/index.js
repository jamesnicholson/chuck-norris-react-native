import React, { useState, useEffect, useContext } from 'react'
import {Text, View, TextInput, Button} from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components'
import { SEARCH_FOR_JOKES }  from '../../apollo/queries'
Search = () =>{
    const [searchTerm, setSearchTerm ] = useState("");
    const [getJokes, {loading, data }] = useLazyQuery(SEARCH_FOR_JOKES, {
        fetchPolicy: "no-cache",
        variables: { searchTerm: searchTerm },
    })    
    const JokeView = styled.View`
        color:#000000;
      background-color: #eeeeee;`
      const JokeText = styled.Text`
      color:#000000;
    background-color: #eeeeee;`
    const JokeButton = styled.Button`
    color:#000000;
    background:#eeeeee;`
    if(loading) return <JokeView><JokeText>Loading</JokeText></JokeView>

      return <JokeView>
                <Text>Search Page</Text>
                <TextInput
                    onChangeText={text => setSearchTerm(text)}
                    value={searchTerm}
                    />
        
                <JokeButton
                    title="Categoryies"
                    onPress={() =>getJokes()}
                  />
              {
                  data === undefined ? <JokeView><JokeText>data</JokeText></JokeView> : <JokeView><JokeText>no data</JokeText></JokeView> 
              }
                    
            </JokeView>
}

export default Search