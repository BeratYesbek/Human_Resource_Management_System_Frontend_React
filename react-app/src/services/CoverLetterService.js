import axios from 'axios'

export default class CoverLetterService{
    url = "http://localhost:8080/api/coverLetters"

    add(value){
        return axios.post(this.url+"/add",value)
    }
} 