import axios from 'axios'
export default class EmployerService {
    url = "http://localhost:8080/api/employers"
    add(value){
        return axios.post(`${this.url}/add`,value)
    }
}