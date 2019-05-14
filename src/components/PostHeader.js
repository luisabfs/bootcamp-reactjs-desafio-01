import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ data }) => (
  <div className="post-header-container">
    <img className="avatar" src={data.avatar} alt="avatar" />
    <div className="data-container">
      <strong>{data.name}</strong>
      <span>{data.time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default PostHeader;
