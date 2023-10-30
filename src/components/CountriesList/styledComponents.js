import styled from 'styled-components'

export const Button = styled.Button`
  width: 90px;
  padding-top: 0px;
  border: none;
  background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
  color: ${props => (props.color ? '#334155' : 'white')};
  border-radius: 5px;
  margin: 8px;
`
