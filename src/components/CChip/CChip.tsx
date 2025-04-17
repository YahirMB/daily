import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

import * as globalColors from "../../styles/colors/customColors"
interface ChipProps {
    title: chipType,
    typeOfNote:string,
    getChipSelected:(index:number) => void,
    index:number,
    isSelected?:boolean,
}

type chipType = 'Por hacer' | 'Nota' | 'Alarma'

export const CChip = ({ title = 'Nota',getChipSelected ,typeOfNote,index,isSelected}: ChipProps) => {

    return (
        <Chip

            style={[isSelected ? styles.styleChipSelected : styles.stylesChip]}
            showSelectedCheck={false}
            selected={isSelected}
            onPress={() => getChipSelected(index)}
            textStyle={[isSelected ? styles.textSelected : styles.chipText]}

        >{title}</Chip>
    );

}

const styles = StyleSheet.create({
    stylesChip: {
        backgroundColor: globalColors.gray100,
        borderRadius: 50,
        height:35,
        justifyContent: 'center',

    },
    chipText: {
        color: globalColors.primary
    },
    styleChipSelected: {
        backgroundColor: globalColors.primary,
        borderRadius: 50,
        height:35,
        justifyContent: 'center',
    },
    textSelected: {
        color: globalColors.white,
    }
})