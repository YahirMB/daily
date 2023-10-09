import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'logIn' }
    | { type: 'logOut' };


// generaEstado
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                isLoggedIn: true,
                
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