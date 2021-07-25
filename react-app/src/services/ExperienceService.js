import axios from 'axios'

export default class ExperienceService {
    url = "http://localhost:8080/api/experiences"
    add(value) {
        return axios.post(this.url + "/add", value)
    }
}