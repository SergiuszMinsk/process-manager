import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CONSTANTS, SORT_KEYS} from '../../constants'
import { generateUniqueString } from '../../utils'
import ProcessesList  from '../processesList/ProcessesList'
import SearchProcess from '../searchProcess/SearchProcess'
import SortProcess from '../sortProcess/SortProcess'
import {
    createProcessAction,
    getAllProcessesAction,
    sortProcessAction,
    searchProcessAction,
} from '../../actions'
import { StyledCreateProcessWrapper, StyledCreateProcessButton, } from './ProcessModulePageStyles'

/**
 * Functional react component for create process
 * @returns {JSX.Element} - Rendered create process button and child components
 */
const ProcessModulePage = ({
        processes,
        createProcessAction,
        getAllProcessesAction,
        sortProcessAction,
        searchProcessAction,
    }) => {

    const [ jobValue, setJobValue ] = useState('')

    useEffect(() => {
        getAllProcessesAction()
    }, [getAllProcessesAction])

    const handleSortProcess = sortKey => {
        sortProcessAction(sortKey)
    }

    const handleJobSearchSubmit = event => {
        event.preventDefault()
        setJobValue('')

        searchProcessAction(jobValue)
    }

    const handleJobSearchChange = event => {
        setJobValue(event.target.value)
    }

    const handleCreateProcess = () => {
        createProcessAction({
            id: generateUniqueString(),
        })
    }

    return (
        <>
            <StyledCreateProcessWrapper>
                <StyledCreateProcessButton onClick={handleCreateProcess}>
                    {CONSTANTS.CREATE_PROCESS}
                </StyledCreateProcessButton>
            </StyledCreateProcessWrapper>
            {Boolean(processes.length) && (
                <StyledCreateProcessWrapper>
                    <SortProcess sortName={CONSTANTS.SORT_BY_NAME} onSortProcess={() => handleSortProcess(SORT_KEYS.NAME)} />
                    <SortProcess sortName={CONSTANTS.SORT_BY_START_TIME} onSortProcess={() => handleSortProcess(SORT_KEYS.START_TIME)} />
                    <SortProcess sortName={CONSTANTS.SORT_BY_JOBS_COUNT} onSortProcess={() => handleSortProcess(SORT_KEYS.JOBS_COUNT)} />
                    <SearchProcess
                        jobValue={jobValue}
                        onJobSearchSubmit={handleJobSearchSubmit}
                        onJobSearchChange={handleJobSearchChange}
                    />
                </StyledCreateProcessWrapper>
            )}
            <ProcessesList processes={processes} />
        </>
    )
}

ProcessModulePage.propTypes = {
    getAllProcessesAction: PropTypes.func.isRequired,
    createProcessAction: PropTypes.func.isRequired,
    sortProcessAction: PropTypes.func.isRequired,
    searchProcessAction: PropTypes.func.isRequired,
}

export default connect(
    ({ processes }) => ({
        processes
    }),
    {
        createProcessAction,
        getAllProcessesAction,
        sortProcessAction,
        searchProcessAction,
    },
)(ProcessModulePage)