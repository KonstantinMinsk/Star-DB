import React from 'react';
import PropTypes from 'prop-types';


const Row = ({ left, right }) => {
    return (
      <div className='row'>
          { left }
          { right }
      </div>
    )
  }


Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
}


export default Row