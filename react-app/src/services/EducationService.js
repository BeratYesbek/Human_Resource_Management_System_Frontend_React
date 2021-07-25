
import axios from 'axios'

export default class EducationService{
    url = "http://localhost:8080/api/educations"
    add(value) {
        console.log(value)
        return axios.post(this.url+"/add",value)
    }

}