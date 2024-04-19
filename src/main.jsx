import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/shared/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Update from './components/Update/Update';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('/residential.json')
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: '/update',
    element: <Update></Update>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
