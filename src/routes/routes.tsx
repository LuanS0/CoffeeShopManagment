import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import App from "../App";
import Dashboard from "../pages/Dashboard";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> },
            { path: '/dashboard', element: <Dashboard /> },

        ],
    },
]);

export default routes;