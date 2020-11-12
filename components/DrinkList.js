import React from 'react'
import styled from 'styled-components/native'

//add TouchableHighlight -> on press go to the details page?

const DrinkList = ({ strDrink, strDrinkThumb }) => {

  return (
    <DrinkCardView>
      <DrinkImage source={{ uri: `${strDrinkThumb} ` }} />
      <DrinkNameText>{strDrink}</DrinkNameText>
    </DrinkCardView>
  )
}

export default DrinkList


//STYLED components

export const DrinkCardView = styled.View`
  border: 1px solid blue;
  margin-bottom: 25px;
`

export const DrinkImage = styled.Image`
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid black
`

export const DrinkNameText = styled.Text`
  margin: 10px 0;
  color: orange;
  font-size: 16px
`