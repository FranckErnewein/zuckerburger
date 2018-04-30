import React from 'react';

import zuckerberg from './img/zuckerberg-face.png';

const imgs = {
  zuckerberg
};

function Face(props) {
  const { face } = props;
  const { x, y, rotate, scale, type } = face;
  const style = {
    transform: `translateX(${x}px) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`
  };
  return (
    <div className="Face" style={style}>
      <img src={imgs[type]} alt={type} />
      Face
    </div>
  );
}

export default Face;
