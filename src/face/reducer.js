import { createCheckedReducer } from 'redux-tcomb';
import { Faces } from './structures';
import * as A from './actionTypes';

export function rawReducer(state = {}, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case A.ADD_FACE:
      return Faces.update(state, {
        [payload.id]: { $set: payload }
      });
    default:
      return state;
  }
}

export default createCheckedReducer(rawReducer, Faces);
