import reducer from './reducer';
import * as a from './actions';

describe('face/reducer', () => {
  it('should init', () => {
    expect(reducer()).toEqual({});
  });

  it('should add face', () => {
    const type = 'zuckerberg';
    const state = reducer(undefined, a.createNewFace(type));
    expect(state[Object.keys(state)[0]].type).toBe(type);
  });
});
