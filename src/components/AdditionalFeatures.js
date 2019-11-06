import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";
import { initialState } from "../reducers/reducer"

const AdditionalFeatures = props => {
  console.log(props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = {
  initialState
}

export default connect(
  state => state,
  mapStateToProps
)(AdditionalFeatures);

