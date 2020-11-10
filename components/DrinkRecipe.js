import React from 'react'
import styled from 'styled-components/native'

const DrinkRecipe = ({ idDrink }) => {

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)

  return (
    <View>
      {idDrink}
    </View>

  )
}

export default DrinkRecipe