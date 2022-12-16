import React from "react";
import ReactDOM from "react-dom/client";
import App from './comps/App';
import './index.css';

/// drag folder into src
// import App from './Books/App';
// import './Books/index.css';
// import App from "./AnimalShow/App";   
// import App from "./apiPics/App";

if (module.hot) module.hot.accept();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
