import * as A from './actionTypes';

const defaultFace = {
  scale: 1,
  rotate: 0
};

export function createNewFace(type, x = 100, y = 100) {
  return {
    type: A.ADD_FACE,
    payload: {
      ...defaultFace,
      id: 'abcd',
      type,
      x,
      y
    }
  };
}
