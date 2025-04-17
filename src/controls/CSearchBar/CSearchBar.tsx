import * as React from 'react';
import { Searchbar } from 'react-native-paper';

import * as globalColors from '../../styles/colors/customColors'

interface CSearchBarProps {
    onSearchQuery: (text: string) => void;
    searchQuery: string;
}
export const CSearchBar = ({ onSearchQuery, searchQuery }: CSearchBarProps) => {

    return (
        <Searchbar
            placeholder="Amigos"
            onChangeText={(text) => onSearchQuery(text)}
            value={searchQuery}
            icon={'search'}
            clearIcon={'close'}
            iconColor={globalColors.gray300}
            placeholderTextColor={globalColors.gray300}
           
            selectionColor={globalColors.primary}
    
            
            theme={{
                colors: {
                    onSurfaceVariant: 'black',
                }
            }}
            style={{color:'red', borderRadius: 5,backgroundColor: globalColors.gray100 }}
        />
    );
};


