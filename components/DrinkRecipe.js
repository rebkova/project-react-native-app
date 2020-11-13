import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styled from 'styled-components/native'

import DrinkImage from "./DrinkList"

//idDrink from DrinkList component need to be passed in 
//via useParams or sth similar -> need a route

//CSS in JS to try sth new
const styles = StyleSheet.create({
  text: {
    backgroundColor: "grey",
    color: "blue",
    fontSize: "18px"
  }
})

const DrinkRecipe = () => {
  //fetch recipe for every cocktail
  const [recipes, setRecipes] = useState([])

  //replace id with ${idDrink}
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17186`)
      .then(response => response.json())
      // .then(data => console.log(data.drinks))
      .then(data => setRecipes(data.drinks))
  }, [])

  //recipes =  array with one object in it
  console.log({ recipes })

  return (
    <RecipeView>
      {
        recipes.map(recipe => {

          return (
            <>
              <DrinkNameRecipe key={recipe.idDrink}>{recipe.strDrink}</DrinkNameRecipe>

              <Text>INGREDIENTS</Text>
              {/* if the value === null, then hide */}
              <View >
                <Text>{recipe.strMeasure1} {recipe.strIngredient1}</Text>
                <Text>{recipe.strMeasure2} {recipe.strIngredient2}</Text>
                <Text>{recipe.strMeasure3} {recipe.strIngredient3}</Text>
                <Text>{recipe.strMeasure4} {recipe.strIngredient4}</Text>
                <Text>{recipe.strMeasure5} {recipe.strIngredient5}</Text>
                <Text>{recipe.strMeasure6} {recipe.strIngredient6}</Text>
                {/* <Text>{recipe.strMeasure7} {recipe.strIngredient7}</Text>
                <Text>{recipe.strMeasure8} {recipe.strIngredient8}</Text>
                <Text>{recipe.strMeasure9} {recipe.strIngredient9}</Text> */}
                {/* <Text>{recipe.strMeasure10} {recipe.strIngredient10}</Text>
                <Text>{recipe.strMeasure11} {recipe.strIngredient11}</Text>
                <Text>{recipe.strMeasure12} {recipe.strIngredient12}</Text>
                <Text>{recipe.strMeasure13} {recipe.strIngredient13}</Text>
                <Text>{recipe.strMeasure14} {recipe.strIngredient14}</Text>
                <Text>{recipe.strMeasure15} {recipe.strIngredient15}</Text> */}
              </View>
              <Text>RECIPE</Text>
              <Text>{recipe.strInstructions}</Text>
              <RecipeImage source={{ uri: `${recipe.strDrinkThumb}` }}></RecipeImage>
            </>
          )
        })
      }
    </RecipeView>
  )
}

export default DrinkRecipe

//STYLED components

export const RecipeView = styled.View`
  // flex: 1;
  background-color: orange;
  color: blue;
  // padding: 10px;
`

export const DrinkNameRecipe = styled.Text`
color: black;
font-size: 20px
`

export const RecipeImage = styled.Image`
  position: relative;
  align-self: center;
  width: 300px;
  height: 300px;
  margin: 15px 0;
`
