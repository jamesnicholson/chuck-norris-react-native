import React, { useState, useEffect, useContext } from 'react'
import {Text, View, Button} from 'react-native';
import {ThemeContext}  from '../../utils/userContext'
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components'
import { GET_JOKE_BY_CATEGORY }  from '../../apollo/queries'
import Card from '../Card'
import Header from '../Header'

Display = ({ navigation }) => {
    
    const {category} = useContext(ThemeContext);
    const {joke, setJoke} = useContext(ThemeContext);
    const [getJoke, {loading, data }] = useLazyQuery(GET_JOKE_BY_CATEGORY, {
      fetchPolicy: "no-cache",
      variables: { category: category ? category : 'dev' },
    })
    const newJoke = () => {
      getJoke()
      setJoke(data)
    }
    useEffect(()=>{
     if(data === undefined){
       newJoke()
     }
    },[data])

    const JokeText = styled.Text`
      color:#000000;
      padding:5px;
      font-size:50px;
      text-align:center;`
    const JokeView = styled.View`
      background:#eeeeee;`

    const JokeButton = styled.Button`
      color:#000000;
      background:#eeeeee;`

    if(loading == true && joke !== null){
        return  <View>
                  <JokeText adjustsFontSizeToFit>Loading</JokeText>
                </View>
    }
    return  <View>
                <Header category={category} navigation={navigation}/>
              <Card 
                joke={data} />
              <JokeButton
                  title="New Joke"
                  onPress={newJoke}
                />
            </View>
}
export default Display