import styled from 'styled-components'

export const StyledRemoveProcessButton = styled.button`
  width: 110px;
  height: 30px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  
  &:hover {
    cursor: pointer;
  }
    
  &:focus {
    outline: none;
  }
`