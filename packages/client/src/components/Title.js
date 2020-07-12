import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => <h1 className='app-title'>{ children }</h1>

Title.propTypes = {
  children: PropTypes.string.isRequired
}

export default Title;
