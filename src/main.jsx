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
import { AuthProvider } from './components/Hooks/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import CardDetails from './components/CardDetails/CardDetails';
import PrivateRoute from './components/Routes/PrivateRoute';
import Error from './components/Error/Error';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    loader: async () => await fetch('/residential.json')
  },
  {
    path: 'about',
    element: <About></About>
  },
  {
    path: 'blog',
    element: <Blog></Blog>
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: 'update',
    element: <Update></Update>
  },
  {
    path: '/carddetails/:cardId',
    element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
    loader: async () => await fetch('/residential.json')
  },
  {
    path: 'contact',
    element: <PrivateRoute><Contact></Contact></PrivateRoute>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ParallaxProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ParallaxProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
