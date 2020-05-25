import checkPropTypes from 'check-prop-types'
import rootReducer from '../src/reducers'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
    const sagaMiddleware = createSagaMiddleware()
    const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttrs = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`)
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}

