import React, { useState, useEffect, useContext } from 'react'
import {Text, View, TextInput, Button} from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components'
import { SEARCH_FOR_JOKES }  from '../../apollo/queries'
Search = () =>{
    const [searchTerm, setSearchTerm ] = useState("");
    const [searchResults, setSearchResults ] = useState(null);
    const [getJokes, {loading, data, error}] = useLazyQuery(SEARCH_FOR_JOKES, {
        fetchPolicy: "no-cache",
        variables: { searchTerm: searchTerm }})

    useEffect(()=>{

       if(data !== undefined){
          console.log(data.search.result)
          setSearchResults(data.search.result)
        // setSearchResults(data.result)
       }
       
    },[data])
 
    const JokeView = styled.View`
      padding:5px;
      color:#000000;
      background-color: #eeeeee;`

    const JokeText = styled.Text`
      color:#000000;
      background-color: #eeeeee;`

    const JokeButton = styled.Button`
      color:#000000;
      background:#eeeeee;`



      return <JokeView>

                <Text>Search Page</Text>

                <Button 
                  onPress={()=>(getJokes())}
                  title="Search" />

                <TextInput
                    onChangeText={text => setSearchTerm(text)}
                    value={searchTerm}
                    />

                {loading? <JokeView><JokeText>Loading</JokeText></JokeView> : null}
  {searchResults? searchResults.map((item, index)=>(<JokeView><Text key={index}>{item.value}</Text></JokeView>)) : null}

            </JokeView>



}

export default Search

/**
 * 
 *  {data? data.results.map((item, index)=>(<Text key={index}>item</Text>)) : null}
 */