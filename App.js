import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
//above from the reactnative.dev 

import React, { useEffect, useState } from 'react'
import { ScrollView } from "react-native"
import styled from 'styled-components/native'

import DrinkList from './components/DrinkList'
import DrinkRecipe from "./components/DrinkRecipe"


const Container = styled.View`
  background-color: papayawhip;
  align-items: center;
`

const AppTitle = styled.Text`
  // flex: 0.125;
  padding: 10px;
  font-size: 24px;
  color: palevioletred;
`

//provides a way for your app to transition between screens where each new screen 
//is placed on top of a stack
const Stack = createStackNavigator()

const App = () => {

  const [drink, setDrink] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
      .then(response => response.json())
      // .then(data => console.log(data.drinks))
      .then(data => setDrink(data.drinks))
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AppTitle}
          options={{ title: "Let's ginx it!" }}
        />
        <Stack.Screen
          name="Cocktails"
          component={DrinkList}
          options={{ title: "List of cocktail" }}
        />


        <Container>
          {/* <AppTitle>The Ginious' List</AppTitle> */}
          {/* <ScrollView>
          {drink.map(cocktail => (
            <DrinkList
              key={cocktail.idDrink}
              {...cocktail}
            />
          ))}
        </ScrollView> */}
        </Container>
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App
