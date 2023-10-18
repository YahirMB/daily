import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom:80px;
`
export const LineContainer = styled.View`
    position: relative;
    height: 100%;
    align-items: center;
`
export const Line = styled.View`
    flex: 1;
    border-color: #32BC82;
    border-width: 2px;
    border-style: solid;
`
export const Circle = styled.View`
    width: 15px;
    height: 15px; 
    background-color: #32BC82;
    border-radius: 20px; 
    position: absolute ;
`

export const CircleDown = styled(Circle)`
    bottom:0px;
`

export const CardContainer = styled.View`
    width: 300px;
    gap: 25px;
`
export const DayText = styled.Text`
    font-size: 22px;
    color: #888888; 
    font-weight: bold; 
`