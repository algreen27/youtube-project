import React, { useState, useEffect } from "react";
import ReplyForm from "./ReplyForm";

const CommentPrinter = ({ comments, videoId, getComments }) => {
  return (
    <div>
      <ul>
        {comments.map((comment, i) =>
          videoId === comment.videoId ? (
            <li key={i}>
              {comment.text}
              <ReplyForm comment={comment} getComments={getComments}/>
              <ul>
                {comment.replies.map((reply, i) => (
                  <li key={i}>{reply.text}</li>
                ))}
              </ul>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default CommentPrinter;
