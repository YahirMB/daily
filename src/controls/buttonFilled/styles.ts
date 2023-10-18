import styled from "styled-components/native";

export const BtnFilled = styled.TouchableOpacity<{backgroundColor?:string}>`
    backgroundColor: ${props => props.backgroundColor || '#32BC82' };
    width: auto;
    height: 40px;
    padding:0px 20px;
    align-items: center;
    justify-content: center;
`
export const BntText = styled.Text<{color?:string}>`
    color: ${props => props.color || 'white'};
    font-size: 18px;
    font-weight: bold;
`