import Axios from 'axios';
import dotenv from 'dotenv';
dotenv.config('/.env');

const requestPopMov = async () => {
  await axios.get(process.env.POPULAR_MOVIES_URL)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
      } else {
        throw new Error('Request failed with status: ' + response.status);
      }
    })
    .catch((error) => {
      console.error('Error during the API call:', error);
    });
};

requestPopMov();
