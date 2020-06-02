import React, { useState, useEffect, useContext } from 'react'
import {Text, View, ScrollView, TextInput, Button} from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import {ThemeContext}  from '../../utils/userContext'
import styled from 'styled-components'
import { SEARCH_FOR_JOKES }  from '../../apollo/queries'
import Result from './result'
import SearchBar from './searchbar'
Search = () =>{
  const {jokesLoading, setJokesLoading} = useContext(ThemeContext);
    const {searchQuery, setSearchQuery} = useContext(ThemeContext);
    useEffect(()=>{
        console.log("searchQuery: ",searchQuery)
    },[searchQuery])

    const SearchView = styled.View`
        padding:5px;
        color:#000000;
        background:#393939;`

    const SearchText = styled.Text`
        color:#000000;
        background-color: #eeeeee;`


    const SearchTextInput= styled.TextInput`
        color:#000000;
        background:#eeeeee;`       

      return <SearchView>
                <Text>Search Page</Text>
                <SearchBar />
                {jokesLoading? <SearchView><SearchText>Loading</SearchText></SearchView> : null}
                {jokesLoading === false ? <Result searchResult={searchQuery} /> : null}
                
            </SearchView>
}
export default Search