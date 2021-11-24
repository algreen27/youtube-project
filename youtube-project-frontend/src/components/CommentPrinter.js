import React, { useState, useEffect } from "react";

const CommentPrinter = ({ comments, videoId }) => {
  return (
    <div>
      <ul>
        {comments.map((comment, i) =>
          videoId === comment.videoId ? (
            <li key={i}>
              {comment.text}
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
