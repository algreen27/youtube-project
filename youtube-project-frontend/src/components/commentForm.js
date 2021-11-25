import axios from "axios";
import React from "react";
import useForm from "./useForm";

const CommentForm = ({videoId, getComments}) => {
  const { commentBody, handleChange, handleSubmit } = useForm(postForm);

  async function postForm(){
      await axios.post(`http://localhost:8000/api/comments/`, {
          videoId:videoId,
          text:commentBody.commentBody,
      }) .then(res => {getComments()})

  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="commentBody"
          onChange={handleChange}
          value={commentBody.commentBody}
          required={true}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
