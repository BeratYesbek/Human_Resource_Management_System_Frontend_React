import axios from 'axios'

export default class JobAdvertisementService {
    
     url = "http://localhost:8080/api/jobAdvertisements"
    getAllDetail(){
        return axios.get(`${this.url}/getAllDetail`)
    }

    add(jobAdvertisement){
        console.log(jobAdvertisement)
        return axios.post(`${this.url}/add`,jobAdvertisement)
    }
}
