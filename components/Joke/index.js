import React from 'react'
import {Text, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks'
import styled from 'styled-components'
import RANDOM_JOKE  from '../../apollo/queries'

const Joke = (props) => {
    const {palette} = props
    const color = palette == undefined ? "000" : palette[0];
    const JokeText = styled.Text`
            color:#${color}
            padding:5px;
            font-size:50px;
            text-align:center;`
        
    const {loading, error, data} = useQuery(RANDOM_JOKE)

    if(loading) return  <View>
                            <Text>Loading</Text>
                        </View>
    if(error)   return   <View>
                            <Text>{error.name}</Text>
                            <Text>{error.message}</Text>
                        </View>
                return  <View>
                            <JokeText adjustsFontSizeToFit>{data.random.value}</JokeText>
                        </View>
}
export default Joke