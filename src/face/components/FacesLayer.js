import { connect } from 'react-redux';
import React from 'react';

import Face from './Face';
import { getFaceList } from '../selectors';

function FacesLayer(props) {
  const { faces } = props;
  return (
    <div className="FacesLayer">
      {faces.map(face => <Face key={face.id} face={face} />)}
    </div>
  );
}

export default connect(state => ({
  faces: getFaceList(state)
}))(FacesLayer);
