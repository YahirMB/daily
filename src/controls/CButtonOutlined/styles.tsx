import { Button } from "react-native-paper";
import styled from "styled-components";

import * as globalColors from '../../styles/colors/customColors'

export const CustomButtonOutlined = styled(Button)`
    border-radius:3px;
    border-color:${globalColors.white};
`