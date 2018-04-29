import { omit } from 'ramda';
import { createCheckedReducer } from 'redux-tcomb';

import { Faces } from './structures';
import * as A from './actionTypes';

export function rawReducer(state = {}, action = {}) {
  const { type, payload, id } = action;
  switch (type) {
    case A.ADD_FACE:
      return Faces.update(state, {
        [payload.id]: { $set: payload }
      });
    case A.UPDATE_FACE:
      return Faces.update(state, {
        [id]: { $merge: omit(['id'], payload) }
      });
    default:
      return state;
  }
}

export default createCheckedReducer(rawReducer, Faces);
