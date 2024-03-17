import { createBrowserRouter } from "react-router-dom";
import Defaultlayout from "./defaultlayout";
import Weather from "../component/Weather";
import Home from '../component/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Defaultlayout />,
        children: [
            {
                path: '/',
                element: <Weather />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    }
])

export default router;