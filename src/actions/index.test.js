import {
    createProcessAction,
    createProcessSuccessAction,
    removeProcessAction,
    removeProcessSuccessAction,
    getAllProcessesAction,
    getAllProcessesSuccessAction,
    sortProcessAction,
    searchProcessAction,
} from './'

const POSSIBLE_ACTIONS = {
    CREATE_PROCESS: 'CREATE_PROCESS',
    CREATE_PROCESS_SUCCESS: 'CREATE_PROCESS_SUCCESS',
    REMOVE_PROCESS: 'REMOVE_PROCESS',
    REMOVE_PROCESS_SUCCESS: 'REMOVE_PROCESS_SUCCESS',
    GET_ALL_PROCESSES: 'GET_ALL_PROCESSES',
    GET_ALL_PROCESSES_SUCCESS: 'GET_ALL_PROCESSES_SUCCESS',
    SORT_PROCESS: 'SORT_PROCESS',
    SEARCH_PROCESS: 'SEARCH_PROCESS'
}

describe('processModulePage action creators', () => {
    test('returns an action with type `CREATE_PROCESS`', () => {
        const action = createProcessAction()
        expect(action).toEqual({ type: POSSIBLE_ACTIONS.CREATE_PROCESS })
    })
    test('returns an action with type `CREATE_PROCESS_SUCCESS`', () => {
        const action = createProcessSuccessAction()
        expect(action).toEqual({ type: POSSIBLE_ACTIONS.CREATE_PROCESS_SUCCESS })
    })
})

describe('removeProcess action creators', () => {
    test('returns an action with type `REMOVE_PROCESS`', () => {
        const action = removeProcessAction()
        expect(action).toEqual({ type: POSSIBLE_ACTIONS.REMOVE_PROCESS })
    })
    test('returns an action with type `REMOVE_PROCESS_SUCCESS`', () => {
        const action = removeProcessSuccessAction()
        expect(action).toEqual({ type: POSSIBLE_ACTIONS.REMOVE_PROCESS_SUCCESS })
    })
})


describe('getAllProcesses action creators', () => {
    test('returns an action with type `GET_ALL_PROCESSES`,', () => {
        const action = getAllProcessesAction()
        expect(action).toEqual({ type: POSSIBLE_ACTIONS.GET_ALL_PROCESSES })
    })

    test('returns an action with type `GET_ALL_PROCESSES_SUCCESS`', () => {
        const action = getAllProcessesSuccessAction()
        expect(action).toEqual({ type: POSSIBLE_ACTIONS.GET_ALL_PROCESSES_SUCCESS})
    })
})

test('returns an action with type `SORT_PROCESS`', () => {
    const action = sortProcessAction()
    expect(action).toEqual({ type: POSSIBLE_ACTIONS.SORT_PROCESS })
})

test('returns an action with type `SEARCH_PROCESS`', () => {
    const action = searchProcessAction()
    expect(action).toEqual({ type: POSSIBLE_ACTIONS.SEARCH_PROCESS })

})