import React from 'react'
import {Text, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks'
import styled from 'styled-components'
import RANDOM_JOKE  from '../../apollo/queries'
const Card = (props) => {
    const {palette, joke} = props
    const color = palette == undefined ? "000" : palette[0];
    const JokeText = styled.Text`
            color:#${color}
            padding:5px;
            font-size:50px;
            text-align:center;`
    if(joke === undefined){
        return  <View>
                    <JokeText adjustsFontSizeToFit>Loading</JokeText>
                </View>
    }
    return  <View>
                <JokeText adjustsFontSizeToFit>{joke.random.value}</JokeText>
            </View>
}
export default Card