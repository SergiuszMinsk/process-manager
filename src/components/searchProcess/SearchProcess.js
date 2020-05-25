import React from 'react'
import PropTypes from 'prop-types'
import {
    StyledProcessSearchJobForm,
    StyledProcessSearchJobInputLabel,
    StyledProcessSearchJobInput,
    StyledProcessSearchJobButton,
} from './SearchProcessStyles'
import { CONSTANTS } from '../../constants'

/**
 * Functional react component for search process
 * @returns {JSX.Element} - Rendered styled input element with label
 */
const SearchProcess = ({ jobValue, onJobSearchChange, onJobSearchSubmit }) => (
        <StyledProcessSearchJobForm onSubmit={onJobSearchSubmit}>
            <StyledProcessSearchJobInputLabel htmlFor="jobSearch">
                {CONSTANTS.SEARCH_JOB}
                <StyledProcessSearchJobInput
                    value={jobValue}
                    name="jobSearch"
                    onChange={onJobSearchChange}
                />
            </StyledProcessSearchJobInputLabel>
            <StyledProcessSearchJobButton>{CONSTANTS.SEARCH}</StyledProcessSearchJobButton>
        </StyledProcessSearchJobForm>
)

SearchProcess.propTypes = {
    jobValue: PropTypes.string,
    onJobSearchChange: PropTypes.func.isRequired,
    onJobSearchSubmit: PropTypes.func.isRequired,
}

SearchProcess.defaultProps = {
    jobValue: ''
}

export default SearchProcess
