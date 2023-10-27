import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const NavContainerProfile = styled.View`
    flex-direction:row;
    align-items:center;
    padding-vertical:20px;
    gap:15px;
    margin-horizontal:10px;
`

export const AvatarNavBar = styled.Image`
    width: 45px;
    height: 45px;
`
export const UserNameNav = styled.Text`
    color: white;
    font-size: 18px;
`
export const SectionContainer = styled.View`
    flex-direction: row; 
    justify-content: space-between; 
`

export const focus = StyleSheet.create({

    buton: {
      marginHorizontal: 10,
      padding: 10
    },

    active: {
      backgroundColor: 'white',
      borderRadius: 5,
    
    },
    inactive: {
      backgroundColor: '#32BC82',
      borderRadius: 5
    },
    activeColor: {
      fontWeight: "500",
      fontSize: 15,
      color: '#32BC82'
    },
    inactiveColor: {
      fontWeight: "500",
      fontSize: 15,
      color: 'white'

    }
  })

