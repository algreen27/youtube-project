import axios from "axios";
import React, { useState } from "react";
import API_KEY from "../YT_API_KEY/API_KEY";
import commentForm from "./commentForm";
import relatedVideos from "./relatedVideos";

const App = () => {
  const [key, setKey] = useState(API_KEY);
  const [videoImage, setVideoImage] = useState();
  const [comments, setComments] = useState([]);

<<<<<<< HEAD
  // const getVideo = async () => {
  //   await axios.get(
  //     `https://www.googleapis.com/youtube/v3/search?q=dogs&key=${API_KEY}&part=snippet`
  //   ).then(res =>setVideoImage(res.data.items[0].snippet.thumbnails.medium.url))
  // };
=======
  const getVideo = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=dogs&key=${API_KEY}&part=snippet`
      )
      .then((res) =>
        setVideoImage(res.data.items[0].snippet.thumbnails.medium.url)
      );
  };
>>>>>>> d0a10460ed670eed186088230010690b2fbff7cb

  const getComments = async () => {
    await axios
      .get(`http://localhost:8000/api/comments`)
      .then((res) => setComments(res.data));
  };

  const getRelatedVideos = async () => {
    await axios
      .get(`https://www.googleapis.com/youtube/v3/search?`)
      .then((res) => setRelatedVideos(res.data));
  };

  return (
    <div>
      {/* <img src={comments} height="180" width="320"/> */}
      <button onClick={() => getComments()}>Get Comments</button>
<<<<<<< HEAD
      
=======
      <ul>
        {comments.map((comment, i) => (
          <li key={i}>
            {comment.text}
            <ul>
              {comment.replies.map((reply, i) => (
                <li key={i}>{reply.text}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
<<<<<<< HEAD
      <div>
        <commentForm/>
      </div>
=======
>>>>>>> d0a10460ed670eed186088230010690b2fbff7cb
>>>>>>> 8b4751a1b74b357fc73660399184715ddb7a7241
    </div>
  );
};

export default App;
