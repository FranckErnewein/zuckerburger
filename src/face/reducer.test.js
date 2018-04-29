import reducer from './reducer';
import * as a from './actions';

const aState = {
  a: {
    id: 'a',
    type: 'zuckerberg',
    x: 340,
    y: 500,
    rotate: 0,
    scale: 0
  }
};

describe('face/reducer', () => {
  it('should init', () => {
    expect(reducer()).toEqual({});
  });

  it('should add face', () => {
    const type = 'zuckerberg';
    const id = 'a';
    const state = reducer(undefined, a.createNewFace(id, type));
    expect(state[id].type).toBe(type);
  });

  it('should update face', () => {
    expect(reducer(aState, a.updateFace('a', { x: 400 })).a.x).toBe(400);
  });
});
