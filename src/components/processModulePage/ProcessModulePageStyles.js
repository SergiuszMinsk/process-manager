import styled from 'styled-components'

export const StyledCreateProcessWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledCreateProcessButton = styled.button`
  width: 150px;
  height: 50px;
  margin: 30px auto 30px auto;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
    
  &:hover {
    cursor: pointer;
  }
    
  &:focus {
    outline: none;
  }
`