import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CONSTANTS, SORT_KEYS} from '../../constants'
import { generateRandomNumber, generateUniqueString } from '../../utils'
import ProcessesList  from '../processesList/ProcessesList'
import SearchProcess from '../searchProcess/SearchProcess'
import SortProcess from '../sortProcess/SortProcess'
import {
    createProcessAction,
    getAllProcessesAction,
    sortProcessAction,
    searchProcessAction,
} from '../../actions'
import { StyledCreateProcessWrapper, StyledCreateProcessButton, } from './CreateProcessStyles'

/**
 * Functional react component for create process
 * @returns {JSX.Element} - Rendered create process button and child components
 */
const CreateProcess = ({
        processes,
        createProcessAction,
        getAllProcessesAction,
        sortProcessAction,
        searchProcessAction,
    }) => {

    const [ jobValue, setJobValue ] = useState('')

    useEffect(() => {
        getAllProcessesAction()
    }, [])

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
            name: generateUniqueString(),
            startTime: generateRandomNumber(CONSTANTS.START_TIME_FROM, CONSTANTS.START_TIME_TO),
            jobsCount: generateRandomNumber(),
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

CreateProcess.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    startTime: PropTypes.number,
    jobsCount: PropTypes.number,
    jobs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        processId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    })),
    getAllProcessesAction: PropTypes.func.isRequired,
    createProcessAction: PropTypes.func.isRequired,
    sortProcessAction: PropTypes.func.isRequired
}

CreateProcess.defaultProps = {
    id: '',
    name: '',
    startTime: 0,
    jobsCount: 0,
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
)(CreateProcess)