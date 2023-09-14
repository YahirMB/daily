import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: white;
    white:100%;   
`

export const Column = styled.View<{height?:string}>`
    height: ${props => props.height ||'20%'};
    width:100%;
    align-items:center;
`
export const BtnContainer = styled.View`
    align-items: flex-end;
    width: 70%;
`
