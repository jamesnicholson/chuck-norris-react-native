import React from 'react'
import {Text, View} from 'react-native';
import styled from 'styled-components'
const Card = (props) => {
    const {joke} = props
    const JokeText = styled.Text`
            color:#000000;
            padding:5px;
            margin:5px;
            font-size:16px;
            border:1px;
            text-align:center;`
            
    if(joke === undefined){
        return  <View>
                    <JokeText adjustsFontSizeToFit>Loading</JokeText>
                </View>
    }
    return  <View>
                <JokeText adjustsFontSizeToFit>{joke.getJoke.value}</JokeText>
            </View>
}
export default Card