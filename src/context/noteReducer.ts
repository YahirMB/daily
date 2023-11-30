import { Note, User } from '../interfaces/apiInterfaces';



//interface del estado 

export interface NoteState {
    status: 'checking' | null;
    errorMessage: string
    codeStatus: number
    note: Note | null;
    notes: Array<any>;
    typeOperation: string;
    noteDates : []
    dates:[]
}

//tipos de acciones a realizar

type AuthAction =
    { type: 'createNote', payload: { codeStatus: 0 } }
    | { type: 'loadNotes'; payload: { notes: []} }
    | { type: 'noteToUpdate'; payload: { note:Note}}
    | { type: 'error'; payload: { errorMessages: '', codeStatus: 0 } }
    | { type: 'removeCodeStatus' }
    | { type: 'delete' ,payload: { codeStatus: 0 } }
    | { type: 'updateNote' ,payload: { codeStatus: 0 } }
    | { type: 'removeTypeOperation' }
    | { type: 'getNotesByDate', payload: { noteDates: [] } }
    | { type: 'loadAllNotes', payload: { dates: [] } }
     


// generaEstado
export const noteReducer = (state: NoteState, action: AuthAction): NoteState => {

    switch (action.type) {
        case 'createNote':
            return {
                ...state,
                codeStatus:action.payload.codeStatus,
                typeOperation:'createNote'
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
        case 'delete':
            return {
                ...state,
                codeStatus: action.payload.codeStatus,
                typeOperation:'deleteNote'
            }
        case 'noteToUpdate':
            return {
                ...state,
                note: action.payload.note,
            }
        case 'updateNote':
            return {
                ...state,
                codeStatus: action.payload.codeStatus,
                typeOperation:'updateNote'
            }
        case 'removeTypeOperation':
            return{
                ...state,
                typeOperation:''
            }
        case 'getNotesByDate':
            return{
                ...state,
                noteDates:action.payload.noteDates
            }
        case 'loadAllNotes':
            return{
                ...state,
                dates:action.payload.dates
            }

        default:
            return state;
    }

}