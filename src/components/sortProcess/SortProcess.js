import React from 'react'
import PropTypes from 'prop-types'
import { StyledProcessSortButton } from './SortProcessStyles'

/**
 * Functional react component for sort process
 * @returns {JSX.Element} - Rendered styled button element
 */
const SortProcess = ({ sortName, onSortProcess }) => (
        <StyledProcessSortButton onClick={onSortProcess}>{sortName}</StyledProcessSortButton>
)

SortProcess.propTypes = {
    sortName: PropTypes.string.isRequired,
    onSortProcess: PropTypes.func.isRequired
}

export default SortProcess