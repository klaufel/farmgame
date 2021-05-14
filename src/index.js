import React from 'react'
import {render} from 'react-dom'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import App from './app'

render(
  <ThemeProvider theme={{}}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('app')
)
