import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';
import apiDaily from '../api/dailyplanApi';


// Definir cómo luce, qué información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username: Array<any>;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: [],
}


// Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    logIn: (body:object) => Promise<void>;
    logout: () => void;
}


// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const logIn = async (body: object) => {
        console.log(body)
        const {data} = await apiDaily.post('user/logIn', body)

        console.log(data)

        // dispatch({ type: 'logIn' });
    }

    const logout = () => {
        dispatch({ type: 'logOut' });
    }


    return (
        <AuthContext.Provider value={{
            authState,
            logIn,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )

}
