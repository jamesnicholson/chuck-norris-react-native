import React from 'react'
import {Text, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks'
import styled from 'styled-components'
import RANDOM_JOKE  from '../../apollo/queries'

const Joke = () => {
    const {loading, error, data} = useQuery(RANDOM_JOKE)
    if(loading) return  <View>
                            <Text>Loading</Text>
                        </View>

    if(error) return   <View>
                            <Text>{error.name}</Text>
                            <Text>{error.message}</Text>
                        
                        </View>
    return  <View>
                <Text adjustsFontSizeToFit>{data.random.value}</Text>
            </View>
}
export default Joke