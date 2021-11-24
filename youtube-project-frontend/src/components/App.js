import axios from "axios";
import React, { useState, useEffect } from "react";
import API_KEY from "../YT_API_KEY/API_KEY";
import commentForm from "./commentForm";
import CommentPrinter from "./CommentPrinter";
import RelatedVideos from "./relatedVideos";


const App = () => {
  const [key, setKey] = useState(API_KEY);
  const [videoImage, setVideoImage] = useState();
  const [comments, setComments] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [videoId, setVideoId] = useState("LYdW1RJ7Kis");

  const getVideo = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=golf&key=${API_KEY}&id=LYdW1RJ7Kis&maxResults=10`
      )
      .then((res) =>
        setVideoImage(res.data.items[0].snippet.thumbnails.medium.url)
      );
  };

  const getComments = async () => {
    await axios
      .get(`http://localhost:8000/api/comments`)
      .then((res) => setComments(res.data));
  };

  const getRelatedVideos = async () => {
    await axios
      .get(`https://www.googleapis.com/youtube/v3/search?q=golf&key=${API_KEY}&id=${videoId}&maxResults=10&part=snippet`)
      .then((res) => {
        setRelatedVideos(res.data.items);
      });
  };
  useEffect(() => {
    getRelatedVideos()
  }, [])
  return (
    <div>
      {/* <img src={comments} height="180" width="320"/> */}
      <RelatedVideos relatedVideos={relatedVideos}/>
      <button onClick={() => getComments()}>Get Comments</button>
      <CommentPrinter comments={comments} videoId={videoId}/>
      <div>
        <button onClick={() => getRelatedVideos()}>Get Vidoes</button>
      </div>
    </div>
  );
};

export default App;
