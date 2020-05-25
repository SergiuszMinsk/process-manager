import {
    createProcessReducer,
    removeProcessReducer,
    getAllProcessesReducer
} from './processReducer'
import { initialState } from './processReducer'

describe('createProcessReducer', () => {
    test('returns default initial state when no action is passed', () => {
        const createProcessSuccessReducerAction = createProcessReducer(undefined, {})
        expect(createProcessSuccessReducerAction).toEqual(initialState)
    })
    test('returns changed state when action was received', () => {
        const fakeProcessPayload = {
            id: '456',
            name: 'Process3',
            startTime: 19,
            jobsCount: 45,
        }

        const fakeCurrentState = [{
            id: '123',
            name: 'Process1',
            startTime: 16,
            jobsCount: 4,
        }]

        const createProcessSuccessReducerAction = createProcessReducer(fakeCurrentState, { payload: fakeProcessPayload })
        const mergedStateWithNewPayload = [...fakeCurrentState, fakeProcessPayload]

        expect(createProcessSuccessReducerAction).toEqual(mergedStateWithNewPayload)
    })
})

describe('removeProcessReducer', () => {
    test('returns initial state when no action is passed', () => {
        const removeProcessReducerAction = removeProcessReducer(undefined, {})
        expect(removeProcessReducerAction).toEqual(initialState)
    })

    test('returns changed state when action was received', () => {
        const fakeCurrentState = [{
            id: '4uf2t31sp',
            name: 'qyrpm4n48',
            startTime: 1,
            jobsCount: 2,
            jobs: [{
                name: 'p58ail22l',
                id: 'pf3vv6hh2',
                processId: '4uf2t31sp',
                status: 'RUNNING'
            }]
        },
        {
            id: 'fsf23423f',
            name: 'hgfhfghfg',
            startTime: 4,
            jobsCount: 6,
            jobs: [{
                name: 'sfsfsdf',
                id: 'fghgfh',
                processId: 'sfsdfds',
                status: 'RUNNING'
            }]
        }
        ]
        const payload = '4uf2t31sp'
        const removeProcessReducerAction = removeProcessReducer(fakeCurrentState, { payload })
        expect(removeProcessReducerAction).toEqual([fakeCurrentState[1]])
    })
})

describe('getAllProcessesReducer', () => {
    test('returns initial state when no action is passed', () => {
        const getAllProcessesReducerAction = getAllProcessesReducer(undefined, {})
        expect(getAllProcessesReducerAction).toEqual(initialState)
    })

    test('returns changed state when action was received', () => {
        const payload = [{
            id: '4uf2t31sp',
            name: 'qyrpm4n48',
            startTime: 1,
            jobsCount: 2,
            jobs: [{
                name: 'p58ail22l',
                id: 'pf3vv6hh2',
                processId: '4uf2t31sp',
                status: 'RUNNING'
            }]
        }]
        const getAllProcessesReducerAction = getAllProcessesReducer(initialState, { payload })
        expect(getAllProcessesReducerAction).toEqual(payload)
    })
})


