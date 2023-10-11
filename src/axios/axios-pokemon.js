import axios from 'axios';
import { BASE_URL } from '../utils/constants'

export const getPokemonList = async() => {
    try {
        const response = await axios.get(`${BASE_URL}pokemon/?offset=${0}&limit=${1017}`)
        return response.data
    } catch(error){
        console.log(error)
        return alert(error.response.data)
    }
}

export const getPokemon = async(id) => {
    try {
        const response = await axios.get(`${BASE_URL}pokemon/${id}`)
        return response.data
    } catch(error){
        console.log(error)
        return alert(error.response.data)
    }
}