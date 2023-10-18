import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons';


export const InputBase = styled.View`
  width:100%;
`
export const Input = styled.TextInput`
  height: 40px;
  backgroundColor: white;
  color: black;
  width:100%;
  padding-right:40px;
`
export const LoginLabel = styled.Text<{color?:any}>`
  color: ${props => props.color || 'white' };
`

export const CustomIcon = styled(Icon)`
  position:absolute;
  padding-right:10px;
`
export const ContainerLoginBtn = styled.View`
  align-self:flex-end;
`