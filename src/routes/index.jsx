import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
    Mainpage
} from './imports'

const router = createBrowserRouter([
    {
        element:<App/>,
        children:[
            {
                element:<Mainpage/>,
                path:'/'
            }
        ]
    }
])

export { router }