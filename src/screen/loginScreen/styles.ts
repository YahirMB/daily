import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons';

export const ContainerLogIn = styled.ImageBackground`
  opacity: 0.75;
  flex: 1px;
  resize-mode: cover;
`

export const Content = styled.View`
  flex:1;
  background-color:#32BC82;
  align-items:center;
  justify-content:center;
`


export const FormContainer = styled.View`
  flex: 1; 
  width: 80%;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const InputBase = styled.View`
  width:100%;
`
export const Label = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
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
export const InputWithIcon = styled.View`
  flex-direction:row;
  width:100%;
  align-items:center;
  justify-content:flex-end;
`
export const CustomIcon = styled(Icon)`
  position:absolute;
  padding-right:10px;
`
export const ContainerLoginBtn = styled.View`
  align-self:flex-end;
`