import React from 'react'
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

  return (
    <View>
      <Text style={styles.text}>{instructions}</Text>
      <Text style={styles.text}>Hello, app, do you have a plan to start working at some point?</Text>
      <Text style={styles.text}>Asking for a friend ... Hello?</Text>
    </View>
  )
}

export default DrinkRecipe