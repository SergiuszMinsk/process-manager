import { generateJobsByJobsCount, getProcessJobsStatus, searchProcess } from './'
import { CONSTANTS } from '../constants'

/**
 * Factory function for creating fake jobs by status
 * @param status
 * @returns {object} - returns an array with fake jobs
 */
const createFakeJobsByStatus = status => {
    switch(status) {
        case CONSTANTS.SUCCESSED:
            return [
                {
                    id: '3t6hj6u7z',
                    name: 'mn6l0spfo',
                    processId: 'dlex12216',
                    status: 'SUCCESSED'
                },
                {
                    id: '3t6hj45u7z',
                    name: 'mn6l324pfo',
                    processId: 'dlex45216',
                    status: 'SUCCESSED'
                }

            ]
        case CONSTANTS.FAILING:
            return [
                {
                    id: '3t6hj6u345',
                    name: 'mn6l0sfbfd',
                    processId: 'dlex12213',
                    status: 'FAILING'
                },
                {
                    id: '3t6hj34345',
                    name: 'mn6l4sfbfd',
                    processId: 'dlth12213',
                    status: 'FAILING'
                }
            ]
        default:
            return [
                {
                    id: '3t6hj6u325',
                    name: 'mn6l0ffbfd',
                    processId: 'dlegk2213',
                    status: 'FAILING'
                },
                {
                    id: '234fdsfsdf',
                    name: 'mn6l4sfbfd',
                    processId: 'sdfsgh',
                    status: 'RUNNING'
                }
            ]
    }
}

describe('generateJobsByJobsCount util', () => {
    const JOBS_AMOUNT = 5
    const PROCESS_ID = '12345'
    let result
    beforeEach(() => {
        result = generateJobsByJobsCount(JOBS_AMOUNT, PROCESS_ID)
    })
    test('should generate an array with a given jobs amount', () => {
        expect(result.length).toBe(5)
    })
    test('should generate jobs with the same process id', () => {
        expect(result.every(item => item.processId === PROCESS_ID)).toBeTruthy()
    })
})

describe('getProcessJobsStatus util', () => {
    test('should return `SUCCESSED` status if all jobs have identical status', () => {
        const fakeJobsWithSuccessStatus = createFakeJobsByStatus(CONSTANTS.SUCCESSED)
        let result = getProcessJobsStatus(fakeJobsWithSuccessStatus)
        expect(result).toBe(CONSTANTS.SUCCESSED)
    })
    test('should return `FAILING` status if all jobs have identical status', () => {
        const fakeJobsWithFailingStatus = createFakeJobsByStatus(CONSTANTS.FAILING)
        let result = getProcessJobsStatus(fakeJobsWithFailingStatus)
        expect(result).toBe(CONSTANTS.FAILING)
    })
    test('should return `RUNNING` status if this status exist', () => {
        const fakeJobsWithRunningStatus = createFakeJobsByStatus(CONSTANTS.RUNNING)
        let result = getProcessJobsStatus(fakeJobsWithRunningStatus)
        expect(result).toBe(CONSTANTS.RUNNING)
    })
})

describe('searchProcess util', () => {
    const fakeProcessesArray = [
        {
            id: 'dlex12216',
            name: 'h49647hdl',
            jobsCount: 2, startTime: 16
        },
        {
            id: 'bghj12216',
            name: 'jhgyutf87',
            jobsCount: 6, startTime: 13
        }
    ]
    test('should return filtered array if occurrence exist', () => {
        let result = searchProcess(fakeProcessesArray, 'h49')
        expect(result.length !== fakeProcessesArray.length).toBeTruthy()
    })
    test('should return the same array if no occurrences were found', () => {
        let result = searchProcess(fakeProcessesArray, 'whatsup')
        expect(result.length === fakeProcessesArray.length).toBeTruthy()
    })
})