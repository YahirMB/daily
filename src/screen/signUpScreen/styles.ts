import Icon  from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";


export const ContainerSingUp = styled.View`
    flex:1px;
`
export const Phrase = styled.Text`
    color: white;
    width: 100%;
    font-weight:400;
    font-size: 20px; 
    margin-bottom: 50px;
`
export const BtnContainer = styled.View`
    flex-direction: row;
    width: 100%; 
    justify-content: flex-end;
    margin-top: 50px;
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