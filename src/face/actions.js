import * as A from './actionTypes';

const defaultFace = {
  scale: 1,
  rotate: 0
};

export function createNewFace(id, type, x = 100, y = 100) {
  return {
    type: A.ADD_FACE,
    payload: {
      ...defaultFace,
      id,
      type,
      x,
      y
    }
  };
}

export function updateFace(id, payload) {
  return {
    type: A.UPDATE_FACE,
    id,
    payload
  };
}
