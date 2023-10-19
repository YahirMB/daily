//#Libraries
import React from 'react'

//#Styles
import { TitleApp } from '../styles/titles/styles'
import { ContainerLogIn, Content, FormContainer } from './styles'



export const LayoutScreen = ({ children, imgSrc, isLogin }: any) => {
    return (

            <ContainerLogIn source={imgSrc}>

                <Content>

                    {isLogin && <TitleApp color='white'>Daily Plan</TitleApp>}


                    <FormContainer>


                        {children}

                    </FormContainer>
                </Content>

            </ContainerLogIn>
    )
}
