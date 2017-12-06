import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducer";
import initial from "./data/initial";    // redux step 1.2: set up initial state and save it as initial.js 
import { Provider } from "react-redux";  //provider "connects" (react-redux component) our store to different parts of the app, so we don't have to pass a prop to EVERY component

import { createStore } from "redux";  // redux step 1 set up a store component for initial state
// import the Router component
import { BrowserRouter as Router } from "react-router-dom";

// import the App component
import App from "./App";

const store = createStore(  //redux step 2 create the store to pull in the initial state and reducer (actions will also be dispatched to the store)
    reducer, 
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //redux dev tools
);

// wrap the app in Router
ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
