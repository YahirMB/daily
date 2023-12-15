import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";

import { Avatar, IconButton } from 'react-native-paper';

import * as globalColors from "../../styles/colors/customColors";

export const AvatarContainer = styled.View`
    position:relative;
    width:150px;
    height:150px;
    margin:auto;
`


export const AvatarIcon = styled(IconButton)`
    position: absolute;
    bottom: 5px; 
    right: 0px; 
    background-color:${globalColors.green100} ; 
   
    
  
`