import React, { useState, useEffect } from 'react'
import {Text, View, Button} from 'react-native';
import  Joke from '../Joke'
import styled from 'styled-components'
import palette from 'google-palette'
import getRandomScheme from '../../utils/palettes'

Display = () => {
    const [paletteScheme, setPaletteScheme] = useState("tol");
    const currentPalette = palette(paletteScheme, 10) === null ? palette('tol', 10) : palette(paletteScheme, 10);
    const newJoke = () =>{
      setPaletteScheme(getRandomScheme())
    }
    useEffect(()=>{
     console.log("current Scheme", paletteScheme)
     console.log("current palette", currentPalette)
    })
    const JokeView = styled.View`
      background:#000
    `;
    return  <JokeView>
                <Joke palette={currentPalette}/>
                <Button
                  title="New Joke"
                  onPress={newJoke}
                />
            </JokeView>
}
export default Display

 /* import { accelerometer } from 'react-native-sensors';
const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
    x < 30 || y < 30 ?  null : console.log({ x, y, z, timestamp })
  );*/