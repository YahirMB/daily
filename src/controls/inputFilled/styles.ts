import { StyleSheet } from 'react-native';
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

export const Input = styled.TextInput<{backgroundColor?:string}>`
  height: 40px;
  background-color: ${props => props.backgroundColor ||'white'};
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

export const check = StyleSheet.create({
  invalid: {
      borderWidth: 1,
      borderColor: 'red',
      borderStyle: 'solid'
  },

  valid: {
      borderColor: 'green',
      borderWidth: 1,
      borderStyle: 'solid'
  },

  labelValid: {
      color: 'green',

  },

  labelInvalid: {
      color: 'red',
  }

})