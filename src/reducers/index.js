import { combineReducers } from 'redux'
import processReducer from './processReducer'

const rootReducer = combineReducers({
    processes: processReducer,
})

export default rootReducer