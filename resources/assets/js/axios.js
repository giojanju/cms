import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://cms.local/api/',
});

export default instance;