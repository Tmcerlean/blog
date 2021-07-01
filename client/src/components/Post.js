import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const Post = ({ post }) => {

  let match = useRouteMatch();

  return (
    <div>
        <h2>{post.title}</h2>
        <button>
            <Link to={`${match.url}/${post._id}`}>Edit Post</Link>
        </button>
        <p>{post.body}</p>
    </div>
  );
};

export default Post;