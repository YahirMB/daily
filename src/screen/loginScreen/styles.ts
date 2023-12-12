import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons';


export const ContainerLogIn = styled.View`
  flex: 1;
  background-color:#32BC82;
  padding-horizontal:35px;
  gap:25px;

`

export const FormContainer = styled.View`
  width: 100%;
  margin-top:100px;
`

export const RecoverContainer = styled.View`
  gap:15px;
`

export const Row = styled.View`
  flex-direction: row;
  align-self:flex-start;
  gap:5px;
`

export const LoginLabel = styled.Text<{color?:any}>`
  color: ${props => props.color || 'white' };
`
