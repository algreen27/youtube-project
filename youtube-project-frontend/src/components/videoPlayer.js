import React from 'react';


// {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
//   src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"frameborder="0"></iframe> */}

//   <div id="ytplayer"></div>

//   var tag = document.createElement('script');
//   tag.src = "https://www.youtube.com/player_api";
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   var player;
//   function onYouTubePlayerAPIReady() {
//     player = new YT.Player('ytplayer', {
//       height: '360',
//       width: '640',
//       videoId: 'M7lc1UVf-VE'
//     });
//   }

<div id="player"></div>

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }


  export default onYouTubeIframeAPIReady;