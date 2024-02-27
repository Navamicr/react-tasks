import { createBrowserRouter } from "react-router-dom";
import MyntraLayouts from "../pages/Root/MyntraLayouts";
import Home from "../pages/Home";
import CategoryContainer from "../components/products/category/CategoryContainer";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MyntraLayouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop/:category', //calling dynamically ie category instead of this can go for nested router
                element: <CategoryContainer />
            },

        ]
    }
])