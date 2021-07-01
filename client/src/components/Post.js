import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const Post = ({ content }) => {

  let match = useRouteMatch();

  return (
    <div>
        {content && <div>
            <h2>{content?.title}</h2>
            <button>
                <Link to={`${match.url}/${content._id}`}>Edit Post</Link>
            </button>
            <p>{content.body}</p>
        </div>}
    </div>
  );
};

export default Post;