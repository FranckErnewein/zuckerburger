import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

function FaceActionBar(props) {
  const { createZuckerbergFace } = props;
  return (
    <div className="FacesLayer">
      <button onClick={createZuckerbergFace}>Zuckerberg</button>
    </div>
  );
}

export default connect(null, dispatch => {
  return {
    createZuckerbergFace: () => dispatch(actions.createNewFace('one', 'zuckerberg', 150,150))
  };
})(FaceActionBar)

// export default connect(null, dispatch => bindActionCreators(actions, dispatch))(
//   FaceActionBar
// );
