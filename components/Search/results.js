import React from 'react'
import {Text, View} from 'react-native';
import styled from 'styled-components'
const Card = (props) => {
    const {searchResults} = props
    const JokeText = styled.Text`
            color:#000000;
            padding:5px;
            font-size:50px;
            text-align:center;`
            
    if(searchResults === undefined){
        return  <View>
                    <JokeText adjustsFontSizeToFit>Loading</JokeText>
                </View>
    }
    return  <View>
                <JokeText adjustsFontSizeToFit>{joke.getJoke.value}</JokeText>
            </View>
}
export default Card