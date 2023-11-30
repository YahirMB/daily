import { createContext, useEffect, useReducer, useState } from "react";
import apiDaily from "../api/dailyplanApi";
import { Note } from "../interfaces/apiInterfaces";
import { NoteState, noteReducer } from "./noteReducer";




type NoteCotextProps = {
    note: Note | null;
    status: 'checking' | 'authenticated' | 'not-authenticated' | null;
    errorMessage: string
    notes: Array<Note | null>
    codeStatus: number
    typeOperation: string
    noteDates:[]
    dates:[]
    loadNotes: (idUser: number) => Promise<void>
    creatNote: (body: object) => Promise<void>
    deleteNote: (idNote: number) => Promise<void>
    removeCodeStatu: () => void
    loadNoteById: (idNote: number) => void
    updateNote: (body: Note) => void
    removeTypeOperation: () => void
    getNoteByDate: (idUser: number, date:string) => void
    loadAllNotes:(idUser:number) => void

}

export const noteInitialState: NoteState = {
    status: null,
    note: null,
    notes: [],
    noteDates:[],
    errorMessage: '',
    codeStatus: 0,
    typeOperation: '',
    dates:[]
}

export const NoteContext = createContext({} as NoteCotextProps);

export const NoteProvider = ({ children }: any) => {

    const [noteState, dispatch] = useReducer(noteReducer, noteInitialState);

    const loadAllNotes = async (idUser: number) => {
        const { data } = await apiDaily.get(`note/getAllNotes/${idUser}`);

        
        let onlyDates = data.result.map(note => note.ExpiriationDate.replace(/\//g, '-'));
        
        if (data.status == 200) {
            dispatch({ type: 'loadAllNotes', payload: { dates:onlyDates } })
        } else {
            dispatch({
                type: 'error',
                payload: {
                    errorMessages: data.message,
                    codeStatus: data.status
                }
            })
        }
    }

    const loadNotes = async (idUser: number) => {
        try {


            const { data } = await apiDaily.get(`note/getAllNotesWithLimit/${idUser}`);


            if (data.status == 200) {
                dispatch({
                    type: 'loadNotes',
                    payload: {
                        notes: data.result,
                    }
                })
            } else {
                dispatch({
                    type: 'error',
                    payload: {
                        errorMessages: data.message,
                        codeStatus: data.status
                    }
                })
            }
        } catch (error: any) {
            dispatch({
                type: 'error',
                payload: {
                    errorMessages: error.message,
                    codeStatus: error.status
                }
            })
        }

    }

    const creatNote = async (body: object) => {
        try {
            const { data } = await apiDaily.post('note/createNote', body);

            if (data.status == 200) {
                dispatch({
                    type: 'createNote',
                    payload: {
                        codeStatus: data.status
                    }
                })
            } else {
                dispatch({
                    type: 'error',
                    payload: {
                        errorMessages: data.message,
                        codeStatus: data.status
                    }
                })
            }

        } catch (error: any) {
            dispatch({
                type: 'error',
                payload: {
                    errorMessages: error.message,
                    codeStatus: error.status
                }
            })
        }
    }

    const removeCodeStatu = () => {
        dispatch({
            type: 'removeCodeStatus'
        })
    }

    const removeTypeOperation = () => {
        dispatch({ type: 'removeTypeOperation' })
    }

    const deleteNote = async (idNote: number) => {
        try {
            const { data } = await apiDaily.delete(`note/deleteNote/${idNote}`)

            if (data.status == 200) {

                dispatch({ type: 'delete', payload: { codeStatus: data.status } })

            } else {
                dispatch({ type: 'delete', payload: { codeStatus: data.status } })
            }
        } catch (error: any) {
            dispatch({
                type: 'error',
                payload: {
                    errorMessages: error.message,
                    codeStatus: error.status
                }
            })
        }
    }

    const loadNoteById = async (idNote: number) => {
        try {

            const { data } = await apiDaily.get(`note/getNoteById/${idNote}`);

            if (data.status == 200 && data) {
                dispatch(
                    {
                        type: 'noteToUpdate',
                        payload: { note: data.result }
                    })
            } else {
                dispatch(
                    {
                        type: 'error',
                        payload: {
                            errorMessages: data.message,
                            codeStatus: data.status
                        }
                    })
            }

        } catch (error: any) {
            dispatch({
                type: 'error',
                payload:
                {
                    errorMessages: error.message,
                    codeStatus: 0
                }
            })
        }
    }

    const updateNote = async (body: Note) => {



        try {
            const { data } = await apiDaily.put(`note/updateNote/${body.Id}`, body)

            if (data.status == 200) {
                dispatch({ type: 'updateNote', payload: { codeStatus: data.status } })
            } else {
                dispatch({ type: 'error', payload: { errorMessages: data.message, codeStatus: data.status } })
            }

        } catch (error: any) {
            dispatch({ type: 'error', payload: { errorMessages: error.message, codeStatus: 0 } })
        }


    }

    const getNoteByDate = async (idUser: number, date: string) => {

        const { data } = await apiDaily.post(`note/getNoteByDate/${idUser}`,date)

        if (data.status == 200) {
            dispatch({ type: 'getNotesByDate', payload: { noteDates: data.result } })
        } else {
            dispatch({ type: 'error', payload: { codeStatus: data.status, errorMessages: data.message } })
        }

        return data.result

    }



    return (
        <NoteContext.Provider value={{
            ...noteState,
            loadNotes,
            creatNote,
            deleteNote,
            removeCodeStatu,
            loadNoteById,
            updateNote,
            removeTypeOperation,
            getNoteByDate,
            loadAllNotes
            
        }}>
            {children}

        </NoteContext.Provider>
    )
}