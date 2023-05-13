import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// here we are importing the (Router) library of (react):

// => React Router: (Router) is a standard library for routing in React. It allows navigation between views of different parts of the React application, allows the browser to change URLs and syncs the UI with the URL.

// => (Route) =  With the help of Route component, you can set the path of different components that you want to render at different times.

// => Note: The route component does not take any props as arguments other than specified in the documentation. To pass non-specified props we can use the ‘render’ argument inside the route component.

import {BrowserRouter as Router} from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    {/* here we put our (App) component:under the (Router) function of (React): */}

    <Router>

    <App />

    </Router>

  </React.StrictMode>

);

