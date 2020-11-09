import React, { useEffect, useState } from 'react'
import { Text } from "react-native"
import styled from 'styled-components/native'
import DrinkList from './components/DrinkList'

import CardView from "./components/DrinkList"

const Container = styled.View`
  flex: 0.125;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const AppTitle = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {

  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
      .then(response => response.json())
      // .then(data => console.log(data.drinks))
      .then(data => setDrink(data.drinks))

  }, [])

  return (
    <Container>
      <AppTitle>The Ginious' List</AppTitle>
      {drink.map(cocktail => (
        <DrinkList
          key={cocktail.idDrink}
          {...cocktail}
        />
      ))}
      <CardView>
        <Text>
          Hello, some text in text component.
        </Text>
      </CardView>
    </Container>
  )
}

export default App
