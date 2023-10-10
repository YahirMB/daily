import { User } from '../interfaces/apiInterfaces';



//interface del estado 

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    isLoggedIn: boolean;
    user: User | null;
    errorMessage: string
}

//tipos de acciones a realizar

type AuthAction =
    | { type: 'logIn', payload: { user: User, message:'' } }
    | { type: 'logOut' };



// generaEstado
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                errorMessage:action.payload.message
            
            }

        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,

            }

        default:
            return state;
    }

}