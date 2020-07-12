import React from 'react';
import PropTypes from 'prop-types';

const Meme = ({ name, image, type, postId }) => (
  <a 
    className='single-post' 
    href={ `https://i.imgur.com/a/${postId}` }
    rel='noopener noreferrer alternate'
    target='_blank'
  >
    <div className='post-title'>
      <p className='title-text'>{ name }</p>
    </div>
    <div className='media-container'>
      { 
        type === 'video/mp4' ? 
        <video playsInline autoPlay loop muted>
          <source src={ image } type={ type }/>
        </video>
        :
        <img src={ image } alt={ name } />
      }
    </div>
  </a>
)


Meme.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired
};

export default Meme;
