import axios from 'axios'

export default class JobAdvertisementService {
    
     url = "http://localhost:8080/api/jobAdvertisements"
    getAllDetail(){
        return axios.get(`${this.url}/getAllDetail`)
    }

    getById(id){
        return axios.get(`${this.url}/getById?id=`+id)
    }

    add(jobAdvertisement){
        return axios.post(`${this.url}/add`,jobAdvertisement)
    }

    update(jobAdvertisement){
        return axios.post(`${this.url}/update`,jobAdvertisement)
    }

    delete(jobAdvertisement){
        return axios.post(`${this.url}/delete`,jobAdvertisement)
    }

    getJobAdvertisementByEmployer(employerId) {
        return axios.get(`${this.url}/getJobAdvertisementByEmployer?employerId=${employerId}`)
    }

}
