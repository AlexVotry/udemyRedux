import React from "react";
import 'bulma/css/bulma.css';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from './cars/App';
import { store } from './cars/store';
import './cars/styles.css';

/// drag folder into src
// import App from './comps/App';
// import './comps/index.css';
// import App from './Books/App';
// import './Books/index.css';
// import App from "./AnimalShow/App";   
// import App from "./apiPics/App";

if (module.hot) module.hot.accept();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
