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
    loadNotes: (idUser: number) => Promise<void>
    creatNote: (body: object) => Promise<void>
    deleteNote: (idNote: number) => Promise<void>
    removeCodeStatu: () => void

}

export const noteInitialState: NoteState = {
    status: null,
    note: null,
    notes: [],
    errorMessage: '',
    codeStatus: 0,
    typeOperation: '',
}

export const NoteContext = createContext({} as NoteCotextProps);

export const NoteProvider = ({ children }: any) => {

    const [noteState, dispatch] = useReducer(noteReducer, noteInitialState);


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

    return (
        <NoteContext.Provider value={{
            ...noteState,
            loadNotes,
            creatNote,
            deleteNote,
            removeCodeStatu
        }}>
            {children}

        </NoteContext.Provider>
    )
}