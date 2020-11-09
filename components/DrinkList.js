import React, { useState } from 'react'
import { View, Text } from "react-native"
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

const DrinkList = ({ strDrink }) => {

  // [drink, setDrink] = useState([]);

  // fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
  //   .then(response => response.json())
  //   .then(data => console.log(data.drinks))

  return (
    <View>
      <Text>{strDrink}</Text>

    </View>
  )
}

export default DrinkList