import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/animals",
                element: <Animals></Animals>,
            },
            {
                path: "/animal/:id",
                element: <Animal></Animal>,
            },
        ],
    },
]);