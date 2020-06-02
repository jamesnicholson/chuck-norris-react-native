import React, { useState, useEffect, useContext } from 'react'
import {Text, View, ScrollView} from 'react-native';
import { useLazyQuery} from '@apollo/react-hooks';
import {ThemeContext}  from '../../utils/userContext'
import styled from 'styled-components'
import { SEARCH_FOR_JOKES }  from '../../apollo/queries'
import SearchInput from './SearchInput'
NewSearch = () =>{
    const [searchResults, setSearchResults ] = useState();
    const {searchQuery} = useContext(ThemeContext);
    const [search, {data}] = useLazyQuery(SEARCH_FOR_JOKES, { variables: { searchTerm: searchQuery}})

    useEffect(()=>{
        setSearchResults(data)
    },[data])

    const SearchView = styled.View`
        padding:5px;
        color:#3a7933;
        background:#793362;`

    const SearchText = styled.Text`
        color:#3a0ca5;
        background-color: #729db7;`   

      return <SearchView>
                <SearchInput search={search} />
                <ScrollView>
                {
                    searchResults === undefined ? null : searchResults.search.result.map((item, index) => {
                        return <View key={index}><SearchText>{item.value}</SearchText></View>
                    })
                }
                </ScrollView>
            </SearchView>
}
export default NewSearch