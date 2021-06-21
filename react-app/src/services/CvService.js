import axios from 'axios'

export default class CvService {
   
    getByJobSeekerId(id) {
        return axios.get('http://localhost:8080/api/jobSeekers/getCv?id='+id)
    }

}
