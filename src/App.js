import React, { Component } from "react"
import { hot } from "react-hot-loader"
import styled, { keyframes } from "styled-components"
import logoSource from "./logo.svg"

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logoSource} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Paragraph>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Paragraph>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Title = styled.h1`
  font-size: 1.5em;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  animation: ${rotate360} infinite 20s linear;
`

const Paragraph = styled.p`
  font-size: large;
`

export default hot(module)(App)
