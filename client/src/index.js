import React from "react";
import ReactDOM from "react-dom/client";

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
    <App />
  </React.StrictMode>
);
