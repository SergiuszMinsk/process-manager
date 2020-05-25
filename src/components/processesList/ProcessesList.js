import React from 'react'
import { CONSTANTS } from '../../constants'
import { getProcessJobsStatus } from '../../utils'
import {
    StyledProcessesListWrapper,
    StyledProcessesListItem,
    StyledProcessesListItemDesc,
    StyledProcessesListJobsItem,
    StyledProcessesListJobsItemDesc,
}
from './ProcessesListStyles'
import RemoveProcess  from '../removeProcess/RemoveProcess'

/**
 * Functional react component for display list of processes and jobs
 * @returns {JSX.Element} - Rendered list of processes with nested jobs and remove process button
 */
const ProcessesList = ({ processes = []}) => {
    const processItems = processes.map(({ id, name, startTime, jobsCount, jobs }) =>
        <StyledProcessesListItem key={id}>
            <StyledProcessesListItemDesc>{CONSTANTS.PROCESS_NAME}: {name}</StyledProcessesListItemDesc>
            <StyledProcessesListItemDesc>{CONSTANTS.START_TIME}: {startTime}</StyledProcessesListItemDesc>
            <StyledProcessesListItemDesc>{CONSTANTS.JOBS_COUNT}: {jobsCount}</StyledProcessesListItemDesc>
            <StyledProcessesListItemDesc>
                {CONSTANTS.PROCESS_JOB_STATUS}: {getProcessJobsStatus(jobs)}
            </StyledProcessesListItemDesc>
            <RemoveProcess id={id} />
            {jobs.map(({ name, id, processId, status }) =>
                <StyledProcessesListJobsItem key={id}>
                    <StyledProcessesListJobsItemDesc>{CONSTANTS.JOB_NAME}: {name}</StyledProcessesListJobsItemDesc>
                    <StyledProcessesListJobsItemDesc>{CONSTANTS.JOB_PROCESS_ID}: {processId}</StyledProcessesListJobsItemDesc>
                    <StyledProcessesListJobsItemDesc>{CONSTANTS.JOB_STATUS}: {status}</StyledProcessesListJobsItemDesc>
                </StyledProcessesListJobsItem>
            )}
        </StyledProcessesListItem>
    )

    return (
        processItems.length ? (
            <StyledProcessesListWrapper data-test="processes-list-wrapper">
                {processItems}
            </StyledProcessesListWrapper>
        ) : null
    )
}

export default ProcessesList