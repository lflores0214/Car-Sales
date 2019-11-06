import React from 'react';
import { connect } from 'react-redux';
import { initialState } from "../reducers/reducer"

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = {
  initialState
}

export default connect(
  state => state,
  mapStateToProps
)(AddedFeature);
