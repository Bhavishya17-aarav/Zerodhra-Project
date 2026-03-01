import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/home/HomePage.jsx'
import AboutPage from './components/about/AboutPage.jsx'
import ProductPage from './components/products/ProductPage.jsx'
import PricingPage from './components/pricing/PricingPage.jsx'
import SupportPage from './components/support/SupportPage.jsx'
import NotFound from './components/NotFound.jsx'
import Signin from './components/signin/Signin.jsx'
import Signup from './components/signup/Signup.jsx'


const router = createBrowserRouter([
  {path:"/" , element:<App/>, children: [
      { path:"/", element:<HomePage/>},
      { path:"/signup", element:<Signup/>},
      { path:"/signin", element:<Signin/>},
      { path:"/about", element:<AboutPage/>},
      { path:"/products", element:<ProductPage/>},
      { path:"/pricing", element:<PricingPage/>},
      { path:"/support", element:<SupportPage/>},
     { path:"*", element:<NotFound/>},
  ]},

    ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
