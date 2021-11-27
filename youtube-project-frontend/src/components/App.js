import axios from "axios";
import React, { useState, useEffect } from "react";
import API_KEY from "../YT_API_KEY/API_KEY";
import CommentForm from "./CommentForm";
import CommentPrinter from "./CommentPrinter";
import RelatedVideos from "./RelatedVideos";
// import VideoPlayer from "./VideoPlayer";
import "./App.css";
import "./relatedVideos.css";
import "./CommentForm.css";
import SearchBar from "./SearchBar";

const App = () => {
  const [key, setKey] = useState(API_KEY);
  const [videoImage, setVideoImage] = useState();
  const [comments, setComments] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [videoId, setVideoId] = useState("LYdW1RJ7Kis");
  const [commentBody, setCommentBody] = useState("");

  const getVideo = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=LYdW1RJ7Kis&type=video`
      )
      .then((res) => {
        setVideoId(res.data.items[0].id);
        // setVideoImage(res.data.items[0].snippet.thumbnails.medium.url);
      });
  };

  const getComments = async () => {
    await axios
      .get(`http://localhost:8000/api/comments`)
      .then((res) => setComments(res.data));
  };

  const getRelatedVideos = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=golf&key=${API_KEY}&id=${videoId}&maxResults=10&part=snippet`
      )
      .then((res) => {
        setRelatedVideos(res.data.items);
      });

  };
  useEffect(() => {
    getRelatedVideos();
    getVideo();
  }, []);




  return (
    <div>
      <div>
        {/* <SearchBar userInput={userInput}/> */}
      </div>
      <div className="related-videos">   
      <RelatedVideos relatedVideos={relatedVideos} />
      </div>
      <div className="form-style">
      {/* <VideoPlayer onYouTubeIframeAPIReady={onYouTubeIframeAPIReady}/> */}
      <CommentForm commentBody={commentBody} videoId={videoId} getComments={getComments} />
      <CommentPrinter comments={comments} videoId={videoId} getComments={getComments} />

      </div>
      {/* <button onClick={() => getComments()}>Get Comments</button> */}
      <div>
      </div>
    </div>
  );
};

export default App;
