import React from 'react';

import { TitleApp } from '../../styles/titles/styles';
import { BtnContainer, Column, Container } from './styles';
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { ImagesCarousel } from '../../components/carucel/ImagesCarucel';



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
        <ButtonFilled event={() => navigation.navigate('Login')} title={'Iniciar sesion'} />
      </BtnContainer>

    </Container>

  );
};


