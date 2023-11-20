import { Note, User } from '../interfaces/apiInterfaces';



//interface del estado 

export interface NoteState {
    status: 'checking' | null;
    errorMessage: string
    codeStatus: number
    note: Note | null;
    notes: Array<any>
    typeOperation: string
}

//tipos de acciones a realizar

type AuthAction =
    { type: 'createNote', payload: { codeStatus: 0 } }
    | { type: 'loadNotes'; payload: { notes: []} }
    | { type: 'error'; payload: { errorMessages: '', codeStatus: 0 } }
    | { type: 'removeCodeStatus' }
     


// generaEstado
export const noteReducer = (state: NoteState, action: AuthAction): NoteState => {

    switch (action.type) {
        case 'createNote':
            return {
                ...state,
                codeStatus:action.payload.codeStatus
            }
        case 'loadNotes':
            return {
                ...state,
                notes: action.payload.notes,
            }
        case 'removeCodeStatus':
            return {
                ...state,
                codeStatus: 0,
            }

        default:
            return state;
    }

}