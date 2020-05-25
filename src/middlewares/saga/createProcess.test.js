import { takeEvery } from 'redux-saga/effects'
import { ACTION_TYPES } from '../../actions'
import { createProcess } from './createProcess'
import root from './'

describe('processModulePage saga', () => {
    const genObject = root();

    test('should wait for every `CREATE_PROCESS` action and call createProcess', () => {
        expect(genObject.next().value)
            .toEqual(takeEvery(ACTION_TYPES.CREATE_PROCESS, createProcess));
    });
});