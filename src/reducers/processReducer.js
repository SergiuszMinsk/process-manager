import { handleActions } from 'redux-actions'
import { sortProcesses, searchProcess } from '../utils'
import { ACTION_TYPES } from '../actions'

export const initialState = []

/**
 * @function createProcessReducer
 * @param {object} state - Object with required fields.
 * @param {object} payload - Object with random generated fields.
 * @returns {object} - new store state
 */
export const createProcessReducer = (state,  { payload }) => {
    if (state) {
        return [...state, payload]
    }
    return initialState
}

/**
 * @function removeProcessReducer
 * @param {object} state - Object with required fields.
 * @param {string} payload - Process id for further removal.
 * @returns {object} - new store state
 */
export const removeProcessReducer = (state,  { payload }) => {
    if (state) {
       return state.filter(item => item.id !== payload)
    }
    return initialState
}

/**
 * @function removeProcessReducer
 * @param {object} state - Object with required fields.
 * @param {object} payload - All processes from localStorage.
 * @returns {object} - new store state
 */
export const getAllProcessesReducer = (state, { payload }) => {
    if (state) {
        return [...state, ...payload]
    }
    return initialState
}

/**
 * @function sortProcessReducer
 * @param {object} state - Object with required fields.
 * @param {string} payload - string that represent sort key
 * @returns {object} - new store state
 */
export const sortProcessReducer = (state, { payload }) => {
    if (state) {
        return sortProcesses(state, payload)
    }
    return initialState
}

/**
 * @function jobSearchReducer
 * @param {object} state - Object with required fields.
 * @param {string} payload - string that represent search term
 * @returns {object} - new store state
 */
export const searchProcessReducer = (state, { payload }) => {
    if(state) {
        return searchProcess(state, payload)
    }
    return initialState
}

export default handleActions(
    {
        [ACTION_TYPES.CREATE_PROCESS_SUCCESS]: createProcessReducer,
        [ACTION_TYPES.REMOVE_PROCESS_SUCCESS]: removeProcessReducer,
        [ACTION_TYPES.GET_ALL_PROCESSES_SUCCESS]: getAllProcessesReducer,
        [ACTION_TYPES.SORT_PROCESS]: sortProcessReducer,
        [ACTION_TYPES.SEARCH_PROCESS]: searchProcessReducer,
    },
    initialState,
)
