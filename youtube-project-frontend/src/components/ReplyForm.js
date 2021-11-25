import axios from "axios";
import React from "react";
import useForm from "./useForm";

const ReplyForm = ({videoId, getComments, comment}) => {
  const { commentBody, handleChange, handleSubmit } = useForm(postForm);

  async function postForm(){
      await axios.post(`http://localhost:8000/api/comments/${comment._id}/replies`, {
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
        <button type="submit">Reply</button>
      </form>
    </div>
  );
};

export default ReplyForm;
