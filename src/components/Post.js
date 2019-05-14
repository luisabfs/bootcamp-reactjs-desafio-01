import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ data }) => (
  <div className="post">
    <PostHeader data={data} />
    <p>{data.body}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Post;
