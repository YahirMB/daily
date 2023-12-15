//#Libraries
import React from 'react';
//#Components
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { ImagesCarousel } from '../../components/carucel/ImagesCarucel';
//#Styles
import { TitleApp } from '../../styles/titles/styles';
import { BtnContainer, Column, Container } from './styles';
import { pathLogin } from '../../navigator/Routes/routes';




export const StartScreen = ({ navigation }: any) => {

  return (
    <Container>

      <Column>
        <TitleApp>Daily Plan</TitleApp>
      </Column>

      <Column height='60%'>
        <ImagesCarousel />
      </Column>

      <BtnContainer>
        <ButtonFilled event={() => navigation.navigate(pathLogin)} title={'Iniciar sesion'} />
      </BtnContainer>

    </Container>

  );
};


