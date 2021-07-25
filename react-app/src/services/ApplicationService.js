import axios from 'axios'
import React from 'react'

export default class ApplicationService {

    url = "http://localhost:8080/api/applications"
    getApplicationById(id) {
        return axios.get(`${this.url}/getAllDetailByJobSeekerId?id=${id}`)
    }

    getApplicationByJobAdvertisementId(jobAdvertisementId){
        return axios.get(`${this.url}/getApplicationDetailByJobAdvertisementId?jobAdvertisementId=${jobAdvertisementId}`)
    }

    add(application){
        return axios.post(`${this.url}/add`,application)
    }
}
