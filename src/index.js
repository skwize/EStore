import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Root from './Root';
import Home from './pages/Home'
import Product from './pages/Product'
import Settings from './pages/Settings'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: 'Page not found',
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product/:productId',
        element: <Product />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

