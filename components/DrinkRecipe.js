import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

//idDrink should be passed in via useParams -> need a route

//CSS in JS to try sth new
const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20
  }
})


const DrinkRecipe = ({ instructions }) => {
  //fetch recipe for every cocktail
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17242`)
      .then(response => response.json())
      // .then(data => console.log(data.drinks))
      .then(data => setRecipes(data.drinks))
  }, [])

  //recipes =  array with one object in it
  console.log({ recipes })

  return (
    <View>
      {
        recipes.map(recipe => {

          return (
            <Text style={styles.text}>
              {recipe.strInstructions}
            </Text>
          )

        })
      }
      <Text style={styles.text}>Hello, second screen!</Text>
    </View>
  )
}

export default DrinkRecipe