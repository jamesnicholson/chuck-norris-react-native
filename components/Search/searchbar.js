import React, {useContext, useState, useEffect} from 'react'
import {View, TextInput, Button} from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_FOR_JOKES }  from '../../apollo/queries'
import {ThemeContext}  from '../../utils/userContext'
import styled from 'styled-components'

const SearchBar = () => {
    const {jokesLoading, setJokesLoading} = useContext(ThemeContext);
    const {setSearchQuery} = useContext(ThemeContext);
    const [searchTerm, setSearchTerm ] = useState("");
    const [getJokes, {loading, data, error}] = useLazyQuery(SEARCH_FOR_JOKES, {
        fetchPolicy: "no-cache",
        variables: { searchTerm: searchTerm }})

    useEffect(()=>{
        if(data !== undefined){
            setSearchQuery(data.search.result)
        }
    },[data])
    useEffect(()=>{
        console.log("loading", loading);
        setJokesLoading(loading);
    },[loading])

    const SearchButton = styled.Button`
        width:80%;
        color:#000000;
        background:#eeeeee;`

    return  <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setSearchTerm(text)}
                    value={searchTerm}
                    />
                <SearchButton 
                    onPress={()=>(getJokes())}
                    title="Search" />
            </View>
}
export default SearchBar