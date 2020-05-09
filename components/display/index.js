import React from 'react'
import {Text, View, Button} from 'react-native';
import  Joke from '../Joke'
import styled from 'styled-components'
import palette from 'google-palette'
//import { accelerometer } from "react-native-sensors";

/*
const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
  console.log({ x, y, z, timestamp })
);*/


var _palette = palette(['sequential'], 10, 0);
const JokeText = styled.Text`
        font-size:50px
        text-align:center;
        padding:5px;
        margin:5px;
`
Display = () => {
    return  <View>
                <Joke/>
            </View>
}
export default Display
