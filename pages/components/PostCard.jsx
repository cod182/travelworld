import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div>
      {post.title} {post.excert}
    </div>
  );
};

export default PostCard;
