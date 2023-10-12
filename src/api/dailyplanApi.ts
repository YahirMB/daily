import axios from "axios";



const apiDaily = axios.create({ baseURL: 'http://192.168.1.3:3300/api/'});
// tplink-tics-7_5G
//192.168.0.121
//en ves de localhost va la ip de tu compu
//para ver tu ip es tu terminal corres ipconfig




export default apiDaily;