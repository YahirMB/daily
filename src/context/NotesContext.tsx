import { createContext, useEffect, useState } from "react";
import apiDaily from "../api/dailyplanApi";


interface Note {
    Id: string,
    Title: string,
    Descripcion: string
}

type NoteCotextProps = {
    notes: Note[];
    loadNotes: () => Promise<void>;
    // addNote: (categoryId: string, productName: string) => Promise<Note>;
    // updateNote: (categoryId: string, productName: string, productId: string) => Promise<void>;
    // deleteNote: (id: string) => Promise<void>;
}


export const NoteContext = createContext({} as NoteCotextProps);

export const NoteProvider = ({ children }: any) => {

    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        loadNotes();
    }, [])


    const loadNotes = async () => {
        try {
            
            const {data} = await apiDaily.get('note/getAllNotes');


            setNotes(data.result)
           
        } catch (error) {
            console.log(error)
        }
        // setNotes([...resp.data.productos]);
    }

    // const addProduct = async (categoryId: string, productName: string): Promise<Producto> => {

    //     const resp = await cafeApi.post<Producto>('/productos', {
    //         nombre: productName,
    //         categoria: categoryId
    //     });
    //     setProducts([...products, resp.data]);

    //     return resp.data;
    // }

    // const updateProduct = async (categoryId: string, productName: string, productId: string) => {
    //     const resp = await cafeApi.put<Producto>(`/productos/${productId}`, {
    //         nombre: productName,
    //         categoria: categoryId
    //     });
    //     setProducts(products.map(prod => {
    //         return (prod._id === productId)
    //             ? resp.data
    //             : prod;
    //     }));
    // }

    // const deleteProduct = async (id: string) => {

    // }

    // const loadProductById = async (id: string): Promise<Producto> => {
    //     const resp = await cafeApi.get<Producto>(`productos/${id}`);
    //     return resp.data;
    // };

    // const uploadImage = async (data: ImagePickerResponse, id: string) => {

    //     const fileToUpload = {
    //         uri: data.uri,
    //         type: data.type,
    //         name: data.fileName
    //     }

    //     const formData = new FormData();
    //     formData.append('archivo', fileToUpload);

    //     try {

    //         const resp = await cafeApi.put(`/uploads/productos/${id}`, formData)
    //         console.log(resp);
    //     } catch (error) {
    //         console.log({ error })
    //     }

    // }

    return (
        <NoteContext.Provider value={{
            loadNotes,
            notes
        }}>
            {children}

        </NoteContext.Provider>
    )
}