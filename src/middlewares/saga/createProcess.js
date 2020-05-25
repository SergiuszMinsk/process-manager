import { put } from 'redux-saga/effects'
import { generateJobsByJobsCount, generateRandomNumber, generateUniqueString } from '../../utils'
import { createProcessSuccessAction } from '../../actions'
import { CONSTANTS } from '../../constants'

function* createProcess({ payload: { id } }) {
    try {
        // const response = yield call(
        //     fetch,
        //     `${process.env.REACT_APP_API_HOST}/my/api`,
        //     {
        //         method: 'PUT',
        //         body: JSON.stringify(id)
        //     })

        //Emulate adding data to the database
        let response = {
            id,
            name: generateUniqueString(),
            jobsCount: generateRandomNumber(),
            startTime: generateRandomNumber(CONSTANTS.START_TIME_FROM, CONSTANTS.START_TIME_TO)
        }
        response.jobs = generateJobsByJobsCount(response.jobsCount, id)
        localStorage.setItem(response.name, JSON.stringify(response))

        // Mock server response and push data to the localStorage
        const data = JSON.parse(localStorage.getItem(response.name))
        return yield put(createProcessSuccessAction(data))

    } catch (error) {
        //yield put(createProcessFailureAction())
        console.error(error)
    }
}

export { createProcess }