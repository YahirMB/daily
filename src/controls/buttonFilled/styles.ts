import styled from "styled-components/native";

export const BtnFilled = styled.TouchableOpacity<{backgroundColor?:string}>`
    backgroundColor: ${props => props.backgroundColor || '#32BC82' };
    width: 174px;
    height: 40px;
    align-items: center;
    justify-content: center;
`
export const BntText = styled.Text<{color?:string}>`
    color: ${props => props.color || 'white'};
    font-size: 18px;
    font-weight: bold;
`