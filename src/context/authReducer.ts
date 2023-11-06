import { User } from '../interfaces/apiInterfaces';



//interface del estado 

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated' | null;
    isLoggedIn: boolean;
    user: User | null;
    errorMessage: string
    codeStatus: number
    typeOperation: string
    recoverCode: string
}

//tipos de acciones a realizar

type AuthAction =
    { type: 'logIn', payload: { user: User, codeStatus: 0 } }
    | { type: 'logOut' }
    | { type: 'error', payload: { message: '', codeStatus: 0 } }
    | { type: 'checking', payload: { type: string } }
    | { type: 'removeMessage', payload: { type: string } }
    | { type: 'signUp', payload: { user: User, codeStatus: 0 } }
    | { type: 'updateImg', payload: { user: User, codeStatus: 0 } }
    | { type: 'recoverAccount', payload: { codeStatus: 0, recoverCode: '' } }
    | { type: 'removeStatus' }
    | { type: 'restorePassword', payload: { codeStatus: 0 } }



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
                status: null,
                isLoggedIn: false,
                user: null,
                errorMessage: '',
                codeStatus: 0,
                typeOperation: '',
                recoverCode: ''
            }

        case 'error':
            return {
                ...state,
                errorMessage: action.payload.message,
                codeStatus: action.payload.codeStatus,
                status: 'not-authenticated',
                isLoggedIn: false

            }

        case 'checking':
            return {
                ...state,
                status: 'checking',
                typeOperation: action.payload.type
            }
        case 'removeMessage':
            return {
                ...state,
                errorMessage: '',
                typeOperation: '',
            }
        case 'signUp':
            return {
                ...state,
                user: action.payload.user,
                codeStatus: action.payload.codeStatus,
                status: 'authenticated'
            }
        case 'updateImg':
            return {
                ...state,
                user: action.payload.user,
                codeStatus: action.payload.codeStatus,
            }
        case 'recoverAccount':
            return {
                ...state,
                codeStatus: action.payload.codeStatus,
                recoverCode: action.payload.recoverCode,
            }
        case 'removeStatus':
            return {
                ...state,
                codeStatus: 0
            }
        case 'restorePassword':
            return {
                ...state,
                codeStatus: action.payload.codeStatus
            }

        default:
            return state;
    }

}