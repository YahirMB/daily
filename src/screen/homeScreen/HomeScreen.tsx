import React, { useEffect, useContext, useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { CardsList } from '../../components/cardList/CardsList';
import { NoteContext } from '../../context/NotesContext';
import { AuthContext } from '../../context/AuthContext';

export const HomeScreen = ({ navigation }: any) => {
  const { user } = useContext(AuthContext);
  const { loadNotes, notes } = useContext(NoteContext);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    await loadNotes(user?.Id);
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
      <CardsList item={''} data={notes} />
    </ScrollView>
  );
};
