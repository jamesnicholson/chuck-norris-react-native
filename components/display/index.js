import React, { useState, useEffect } from 'react'
import {Text, View, Button} from 'react-native';
import Card from '../Card'
import styled from 'styled-components'
import palette from 'google-palette'
import getRandomScheme from '../../utils/palettes'
import RANDOM_JOKE  from '../../apollo/queries'
import { useLazyQuery } from '@apollo/react-hooks';

Display = () => {
    const [getJoke,  {loading, data }] = useLazyQuery(RANDOM_JOKE, {
      fetchPolicy: "no-cache"
    })
    const [paletteScheme, setPaletteScheme] = useState("tol");
    const [joke, setJoke] = useState();
    const currentPalette = palette(paletteScheme, 10) === null ? palette('tol', 10) : palette(paletteScheme, 10);
    const newJoke = () =>{
      getJoke()
      setPaletteScheme(getRandomScheme())
      setJoke(data)
    }
    useEffect(()=>{
     console.log("current joke", joke)
    })
    const JokeView = styled.View`
      background:#${currentPalette[currentPalette.length-2]}
    `;

    if(loading){
      return  <View>
                  <Text>Loading</Text>
              </View>
    }
    return  <JokeView>
                <Card palette={currentPalette} joke={joke}/>
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