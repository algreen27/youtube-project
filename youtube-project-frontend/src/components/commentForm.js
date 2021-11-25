// import React, {useState} from 'react';

// const commentForm = ({commentBody, videoId}) => {
  
//     // const [commentBody,setCommentBody] = useState("");


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         props.postNewComment({
//             body: commentBody,
//         });
//     }

//     return(
//         <div>
//             <h2>Post Comment</h2>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <input
//                 placeholder="Post comment..."
//                 value={commentBody}
//                 onChange={(e) => setCommentBody(e.target.value)} />
//                 <input
//                 type= "submit"/>
//             </form>

//         </div>
//     )
// }



// export default commentForm;