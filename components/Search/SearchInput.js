import React, { useState, useEffect, useContext } from 'react'
import {Text, View, ScrollView, TextInput, Button} from 'react-native';
import {ThemeContext}  from '../../utils/userContext'

const SearchInput = ({search}) => {
    const [searchQueryState, setSearchQueryState] = useState();
    const {setSearchQuery} = useContext(ThemeContext);

    const handleSubmit = () => {
        if (searchQueryState) {
          setSearchQuery(searchQueryState)
          search()
        } 
      };
      
    return <View>
            <TextInput 
                key="textinput1" 
                style={{width:"100%", padding:10, 
                borderWidth:1, marginTop:20, marginBottom:20}}
                onChangeText={(text)=> setSearchQueryState(text)}                             
                value={searchQueryState}
            />
            <Text onPress={()=>{handleSubmit()}}>Search</Text>
          </View>

}
export default SearchInput
