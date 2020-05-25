import styled from 'styled-components'

export const StyledProcessSortButton = styled.button`
    margin-left: 30px;
    margin-bottom: 20px;
    width: 145px;
    height: 30px;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    
    &:hover {
       cursor: pointer;
    }
    
    &:focus {
       outline: none;
  }`