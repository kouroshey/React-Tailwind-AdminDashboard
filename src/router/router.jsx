import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // {
            //     path: "/dashboard",
            //     element: <Dashboard />
            // },
            // {
            //     path: "/team",
            //     element: <Team />
            // },
            // {
            //     path: "/contacts",
            //     element: <Contacts />
            // },
            // {
            //     path: "/invoices",
            //     element: <Invoices />
            // },
            // {
            //     path: "/form",
            //     element: <Form />
            // },
            // {
            //     path: "/bar",
            //     element: <Bar />
            // },
            // {
            //     path: "/pi",
            //     element: <Pi />
            // },
            // {
            //     path: "/line",
            //     element: <Line />
            // },
            // {
            //     path: "/faq",
            //     element: <FAQ />
            // },
            // {
            //     path: "/geography",
            //     element: <Geography />
            // },
            // {
            //     path: "/calendar",
            //     element: <Calendar />
            // },
        ]
    }
])

export default router