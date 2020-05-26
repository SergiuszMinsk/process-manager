import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttrs } from '../../../test/testUtils'
import ProcessesList from './ProcessesList'

/**
 * Factory function to create shallow wrapper for the ProcessList component.
 * @function setup
 * @param {object} processes - Component property specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (processes) => {
    return shallow(<ProcessesList processes={processes} />)
}

describe('processesList render', () => {
    test('should not render wrapper if processes items is empty', () => {
        const wrapper = setup()
        const processesListWrapper = findByTestAttrs(wrapper, 'processes-list-wrapper')
        expect(processesListWrapper.length).toBe(0)
    })
    test('should render process items if appropriate prop was passed', () => {
        const wrapper = setup([{
            id: 'acqktokf9',
            jobsCount: 9,
            name: '7nma85rf1',
            startTime: 12,
            jobs: [{
                name: '2345',
                id: '234324',
                status: 'RUNNING',
                processId: 'acqktokf9'
            }]
        }, {
            id: 'sfdsfsf',
            jobsCount: 23,
            name: 'sdfsfdsf',
            startTime: 17,
            jobs: [{
                name: '2335',
                id: '236724',
                status: 'FAILURE',
                processId: 'acqktokf9'
            }]
        }])
        const processesListWrapper = findByTestAttrs(wrapper, 'processes-list-wrapper')
        expect(processesListWrapper.debug()).toMatchSnapshot()
    })
})
