import React from 'react'
import axios from 'axios'

export default class AbilityService {
   
    url = "http://localhost:8080/api/abilities"
    add(value){
        return axios.post(this.url+"/add",value)
    }

    getByJobSeekerId(id) {
        return axios.get('http://localhost:8080/api/abilities/getByJobSeekerId?id='+id)
    }

}
