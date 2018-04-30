import React from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';

import zuckerberg from './img/zuckerberg-face.png';

const imgs = {
  zuckerberg
};

function Face(props) {
  const { face, rotateFace } = props;
  const { x, y, rotate, scale, type } = face;
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`
  };
  const imgStyle ={
    transform: `rotate(${rotate}deg`
  }
  return (
    <div className='container'>
      <div className="Face" style={style}>
        <img src={imgs[type]} alt={type} style={imgStyle}/>
        <input type='number' min='0' max='360' value={rotate} onChange={rotateFace}/>
      </div>
    </div>
  );
}

export default connect(null, dispatch => {
  return {
    rotateFace: (event) => dispatch(actions.updateFace('one',{rotate: parseInt(event.target.value, 10)}))
  }
})(Face)

