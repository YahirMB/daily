import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logout' };


// generaEstado
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }

        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,

            }

        default:
            return state;
    }

}