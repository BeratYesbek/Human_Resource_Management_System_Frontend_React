
import axios from 'axios'
export default class LanguageService {
    
    url = "http://localhost:8080/api/languages"
    
    add(value){
        return axios.post(this.url + "/add",value)
    }
}