import 'react-native-gesture-handler';
// import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
//above from the reactnative.dev 

import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from "react-native"
import styled from 'styled-components/native'

import DrinkList from './components/DrinkList'
import DrinkRecipe from "./components/DrinkRecipe"
import { FlatList } from 'react-native-gesture-handler';


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

  console.log(drink[0])


  return (
    < Container >
      <AppTitle>The Ginious' List</AppTitle>

      {/* FLATLIST alternative */}

      <FlatList
        data={drink}
        renderItem={({ item: cocktail }) => //<Text>{`Hello ${item.strDrink}`}</Text>
          <DrinkList
            drinkName={cocktail.strDrink}
            drinkImg={cocktail.strDrinkThumb}
          />}
      />

      {/* SCROLLVIEW alternative */}

      {/* <ScrollView> */}
      {/* {drink.map(cocktail => (
          <DrinkList
            key={cocktail.idDrink}
            {...cocktail}
          />
        ))} */}
      {/* </ScrollView> */}
      {/* <DrinkRecipe
        instructions={recipes.strInstructions}
      /> */}
    </Container >
  )
}

export default App


//STYLED components

const Container = styled.View`
  flex: 1;
  background-color: #E2E2E0;
  align-items: center;
  padding: 8px;
`

const AppTitle = styled.Text`
  padding: 10px;
  font-size: 24px;
  color: palevioletred;
  // background-color: yellow
`