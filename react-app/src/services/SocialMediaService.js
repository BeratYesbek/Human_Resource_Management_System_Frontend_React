import axios from 'axios'
export default class SocialMediaService {
    url = "http://localhost:8080/api/socialMedia"
    add(value) {
        return axios.post(this.url + "/add", value)
    }
}