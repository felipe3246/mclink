import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Loading = ({ show }) => (
  <div className="Loading" style={{display: show ? 'block' : 'none'}}>
    <h1>Loading...</h1>
  </div>
);

Loading.defaultProps = {
  color: '',
};

Loading.propTypes = {
  color: PropTypes.string,
};

export default Loading;
