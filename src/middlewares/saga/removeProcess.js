import { put } from 'redux-saga/effects'
import { removeProcessSuccessAction } from '../../actions'
import { removeProcessFromLocalStorage } from '../../utils'

function* removeProcess({ payload: processId }) {
    try {
        // const response = yield call(
        //     fetch,
        //     `${process.env.REACT_APP_API_HOST}/my/api`,
        //     {
        //         method: 'DELETE',
        //         body: JSON.stringify(id)
        //     })

        // Emulate removing from the database
        removeProcessFromLocalStorage(processId)

        // Mock successful server response
        yield put(removeProcessSuccessAction(processId))

    } catch (error) {
        //yield put(removeProcessFailureAction())
        console.error(error)
    }
}

export { removeProcess }