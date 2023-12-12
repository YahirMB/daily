import { Button } from "react-native-paper";
import styled from "styled-components";

interface PropsCustomButtonStyles {
    backgroundColor?: string
}

export const CustomButton = styled(Button) <PropsCustomButtonStyles>`
    background-color:${props => props.backgroundColor || 'green'};
    border-radius:3px;
    width:100%;
`;	