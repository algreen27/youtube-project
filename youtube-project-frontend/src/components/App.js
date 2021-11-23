import axios from "axios";
import React, { useState } from "react";
import API_KEY from "../YT_API_KEY/API_KEY";

const App = () => {
  const [key, setKey] = useState(API_KEY);
  const [videoImage, setVideoImage] = useState();
  const [comments, setComments] = useState([]);

  const getVideo = async () => {
    await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=dogs&key=${API_KEY}&part=snippet`
    ).then(res =>setVideoImage(res.data.items[0].snippet.thumbnails.medium.url))
  };


  const getComments = async () => {
    await axios.get(
      `http://localhost:8000/api/comments`
    ).then(res =>setComments(res.data))
  };

 

  return (
    <div>
        <img src={videoImage} height="180" width="320"/>
      <button onClick={() => getComments()}>Get Comments</button>
      {key}
    </div>
  );
};

export default App;
