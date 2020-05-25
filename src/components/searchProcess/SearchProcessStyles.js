import styled from 'styled-components'

export const StyledProcessSearchJobForm = styled.form`
    display: flex
`

export const StyledProcessSearchJobInputLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    align-items: center;
    margin-top: -15px;
    font-weight: 600;
`

export const StyledProcessSearchJobInput = styled.input`
    width: 140px;
    height: 30px;
    margin-left: 30px;
    border: 1px solid ${props => props.theme.black}
`

export const StyledProcessSearchJobButton = styled.button`
    width: 90px;
    height: 30px;
    margin-left: 10px;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    
    &:hover {
       cursor: pointer;
    }
    
    &:focus {
       outline: none;
  }
 `
