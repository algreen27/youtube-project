import React from 'react';


const relatedVideos = (props) => {
    const [videos, setVideos] = useState();

return (
<div>
    {videos.map((vid, i) => (
     <>
        <img alt={vid.snippet.title} src={vid.snippet.thumbnails.medium.url} width={vid.snippet.thumbnails.medium}/>
        <p style={{color: "black"}} key={i}>
    {vid.snippet.title} <p style={{color: "grey"}}> {vid.snippet.description}</p>
    </p>
    </>
    ))};
</div> 

export default relatedVideos;