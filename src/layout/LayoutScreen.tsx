//#Libraries
import React from 'react'

//#Styles
import { TitleApp } from '../styles/titles/styles'
import { ContainerLogIn, Content, FormContainer } from './styles'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'



export const LayoutScreen = ({ children, imgSrc, isLogin }: any) => {
    return (

        // <KeyboardAvoidingView
        //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        //     style={{ flex: 1 }}>


            <ContainerLogIn source={imgSrc}>

                <Content>

                    {isLogin && <TitleApp color='white'>Daily Plan</TitleApp>}


                    <FormContainer>


                        {children}

                    </FormContainer>
                </Content>

            </ContainerLogIn>
        // </KeyboardAvoidingView>
    )
}
