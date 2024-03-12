import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <div key={comment.id}>
        <Comment comment={comment} />
        <div className="pl-10 my-2 border-l">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

export default CommentList;
