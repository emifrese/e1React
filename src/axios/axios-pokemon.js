import axios from 'axios';
import { BASE_URL } from '../utils/constants'

export const getPokemonList = async(base, addAmount) => {
    try {
        const response = await axios.get(`${BASE_URL}pokemon/?offset=${0}&limit=${addAmount}`)
        return response.data
    } catch(error){
        console.log(error)
        return alert(error.response.data)
    }
}