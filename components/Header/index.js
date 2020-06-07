import React, { useState, useEffect, useContext } from 'react'
import {Text, View} from 'react-native';
import styled from 'styled-components'
import { Icon } from 'react-native-elements'

const HeaderView = styled.View`
    display: flex;
    flex-direction: row;
    alignContent:stretch;
    justify-content:space-around;
    background:steelblue;`

const HeaderText= styled.Text`
    fontSize: 20px;
    margin:15px;
    `

const Header = ({ navigation, category }) =>{
    return  <HeaderView>
                    <Icon
                        raised
                        name='list-alt'
                        type='font-awesome'
                        color='#f50'
                        onPress={() =>navigation.push('categories')} />
                        
                    <HeaderText>{category}</HeaderText>
        
                    <Icon
                        raised
                        name='search'
                        type='font-awesome'
                        color='#f50'
                        onPress={() =>navigation.push('search')} />
            </HeaderView>;
}
export default Header