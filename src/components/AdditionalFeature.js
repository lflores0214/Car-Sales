import React from 'react';
import { connect } from "react-redux"
import { initialState } from "../reducers/reducer"

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = {
  initialState
}

export default connect(
  state => state,
  mapStateToProps
)(AdditionalFeature);

