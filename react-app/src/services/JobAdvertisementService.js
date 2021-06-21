import axios from 'axios'

export default class JobAdvertisementService {
    
    getAllDetail(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAllDetail")
    }
}
