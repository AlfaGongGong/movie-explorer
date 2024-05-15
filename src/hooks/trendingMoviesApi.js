import AxiosConf from "./AxiosConf";
import axios from "axios";

function trendingMoviesApi() {
  axios
    .request(AxiosConf)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return response.data;
}

export default trendingMoviesApi;
