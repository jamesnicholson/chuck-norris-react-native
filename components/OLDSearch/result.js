import React from 'react'
import {Text, View, ScrollView} from 'react-native';
import styled from 'styled-components'
const Result = (props) => {
    const {searchResult} = props
    console.log(searchResult)

    const ResultText = styled.Text`
            color:#000000;
            padding:5px;
            font-size:14px;
            text-align:center;`
            
    if(searchResult === undefined || searchResult === null){

        return  <View>
                    <ResultText>searchResult is null or undefined</ResultText>
                </View>
    }
    return  <ScrollView>
                {searchResult.map((item, index) => <ResultText key={index}>{item.value}</ResultText>)}
            </ScrollView>
}
export default Result