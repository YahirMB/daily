import Icon  from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";

export const ContainerSignUp = styled.View`
  flex: 1;
  background-color:#32BC82;
  padding-horizontal:35px;
  gap:25px;
`

export const FormContainer = styled.View`
  width: 100%;
  margin-top:100px;
`

export const Phrase = styled.Text`
    color: white;
    width: 100%;
    font-weight:400;
    font-size: 20px; 
    margin-bottom:10px;
`
export const BtnContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
`
export const BtnContainerSignUp1 = styled(BtnContainer)`
    flex-direction: row;
    width: 100%; 
    justify-content: space-between;
    margin-top: 50px;
`
export const PhotoProfil = styled.Image`
    border-radius: 100px; 
    height: 150px;
    width: 150px;
`
export const AvatarIcon = styled(Icon)`
    position: absolute;
    bottom: 20px; 
    right: 0; 
    background-color: white; 
    width: 34px; 
    height: 34px; 
    border-radius: 100px;
    text-align: center;
    text-align-vertical: center;
`