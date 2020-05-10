import React from 'react'
import {Text, View, Button} from 'react-native';
import  Joke from '../Joke'
import styled from 'styled-components'
import palette from 'google-palette'
import { accelerometer } from 'react-native-sensors';
const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
  x < 30 || y < 30 ?  null : console.log({ x, y, z, timestamp })

);
const newJoke = () =>{
  console.log("New Joke")
}

        var _palette = palette('tol-sq', 2);
        console.log(_palette[_palette.length])
        const JokeView = styled.View`
          background:#${_palette[1]}
        `;
        
Display = () => {

    return  <JokeView>
                <Joke palette={_palette}/>
                <Button
                  title="New Joke"
                  onPress={newJoke}
                />
            </JokeView>
}
export default Display
