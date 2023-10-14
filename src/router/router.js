import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "../pages/Error404";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: []
    }
])