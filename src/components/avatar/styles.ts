import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";


export const AvatarContainer = styled.View`
    position:relative;
    width:150px;
    height:150px;
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