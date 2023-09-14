import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { TitleApp } from '../../styles/titles/styles';
import { Container } from './styles';
import { ButtonFilled } from '../../components/buttonFilled/ButtonFilled';
import { ImagesCarucel } from '../../components/carucel/ImagesCarucel';



export const StartScreen = ({ navigation }: any) => {

  return (
    <Container>
      <View style={{ height: '20%',width:"100%",alignItems:'center' }}>
        <TitleApp>Daily Plan</TitleApp>
      </View>


      <View style={{ height: '60%',width:"100%",alignItems:'center' }}>
        <ImagesCarucel />

      </View>

      <View style={{alignItems:'flex-end',width:"70%", }}>
    
          <ButtonFilled event={() => navigation.navigate('Login')} title={'Iniciar sesion'} />
      
      </View>

    </Container>

  );
};

export default StartScreen;
