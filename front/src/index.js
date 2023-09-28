import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import App from './App';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import store from './redux/store'
import User from './pages/User';

import './style/main.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/SignIn',
        element: <SignIn />,
      },
      {
        path: '/User',
        element: <User />
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
