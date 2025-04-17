import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

import * as globalColors from '../../styles/colors/customColors'
import { StyleSheet } from 'react-native';

interface GroupRadioProps {
    value: string,
    setValue: (value: string) => void,
}

export const CGroupRadio = ({value,setValue}:GroupRadioProps) => {
  
    return (
        <RadioButton.Group
            onValueChange={value => setValue(value)}
            value={value}
        >
            <RadioButton.Item
                color={globalColors.gray500}
                labelStyle={styles.label}
                label="Tarea por hacer"
                value="todo" />
            <RadioButton.Item
                color={globalColors.gray500}
                labelStyle={styles.label}
                label="Nota"
                value="note" />
            <RadioButton.Item
                color={globalColors.gray500}
                labelStyle={styles.label}
                label="Nota con alarma"
                value="alarm" />
        </RadioButton.Group>
    );
};

const styles = StyleSheet.create({
    label:{
        color:globalColors.gray600,
    }

});

