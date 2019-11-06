import React, { useState, useReducer } from "react";
//redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
// Components
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
// reducer & initial state
import { reducer, initialState } from "./reducers/reducer";

const store = createStore(reducer, initialState);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.additionalPrice);

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header car={state.car} />
          <AddedFeatures car={state.car} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div>
      </div>
    </Provider>
  );
};


export default App
