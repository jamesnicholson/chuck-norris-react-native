import { Link } from "react-router-native";
import React, { useState, useEffect, useContext } from 'react'
import {GET_CATEGORIES}  from '../../apollo/queries'
import {Text, View, Button} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components'
import {ThemeContext}  from '../../utils/userContext'
const categories = ({navigation}) => {

    const {category, setCategory} = useContext(ThemeContext);
    const {loading, error, data} = useQuery(GET_CATEGORIES)
    
    const saveCategory = (category) => {
          setCategory(category)
          navigation.push('display')
    }
    const CategoryItem = styled.Text`
        background:#444444;
        color:#ffffff;
        padding:15px;
        margin:5px;
    `
    useEffect(() => {
       // console.log(data)
    },[data])

    if(loading){
        return(
            <View>
                <Text>Categories Loading</Text>
            </View>
        )
    }
    return(
        <View>
            <Text>{category}</Text>
            {                
                data.categories.map((item, index) => {
                    return  <CategoryItem onPress={()=>(saveCategory(item.name))} key={index}> 
                                {item.name}
                            </CategoryItem>
                })
            }
        </View>
    )
}
export default categories