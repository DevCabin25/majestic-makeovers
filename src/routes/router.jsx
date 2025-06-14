import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
      
        element: <Root></Root>,
        children: [
            {
                index: '/',
                element: <Home></Home>
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
     }
 ])

export default router;