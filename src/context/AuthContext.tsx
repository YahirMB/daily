import React, { createContext, useReducer } from 'react';
import { AuthState, authReducer } from './authReducer';
import apiDaily from '../api/dailyplanApi';
import { User } from '../interfaces/apiInterfaces';


//propiedades del context
type AuthContextProps = {
    isLoggedIn: boolean,
    user: User | null,
    errorMessage: string
    status: 'checking' | 'authenticated' | 'not-authenticated';
    logIn: (body: object) => Promise<void>;
    logout: () => void;

}


// Estado inicial
export const authInitialState: AuthState = {
    status:'checking',
    isLoggedIn: false,
    user: null,
    errorMessage: ''
}






// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const logIn = async (body: object) => {
     
        const { data } = await apiDaily.post('user/logIn', body)

        dispatch({
            type: 'logIn',
            payload: {
                user: data.result,
                message:data.message
            }
        });
    }

    const logout = () => {
        dispatch({ type: 'logOut' });
    }


    return (
        <AuthContext.Provider value={{
            ...authState,
            logIn,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )

}
