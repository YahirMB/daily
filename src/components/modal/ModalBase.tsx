import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
//#Resources
import * as globalColors from '../../styles/colors/customColors'
interface Note {
    title: string;
    description: string;
}

interface ModalProps {
    isVisible: boolean,
    onCloseModal: () => void,
    showNote: Note;
}

export const ModalBase = ({ isVisible, onCloseModal, showNote }: ModalProps) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                // statusBarTranslucent
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={onCloseModal}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Icon onPress={onCloseModal} name="close" color={globalColors.primary} size={30} style={{position:'absolute',right:15,top:10}} />
                        <View style={{alignSelf:'flex-start',marginBottom:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <Text style={{color:globalColors.gray500,fontSize:16}}>25/05/2023</Text>
                        </View>
                        <Text style={styles.modalTitle}>{showNote.title}</Text>
                        <Text style={styles.modalText}>{showNote.description}</Text>

                    </View>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        padding: 35,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width: '100%',
        flex: 1,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    
    modalTitle: {
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold',
        color: globalColors.gray500,

    },
    modalText: {
        marginBottom: 15,
        fontSize:16,
        color: globalColors.gray500,
        // textAlign: 'center',
    },
});

