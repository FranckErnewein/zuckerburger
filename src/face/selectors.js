import { createSelector } from 'reselect';
export const getFaces = state => state.face;

export const getFaceList = createSelector([getFaces], faces => {
  return Object.keys(faces).map(id => faces[id]);
});
