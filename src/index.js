import React from "react";
import ReactDOM from "react-dom/client";

// redux state managment
import store from "./redux/store";
import { Provider } from "react-redux";

// styles
import "./index.css";

// App Component
import App from "./App";

// React Router V6
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
