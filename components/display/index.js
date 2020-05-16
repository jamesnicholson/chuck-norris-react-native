import React, { useState, useEffect, useRef } from 'react'
import {Text, View, Button} from 'react-native';
import { Link } from "react-router-native";
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components'
import RANDOM_JOKE  from '../../apollo/queries'
import Card from '../Card'


Display = () => {
    const [getJoke, {loading, data }] = useLazyQuery(RANDOM_JOKE, {
      fetchPolicy: "no-cache"
    })
    const [joke, setJoke] = useState();
    const JokeText = styled.Text`
        color:#000000;
        padding:5px;
        font-size:50px;
        text-align:center;`

     const JokeView = styled.View`
        background:#eeeeee;
      `;
    const JokeButton = styled.Button`
        color:#000000;
        width:100%;`

    const newJoke = () => {
      getJoke()
      setJoke(data)
    }

    useEffect(()=>{
     if(data === undefined){
       getJoke()
     }
    },[data])

    if(loading == true){
        return  <JokeView>
                  <JokeText adjustsFontSizeToFit>Loading</JokeText>
                </JokeView>
    }
      return  <JokeView>
                <Card joke={data}/>
                <Button
                  title="New Joke"
                  onPress={newJoke}
                />
              </JokeView>
}
export default Display

