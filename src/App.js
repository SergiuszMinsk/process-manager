import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { GlobalStyles } from './styles'
import { mainTheme } from './themes'
import ProcessModulePage from './components/processModulePage/ProcessModulePage'
import createStore from './store/appStore'

const store = createStore()

const App = () => (
    <ThemeProvider theme={mainTheme}>
        <Provider store={store}>
            <ProcessModulePage />
            <GlobalStyles />
        </Provider>
    </ThemeProvider>
)

export default App