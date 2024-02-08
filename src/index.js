import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // If you're using React Router

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";

ReactGA.initialize("G-L2HF8D3RNJ");

// ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Wrap your App component with Router */}
      <App />
    </Router>
  </React.StrictMode>
);

// Send pageview event when route changes
const sendPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

// Listen for route changes
window.history.listen(sendPageView);

// Initial pageview when the app loads
sendPageView();

reportWebVitals();
