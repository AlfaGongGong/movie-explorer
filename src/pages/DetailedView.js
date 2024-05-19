import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom"; // Add the missing import statement for useParams

const DetailedView = () => {
  const [details, setDetails] = useState(null);
  const { id, type } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${type}/${id}`).then((response) => {
      setDetails(response.data);
    });
  }, [id, type]);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      {details && (
        <>
          {details.video ? (
            <video src={details.video} controls />
          ) : (
            <img src={details.cover} alt="Cover" />
          )}
          {/* Display basic information */}
          <button onClick={handleBack}>Back</button>
        </>
      )}
    </div>
  );
};

export default DetailedView;
