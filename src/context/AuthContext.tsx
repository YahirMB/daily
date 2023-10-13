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
    typeOperation:string;
    status: 'checking' | 'authenticated' | 'not-authenticated' | null;
    logIn: (body: object) => Promise<void>;
    logout: () => void;
    removeMessage: () => void;
    signUp: (body:object) => void

}


// Estado inicial
export const authInitialState: AuthState = {
    status: null,
    isLoggedIn: false,
    user: null,
    errorMessage: '',
    codeStatus: 0,
    typeOperation:''
}






// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);


    const logIn = async (body: object) => {

        dispatch({type:'checking',payload:{type:''}});

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
        dispatch({type:'removeMessage',payload:{type:''}})
    }

    const signUp = async (body: object) => {
        dispatch({type:'checking',payload:{type:'signUp'}});

        const { data } = await apiDaily.post('user/signIn', body);

        if (data.status == 200) {
            dispatch(
                {
                    type: 'signUp',
                    payload: {
                        user: data.result,
                        codeStatus: data.status
                    }
                })
        } else {
            dispatch(
                {
                    type: 'error',
                    payload: {
                        message: data.message,
                        codeStatus: data.status
                    }
                })
        }
    }


    return (
        <AuthContext.Provider value={{
            ...authState,
            logIn,
            logout,
            removeMessage,
            signUp
        }}>
            {children}
        </AuthContext.Provider>
    )

}
