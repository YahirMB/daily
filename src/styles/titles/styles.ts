import styled from "styled-components/native";

export const TitleApp = styled.Text<{color?:string}>`
  color: ${props => props.color || '#32BC82' };
  font-size:40px;
  font-weight:600;
  top: 50px;
`