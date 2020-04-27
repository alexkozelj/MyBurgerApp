import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-c664d.firebaseio.com/'
});

export default instance;