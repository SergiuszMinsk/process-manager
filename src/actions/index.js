import { createAction } from 'redux-actions'

export const ACTION_TYPES = {
    CREATE_PROCESS: 'CREATE_PROCESS',
    CREATE_PROCESS_SUCCESS: 'CREATE_PROCESS_SUCCESS',
    REMOVE_PROCESS: 'REMOVE_PROCESS',
    REMOVE_PROCESS_SUCCESS: 'REMOVE_PROCESS_SUCCESS',
    GET_ALL_PROCESSES: 'GET_ALL_PROCESSES',
    GET_ALL_PROCESSES_SUCCESS: 'GET_ALL_PROCESSES_SUCCESS',
    SORT_PROCESS: 'SORT_PROCESS',
    SEARCH_PROCESS: 'SEARCH_PROCESS'
}

/**
 * @function getAllProcesses
 * @returns {object} - Action object with type `GET_ALL_PROCESSES`
 */
export const getAllProcessesAction = createAction(ACTION_TYPES.GET_ALL_PROCESSES)
/**
 * @function getAllProcessesSuccess
 * @returns {object} - Action object with type `GET_ALL_PROCESSES_SUCCESS`
 */
export const getAllProcessesSuccessAction = createAction(ACTION_TYPES.GET_ALL_PROCESSES_SUCCESS)
/**
 * @function processModulePage
 * @returns {object} - Action object with type `CREATE_PROCESS`
 */
export const createProcessAction = createAction(ACTION_TYPES.CREATE_PROCESS)
/**
 * @function createProcessSuccess
 * @returns {object} - Action object with type `CREATE_PROCESS_SUCCESS`
 */
export const createProcessSuccessAction = createAction(ACTION_TYPES.CREATE_PROCESS_SUCCESS)
/**
 * @function removeProcess
 * @returns {object} - Action object with type `REMOVE_PROCESS`
 */
export const removeProcessAction = createAction(ACTION_TYPES.REMOVE_PROCESS)
/**
 * @function removeProcessSuccess
 * @returns {object} - Action object with type `REMOVE_PROCESS_SUCCESS`
 */
export const removeProcessSuccessAction = createAction(ACTION_TYPES.REMOVE_PROCESS_SUCCESS)
/**
 * @function sortProcess
 * @returns {object} - Action object with type `SORT_PROCESS`
 */
export const sortProcessAction = createAction(ACTION_TYPES.SORT_PROCESS)
/**
 * @function searchProcess
 * @returns {object} - Action object with type `SEARCH_PROCESS`
 */
export const searchProcessAction = createAction(ACTION_TYPES.SEARCH_PROCESS)


