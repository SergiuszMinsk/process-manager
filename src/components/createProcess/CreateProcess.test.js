import React from 'react'
import { shallow } from 'enzyme'
import { checkProps } from '../../../test/testUtils'
import { storeFactory } from '../../../test/testUtils'
import CreateProcess from './CreateProcess'

const defaultProps = {
    id: '123',
    name: 'Process1',
    startTime: 15,
    jobsCount: 4,
    jobs: [{
        name: 'test24',
        id: '2134',
        processId: '2345',
        status: 'RUNNING',
    }]
}

/**
 * Factory function to create a ShallowWrapper for the CreateProcess component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<CreateProcess store={store} />).dive().dive()
    return wrapper;
}

describe('redux props', () => {
    test('has processes piece of state as prop', () => {
        const processes = [{
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
        const wrapper = setup({ processes });
        const processesProp = wrapper.props().children[2].props.processes
        expect(processesProp).toEqual(processes);
    });
})

test('does not throw warning with expected props', () => {
    checkProps(CreateProcess, defaultProps)
})