import Axios from 'axios';
import config from './config.json';

const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${config.TMDB_api_key}`,
  },
});

export default axios;
