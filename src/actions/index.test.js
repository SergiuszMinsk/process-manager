import {
    createProcessAction,
    createProcessSuccessAction,
    removeProcessAction,
    removeProcessSuccessAction,
    getAllProcessesAction,
    getAllProcessesSuccessAction,
    sortProcessAction,
    searchProcessAction,
    ACTION_TYPES
} from './'

describe('createProcess action creators', () => {
    test('returns an action with type `CREATE_PROCESS`', () => {
        const action = createProcessAction()
        expect(action).toEqual({ type: ACTION_TYPES.CREATE_PROCESS })
    })
    test('returns an action with type `CREATE_PROCESS_SUCCESS`', () => {
        const action = createProcessSuccessAction()
        expect(action).toEqual({ type: ACTION_TYPES.CREATE_PROCESS_SUCCESS })
    })
})

describe('removeProcess action creators', () => {
    test('returns an action with type `REMOVE_PROCESS`', () => {
        const action = removeProcessAction()
        expect(action).toEqual({ type: ACTION_TYPES.REMOVE_PROCESS })
    })
    test('returns an action with type `REMOVE_PROCESS_SUCCESS`', () => {
        const action = removeProcessSuccessAction()
        expect(action).toEqual({ type: ACTION_TYPES.REMOVE_PROCESS_SUCCESS })
    })
})


describe('getAllProcesses action creators', () => {
    test('returns an action with type `GET_ALL_PROCESSES`,', () => {
        const action = getAllProcessesAction()
        expect(action).toEqual({ type: ACTION_TYPES.GET_ALL_PROCESSES })
    })

    test('returns an action with type `GET_ALL_PROCESSES_SUCCESS`', () => {
        const action = getAllProcessesSuccessAction()
        expect(action).toEqual({ type: ACTION_TYPES.GET_ALL_PROCESSES_SUCCESS})
    })
})

test('returns an action with type `SORT_PROCESS`', () => {
    const action = sortProcessAction()
    expect(action).toEqual({ type: ACTION_TYPES.SORT_PROCESS })
})

test('returns an action with type `SEARCH_PROCESS`', () => {
    const action = searchProcessAction()
    expect(action).toEqual({ type: ACTION_TYPES.SEARCH_PROCESS })
})