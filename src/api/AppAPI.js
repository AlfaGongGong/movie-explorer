import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config('/.env');

const AppAPI = () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTUwOGE5MDU0NTMzZjJiMjc4MjhjMmIwNzUyZTFmOCIsInN1YiI6IjYyNTUyYmFjYzE2MDZhMDA2NjA2MmNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pc-iypB9HKIuzeROLawyc012aw-xanmMo0r-WX7EAyo',
    },
  };

  Axios.request(options)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};



export default AppAPI;
