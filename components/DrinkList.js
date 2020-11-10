import React, { useState } from 'react'
import { View, Text, Image } from "react-native"
import styled from 'styled-components/native'

//styled components
export const CardView = styled.View`
  background-color: blue;
  border: 1px solid green;
  width: 100px;
  height: 300px;

  &:hover {
    background-color: red;
  }
`

const DrinkList = ({ strDrink, strDrinkThumb }) => {

  return (
    <View>
      <Text>{strDrink} </Text>
      {/* <Text>{strDrinkThumb}</Text> */}

      <Image
        source={{ uri: `${strDrinkThumb}` }}
        style={{
          width: 300,
          height: 300,
          padding: 10,
          border: solid "blue",
        }}
      />

    </View >
  )
}

export default DrinkList