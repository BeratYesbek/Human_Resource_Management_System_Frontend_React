import axios from 'axios'
import React from 'react'

export default class ApplicationService {
    getApplicationById(id) {
        return axios.get('http://localhost:8080/api/abilities/getByJobSeekerId?id='+id)
    }
}
