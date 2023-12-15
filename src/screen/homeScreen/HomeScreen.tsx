import React, { useEffect, useContext, useState } from 'react';
import { ScrollView, RefreshControl, View } from 'react-native';
import { CardsList } from '../../components/cardList/CardsList';
import { NoteContext } from '../../context/NotesContext';
import { AuthContext } from '../../context/AuthContext';
import { CCard } from '../../components/CCard/CCard';

export const HomeScreen = ({ navigation }: any) => {
  const { user } = useContext(AuthContext);
  const { loadNotes, notes } = useContext(NoteContext);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    if(user?.Id){
      await loadNotes(user?.Id);
    }
  };


  const onRefresh = React.useCallback(() => {
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetchData(); // Cargar datos al montar la pantalla inicialmente
  }, []);


  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#32BC82']} />}
    >
      {/* <CardsList naviagtion={navigation} item={''} data={notes} type={true} /> */}

    <View style={{margin:10, gap:15}}>
      <CCard 
        title='Compra del super mercado' 
        content='necesito realizar compras el proximo viernes de la segunda quincena
        de enero ya que lo necesito a demas comprar un regalo para la tia mei
        ya que se enfermo.'
        />

      <CCard 
        title='Tramitar visa de mamá' 
        content='Realizar el tramite de mama para el 14 de diciembre del año entrante del 2024'
        />

      <CCard 
        title='Tramitar visa de mamá' 
        content='Realizar el tramite de mama para el 14 de diciembre del año entrante del 2024'
        />

      <CCard 
        title='Tramitar visa de mamá' 
        content='Realizar el tramite de mama para el 14 de diciembre del año entrante del 2024'
        />
    </View>
    </ScrollView>
  );
};
