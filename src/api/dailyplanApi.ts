import axios from "axios";



const apiDaily = axios.create({ baseURL: 'http://192.168.1.18:3300/api/'});




export default apiDaily;