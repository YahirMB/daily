
export const fileUpload = async(file:any) => {

    if(!file) throw new Error('No viene ningun archivo') 

    const cloudUrl = 'https://api.cloudinary.com/v1_1/df4cwuvkh/upload';

    const formData = new FormData();
    formData.append('upload_preset','dailyPlan');
    formData.append('file',file);
    
try {
    
    const resp = await fetch(cloudUrl,{
        method:'POST',
        body:formData
    })

    if(!resp.ok) throw new Error('No se pudo subir imagen');
    const cloudResp = await resp.json();
    
    return cloudResp.secure_url;
} catch (error:any) {
    throw new Error(error.message)
}

}