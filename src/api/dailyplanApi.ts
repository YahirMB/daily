import axios from "axios";



const apiDaily = axios.create({ baseURL: 'http://192.168.1.18:3300/api/'});
//en ves de localhost va la ip de tu compu
//para ver tu ip es tu terminal corres ipconfig




export default apiDaily;