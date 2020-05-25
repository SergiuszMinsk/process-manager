import { takeEvery } from 'redux-saga/effects'
import { ACTION_TYPES } from '../../actions'

import { createProcess } from './createProcess'
import { removeProcess } from './removeProcess'
import { getAllProcesses } from './getAllProcesses'

export default function* root() {
    yield takeEvery(ACTION_TYPES.CREATE_PROCESS, createProcess)
    yield takeEvery(ACTION_TYPES.REMOVE_PROCESS, removeProcess)
    yield takeEvery(ACTION_TYPES.GET_ALL_PROCESSES, getAllProcesses)
}
