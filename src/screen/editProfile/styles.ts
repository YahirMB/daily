import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: white;
    paddingLeft:25px;
    paddingRight:25px;
    gap:10px;
`

export const AreaView = styled.View`
    margin-top:20px;
    border:3px solid #32BC82;
    border-radius:5px;
`

export const AreaCred = styled(AreaView)`
    opacity: 0.5;   

`

export const InputContainer = styled.View`
    gap: 5px;
    margin-bottom:25px;
    margin-top:10px;
    paddingLeft: 15px;
    paddingRight: 15px;

`
export const TitleSection = styled.Text`
    fontSize: 22px;
    fontWeight: bold;
    padding-bottom:10px;   
    color:white;
    background-color:#32BC82;
    paddingLeft:10px;

`
export const ButtonContainer = styled.View`
    align-items: flex-end;
    gap: 15px;
`