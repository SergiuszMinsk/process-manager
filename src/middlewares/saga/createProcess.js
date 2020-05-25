import { put } from 'redux-saga/effects'
import { generateJobsByJobsCount } from '../../utils'
import { createProcessSuccessAction } from '../../actions'

function* createProcess({ payload }) {
    try {
        // const response = yield call(
        //     fetch,
        //     `${process.env.REACT_APP_API_HOST}/my/api`,
        //     {
        //         method: 'PUT',
        //         body: JSON.stringify(process)
        //     })

        //Emulate adding data to the database
        payload.jobs = generateJobsByJobsCount(payload)
        localStorage.setItem(payload.name, JSON.stringify(payload))

        // Mock server response and push data to the localStorage
        const response = JSON.parse(localStorage.getItem(payload.name))
        return yield put(createProcessSuccessAction(response))

    } catch (error) {
        console.error(error)
    }
}

export { createProcess }