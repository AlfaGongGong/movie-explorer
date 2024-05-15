const AxiosConf = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmFkMDJkNzYwOWYzZjkyMWY1NzE5NjYxOTA2NWZiYSIsInN1YiI6IjYyNTUyYmFjYzE2MDZhMDA2NjA2MmNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v6jyTK86uPhbB1HrXYWZHnM9lN8wnsGVXtKPtgc9bl0"
  }
};

export default AxiosConf;
