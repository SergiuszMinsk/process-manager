import { put } from 'redux-saga/effects'
import { retrieveItemsFromLocalStorage } from '../../utils'
import { getAllProcessesSuccessAction } from '../../actions'

function* getAllProcesses() {
    try {
        // const response = yield call(
        //     fetch,
        //     `${process.env.REACT_APP_API_HOST}/my/api`,
        //     {
        //         method: 'GET',
        //     })

        // Mock successful server response with all process items
        const response = retrieveItemsFromLocalStorage()
        yield put(getAllProcessesSuccessAction(response))

    } catch (error) {
        //yield put(getAllProcessesFailureAction())
        console.error(error)
    }
}

export { getAllProcesses }