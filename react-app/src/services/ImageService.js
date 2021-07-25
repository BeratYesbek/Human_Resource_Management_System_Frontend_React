import axios from 'axios'
export default class ImageService{
    url = "http://localhost:8080/images";

    addToCloud(file){
        return axios.post(`${this.url}/addToCloud`,file)
    }

}