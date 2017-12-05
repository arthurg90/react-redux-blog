import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducer";
import initial from "./data/initial";
import { Provider } from "react-redux";

import { createStore } from "redux";

// import the Router component
import { BrowserRouter as Router } from "react-router-dom";

// import the App component
import App from "./App";

const store = createStore(
    reducer, 
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
