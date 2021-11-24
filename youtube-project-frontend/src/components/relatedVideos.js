import React, {useState} from 'react';


const RelatedVideos = ({relatedVideos}) => {

    return (
        <div>
         {relatedVideos.map((vid, i) => (
     <>
        <img alt={vid.snippet.title} src={vid.snippet.thumbnails.medium.url} width={vid.snippet.thumbnails.medium}/>
        <p style={{color: "black"}} key={i}>
    {vid.snippet.title} <p style={{color: "grey"}}> {vid.snippet.description}</p>
    </p>
    </>
    ))}

        </div>
    )
}

export default RelatedVideos;


