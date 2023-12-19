import { TextInput } from "react-native-paper";
import styled from "styled-components";

export const CustomInput = styled(TextInput) <{ isFocused: boolean }>`
    width:100%;
    background-color:transparent;
    
    
    ${(props) => props.isFocused ?
        `border-width: 1px;
        border-bottom-width: 3px;
        border-color: white;
        `
        :
        `
        border-width: 0px;
        border-bottom-width: 2px;
        border-bottom-color: white;
        `}
`