import React from 'react'
import axios from 'axios'

export default class AbilityService {
   
    getByJobSeekerId(id) {
        return axios.get('http://localhost:8080/api/abilities/getByJobSeekerId?id='+id)
    }

}
