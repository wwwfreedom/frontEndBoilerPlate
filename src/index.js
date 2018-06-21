import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import baseStyle from "./styles/index"

import registerServiceWorker from "./registerServiceWorker"

const render = () => {
  baseStyle()
  ReactDOM.render(<App />, document.getElementById("root"))
}

render()

registerServiceWorker()
