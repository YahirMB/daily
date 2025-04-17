//#Libraies
import React, { useEffect, useContext, useState } from 'react';

//#Hooks
import { useModalBasic } from '../../hooks/useModalBasic';

//#Components
import { ScrollView, RefreshControl, View, FlatList } from 'react-native';
import { ModalBasic } from '../../components/modalBasic/ModalBasic';

// import { CardsList } from '../../components/cardList/CardsList';
import { CCard } from '../../components/CCard/CCard';
import { notesList } from '../../resources/data/data';
import { CSearchBar } from '../../controls/CSearchBar/CSearchBar';
import { useFilter } from '../../hooks/useFilter';
import { ModalBase } from '../../components/modal/ModalBase';
import { CChip } from '../../components/CChip/CChip';

//#Controls
//#Styles
//#Resources

const chisp = [
  { title: 'Por hacer', type: 'todo' },
  { title: 'Nota', type: 'note' },
  { title: 'Alarma', type: 'alarm' },
]

export const HomeScreen = ({ navigation }: any) => {
  const [refreshing, setRefreshing] = useState(false);

  const [indexChip, setIndexChip] = useState(-1)

  const onRefresh = React.useCallback(() => {
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  const { onCloseModal, onOpenModal, isVisible } = useModalBasic()
  const { onCloseModal:onCloseModalOperations, onOpenModal:onOpenModalOperations, isVisible:isVisibleModalOperatios } = useModalBasic()

  const { filteredData, onSearchData, searchQuery, onSearchByTypeNote } = useFilter(notesList);

  const [noteSelected, setNoteSelected] = useState({ title: '', description: '' })

  const getNoteId = (id: Number) => {
    const { description, title } = notesList.find(note => note.id === id);
    setNoteSelected({ description, title });
    onOpenModal();
  }

  const getIndexChip = (index: number) => {

    if (index === indexChip) {
      setIndexChip(-1);
      onSearchByTypeNote('default')
      return
    }

    setIndexChip(index)
    onSearchByTypeNote(chisp[index].type)
  };


  return (

    <View style={{ marginTop: 10, flex: 1 }}>
      <View style={{ marginBottom: 10, rowGap: 10, marginHorizontal: 10 }}>
        <CSearchBar onSearchQuery={onSearchData} searchQuery={searchQuery} />
        <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'flex-start' }}>

          {chisp.map((note, index) =>
            <CChip
              isSelected={index === indexChip}
              index={index}
              key={note.type}
              typeOfNote={note.type} getChipSelected={getIndexChip} title={note.title} />

          )}

        </View>
      </View>

      <FlatList
        data={filteredData}
        style={{ paddingHorizontal: 20 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#32BC82']} />}
        renderItem={({ item }) => <CCard event={onOpenModalOperations} noteId={item.id} getNoteId={getNoteId} title={item.title} content={item.description} />}
        keyExtractor={(item) => item.id}
      // onScroll={getScroll}
      />

      <ModalBase
        isVisible={isVisible}
        onCloseModal={onCloseModal}
        showNote={noteSelected}
      />

      <ModalBasic
        closeModal={onCloseModalOperations}
        isVisibleModal={isVisibleModalOperatios}
      />

    </View>




  );
};
