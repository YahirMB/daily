import React, { createContext, useReducer } from 'react';
import { AuthState, authReducer } from './authReducer';
import apiDaily from '../api/dailyplanApi';
import { User } from '../interfaces/apiInterfaces';


//propiedades del context
type AuthContextProps = {
    isLoggedIn: boolean;
    user: User | null;
    codeStatus: number;
    errorMessage: string;
    status: 'checking' | 'authenticated' | 'not-authenticated' | null;
    logIn: (body: object) => Promise<void>;
    logout: () => void;
    removeMessage: () => void;

}


// Estado inicial
export const authInitialState: AuthState = {
    status: null,
    isLoggedIn: false,
    user: null,
    errorMessage: '',
    codeStatus: 0
}






// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);


    const logIn = async (body: object) => {

        dispatch({type:'checking'});

        const { data } = await apiDaily.post('user/logIn', body)


        if (data.status == 200) {
            dispatch({
                type: 'logIn',
                payload: {
                    user: data.result,
                    codeStatus: data.status
                }
            });

        } else {
            dispatch({
                type: 'error',
                payload: { message: data.message, codeStatus: data.status }
            })
        }


    }

    const logout = () => {
        dispatch({ type: 'logOut' });
    }

    const removeMessage = () => {
        dispatch({type:'removeMessage'})
    }


    return (
        <AuthContext.Provider value={{
            ...authState,
            logIn,
            logout,
            removeMessage
        }}>
            {children}
        </AuthContext.Provider>
    )

}
