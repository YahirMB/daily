//#Libraies
import React, { useEffect, useContext, useState } from 'react';

//#Hooks
import { NoteContext } from '../../context/NotesContext';
import { AuthContext } from '../../context/AuthContext';

//#Components
import { ScrollView, RefreshControl, View } from 'react-native';
// import { CardsList } from '../../components/cardList/CardsList';
import { CCard } from '../../components/CCard/CCard';
import { Circle, CircleDown, Line, LineContainer } from '../../components/cardList/styles';
import { CText } from '../../controls/CText/CText';


import * as globalColors from '../../styles/colors/customColors'
import { ModalBasic } from '../../components/modalBasic/ModalBasic';
import { useModalBasic } from '../../hooks/useModalBasic';
//#Controls
//#Styles
//#Resources

export const HomeScreen = ({ navigation }: any) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    // fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  const { onCloseModal, onOpenModal, visible } = useModalBasic()


  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#32BC82']} />}
    >


      <View style={{ margin: 10, gap: 15 }}>
        <View style={{ flexDirection: 'row', gap: 20 }}>

          <LineContainer>
            <Line></Line>
            <Circle></Circle>
            <CircleDown></CircleDown>
          </LineContainer>

          <View style={{ flex: 1 }}>

            <CText
              fontSize={20}
              color={globalColors.primary}
              text='12/15/2023'
              fontWeight='600'
            />
            <View style={{ marginTop: 10, flex: 1, gap: 20 }}>

              <CCard
                title='Compra del super mercado'
                content='necesito realizar compras el proximo viernes de la segunda quincena
              de enero ya que lo necesito a demas comprar un regalo para la tia mei
              ya que se enfermo.'
                event={onOpenModal}
              />

              <CCard
                title='Tramitar visa de mamá'
                content='Realizar el tramite de mama para el 14 de diciembre del año entrante del 2024'
                event={onOpenModal}
              />

              <CCard
                title='Tramitar visa de mamá'
                content='Realizar el tramite de mama para el 14 de diciembre del año entrante del 2024'
                event={onOpenModal}
              />
            </View>
          </View>

        </View>

      </View>

      <ModalBasic
        closeModal={onCloseModal}
        visible={visible}
      />
    </ScrollView>
  );
};
