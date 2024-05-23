import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/DetailsPage.css";
import axios from "../axios";
import config from "../config.json";

const DetailsPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovieDetails(id);
      setDetails(response);
    };
    fetchData();
  }, [id, type]);

  const getMovieDetails = async (id) => {
    try {
      const response = await axios.get(
        `/${type}/${id}??append_to_response=Images%2CReviews%2CVideos%2CWatch%20Providers&language=en-US' `
      );
      const details = response.data;
      return details;
    } catch (error) {
      console.error("Error fetching movie details:", error); // eslint-disable-line no-console
    }
  };

  useEffect(() => {
    const fetchVideoData = async () => {
      const response = await getMovieVideos(id);
      setVideos(response);
    };
    fetchVideoData();
  }, [id, type]);

  const getMovieVideos = async (id) => {
    try {
      const response = async () => axios.get(`/${type}/${id}/videos`);
      const videos = response.data;
      return videos;
    } catch (error) {
      console.error("Error fetching movie videos:", error); // eslint-disable-line no-console
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!details) {
    return <div>Učitavanje...</div>;
  }

  return (
    <div className="details-page">
      <Helmet>
        <title>{details.original_title || details.original_name}</title>
      </Helmet>
      <div className="details-header">
        {videos &&
          videos.map((video) => (
            <iframe
              key={video.key}
              src={`https://www.youtube.com/embed/${video.key}`}
              title={`${video.name}`}
              allowFullScreen
            ></iframe>
          ))}

        <img
          src={`${config.base_url}${details.poster_path}`}
          alt={`${details.title} Cover`}
        />
      </div>

      <h1>{details.original_title || details.original_name}</h1>
      <p>{details.overview}</p>
      <p>Release Date: {details.release_date}</p>
      <p>
        Rating: {details.vote_average} ({details.vote_count} votes)
      </p>
      <p>
        Production companies:{" "}
        {details.production_companies.map((pc) => pc.name).join(", ")}
      </p>
      <p>Genres: {details.genres.map((genre) => genre.name).join(", ")}</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default DetailsPage;
