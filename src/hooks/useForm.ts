import React, { useState } from 'react'

interface EmptyFiel {
    [key: string]: boolean;
  }


export const useForm = <T,K extends Object>( initState: T,initKeys:K,event:any ) => {

    const [state, setState] = useState( initState );

    const [keys, setKeys] = useState(initKeys)

    const [fillData, setFillData] = useState(Boolean)    

    const onChange = (value: string, field: keyof T) => {
        setState({
            ...state,
            [field]: value
        });


        if (value.length > 0) {

            setKeys({ ...keys, [field]: false });

        }
    }

    const setFormValue = ( form: T ) =>{
        setState( form );
    }

    const setKeysValue = ( keys: K ) =>{
        setKeys( keys );
    }


    const onSenData = () => {

        let fill = true
        const newKeys: EmptyFiel = {}

        for (const key in state) {

            if (state[key] == '') {
                
                fill = false
                newKeys[key] = true;

            } else {
                newKeys[key] = false;
            }

        }

        if(fill){
            event(state)
        }
       

        setKeys({ ...keys, ...newKeys });

    }

    return {
        ...state,
        form: state,
        keys:keys,
        onChange,
        setFormValue,
        setKeysValue,
        fillData,
        onSenData
    }
}
