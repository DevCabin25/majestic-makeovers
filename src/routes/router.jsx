import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../components/Home/Home";

import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Service from "../components/Service/Service";
import Blog from "../components/Blog/Blog";
import Gallery from "../components/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: '/',
    
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/gallery',
                element:<Gallery></Gallery>,
                loader: ()=> fetch('galleryImage.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path:'/service',
                element:<Service></Service>

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
           
        ]
     }
 ])

export default router;