import Icon from 'react-native-vector-icons/Ionicons';
import styled from "styled-components/native"

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