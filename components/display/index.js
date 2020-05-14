import React, { useState, useEffect } from 'react'
import {Text, View, Button} from 'react-native';
import Card from '../Card'
import styled from 'styled-components'
import palette from 'google-palette'
import getRandomScheme from '../../utils/palettes'
import RANDOM_JOKE  from '../../apollo/queries'
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

Display = () => {
    const [getJoke,  {loading, data }] = useLazyQuery(RANDOM_JOKE, {
      fetchPolicy: "no-cache"
    })
    const [paletteScheme, setPaletteScheme] = useState("tol");
    const [joke, setJoke] = useState();
    const currentPalette = palette(paletteScheme, 10) === null ? palette('tol', 10) : palette(paletteScheme, 10);
    const JokeText = styled.Text`
        color:#${currentPalette[0]}
        padding:5px;
        font-size:50px;
        text-align:center;`
    const newJoke = () => {
      getJoke()
      setPaletteScheme(getRandomScheme())
      setJoke(data)
    }

    useEffect(()=>{
     if(data === undefined){
       getJoke()
     }
    },[data])

    const JokeView = styled.View`
      background:#${currentPalette[currentPalette.length-2]}
    `;

    if(loading == true){
        return  <View>
                    <JokeText adjustsFontSizeToFit>Loading</JokeText>
                </View>
    }
      return  <JokeView>
                <Card palette={currentPalette} joke={data}/>
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