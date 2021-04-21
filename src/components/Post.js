import React from "react";

const Post = ({ title, body, id }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: title }}></div>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
      <div dangerouslySetInnerHTML={{ __html: id }}></div>
    </div>
  );
};

export default Post;
