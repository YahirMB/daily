import { Button } from "react-native-paper";
import styled from "styled-components";

import * as globalColors from '../../styles/colors/customColors'

interface PropsCustomButtonStyles {
    backgroundColor?: string,
}

export const CustomButton = styled(Button) <PropsCustomButtonStyles>`
    background-color:${props => props.backgroundColor || 'white'};
    border-radius:3px;
    

    ${props => props.disabled ?
        `background-color:${globalColors.gray100};
        `
        :
        `background-color:${props.backgroundColor};
        
        `
    }
`;	