import React from 'react'
import PropTypes from 'prop-types'
import { removeProcessAction } from '../../actions'
import { CONSTANTS } from '../../constants'
import { StyledRemoveProcessButton } from './RemoveProcessStyles'
import { connect } from 'react-redux'

/**
 * Functional react component for remove process
 * @returns {JSX.Element} - Rendered styled button element
 */
const RemoveProcess = ({ id, removeProcessAction }) => {
    const handleRemoveProcess = () => {
        removeProcessAction(id)
    }

    return (
        <StyledRemoveProcessButton onClick={handleRemoveProcess}>
            {CONSTANTS.REMOVE_PROCESS}
        </StyledRemoveProcessButton>
    )
}

RemoveProcess.propTypes = {
    removeProcessAction: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}

export default connect(
    () => ({}),
    {
        removeProcessAction,
    },
)(RemoveProcess)
