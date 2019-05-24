import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-69947.firebaseio.com/'
})

export default instance
