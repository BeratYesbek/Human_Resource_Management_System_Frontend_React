import axios from 'axios'

export default class JobSeekerService {
    url = "http://localhost:8080/api/jobSeekers"

    add(value){
        return axios.post(`${this.url}/add`,value)
    }
}