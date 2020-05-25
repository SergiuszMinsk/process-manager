import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { GlobalStyles } from './styles'
import { mainTheme } from './themes'
import CreateProcess from './components/createProcess/CreateProcess'
import createStore from './store/appStore'

const store = createStore()

const App = () => (
    <ThemeProvider theme={mainTheme}>
        <Provider store={store}>
            <CreateProcess />
            <GlobalStyles />
        </Provider>
    </ThemeProvider>
)

export default App