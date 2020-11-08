import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
  return (
    <Container>
      <Title>This is your cool app! Yes it is, I'm happy to see it in browser.</Title>
      <Title>Go to App.js and start coding. I will. Just need to see if this updates.</Title>
      <Title>💅💅💅</Title>
    </Container>
  )
}

export default App
