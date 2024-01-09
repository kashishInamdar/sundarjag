import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter , RouterProvider } from "react-router-dom"


import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Service from './views/Service/Service';
import OurPlan from './views/OurPlan/OurPlan';


const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/service",
    element : <Service />
  },
  {
    path : "/plan",
    element : <OurPlan />
  },
  {
    path : "/contact",
    element : <Contact />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} />);
