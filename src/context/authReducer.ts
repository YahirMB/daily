import { User } from '../interfaces/apiInterfaces';



//interface del estado 

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    isLoggedIn: boolean;
    user: User | null;
    errorMessage: string
    codeStatus: number
}

//tipos de acciones a realizar

type AuthAction =
    { type: 'logIn', payload: { user: User, codeStatus: 0 } }
    | { type: 'logOut' }
    | { type: 'error', payload: { message: '', codeStatus: 0 } };



// generaEstado
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                codeStatus: action.payload.codeStatus,
                status: 'authenticated'
            }

        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
            }

        case 'error':
            return {
                ...state,
                errorMessage: action.payload.message,
                codeStatus: action.payload.codeStatus,
                status: 'not-authenticated',
                isLoggedIn:false

            }

        default:
            return state;
    }

}