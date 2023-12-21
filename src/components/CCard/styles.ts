import styled from "styled-components/native";
import * as globalColors from "../../styles/colors/customColors";

export const Header = styled.View`
    flex: 1; 
    border-top-right-radius: 10px; 
    border-top-left-radius: 10px; 
    background-color: ${globalColors.primary}; 
    flex-direction: row; 
    justify-content: space-between; 
    padding-horizontal: 10px;  
    align-items: center;
`

export const Contet = styled.View`
    margin: 10px; 
    row-gap: 5px;
`
export const IconContainer = styled.View`
    flex-direction: row; 
    gap: 10px; 
    alignItems: center;
`