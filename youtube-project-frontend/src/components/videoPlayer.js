import React from "react";



const VideoPlayer = () => {
  return (
    <div>
      <iframe
        id="player"
        type="text/html"
        width="720"
        height="540"
        src="https://www.youtube.com/embed/LYdW1RJ7Kis"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
