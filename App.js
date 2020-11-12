import 'react-native-gesture-handler';
// import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
//above from the reactnative.dev 

import React, { useEffect, useState } from 'react'
import { ScrollView } from "react-native"
import styled from 'styled-components/native'

import DrinkList from './components/DrinkList'
import DrinkRecipe from "./components/DrinkRecipe"


//provides a way for your app to transition between screens where each new screen 
//is placed on top of a stack
const Stack = createStackNavigator()

const App = () => {
  //fetch gin-based drink from already filtered API
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
      .then(response => response.json())
      // .then(data => console.log(data.drinks))
      .then(data => setDrink(data.drinks))
  }, [])


  //fetch recipe for every cocktail
  const [recipes, setRecipes] = useState([])

  //replace id with ${idDrink}

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17242`)
      .then(response => response.json())
      // .then(data => console.log(data.drinks))
      .then(data => setRecipes(data.drinks))
  }, [])


  return (
    < Container >
      <AppTitle>The Ginious' List</AppTitle>
      <ScrollView>
        {/* {drink.map(cocktail => (
          <DrinkList
            key={cocktail.idDrink}
            {...cocktail}
          />
        ))} */}
      </ScrollView>
      <DrinkRecipe
        instructions={recipes.strInstructions}
      />
    </Container >
  )
}

export default App


//STYLED components

const Container = styled.View`
  background-color: papayawhip;
  align-items: center;
  padding: 8px
`

const AppTitle = styled.Text`
  padding: 10px;
  font-size: 24px;
  color: palevioletred;
  background-color: yellow
`