import React, { useEffect, useState } from 'react'

export const useFilter = (data: Array<any>) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dataToFilter, setDataToFilter] = useState(data);
    const [filteredData, setFilteredData] = useState(dataToFilter);

    const onSearchData = (text:string) => {
       
        const newData = dataToFilter.filter(
            item => item.title.toLowerCase().includes(text.toLowerCase())
        )
        setSearchQuery(text)
        setFilteredData(newData);
    }

    const onSearchByTypeNote = (type:string) => {

        if(type === 'default') {
            setDataToFilter(data);
            setFilteredData(data);
            return
        }

        const newData = data.filter(
            item => item.type.toLowerCase().includes(type.toLowerCase())
        )
        // setSearchQuery(text)
        setDataToFilter(newData);
        setFilteredData(newData);
    }

    return {
        //states
        searchQuery,
        filteredData,

        //functions
        onSearchData,
        onSearchByTypeNote
    }
}
