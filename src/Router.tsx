import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Animal } from "./pages/Animal";
import { Animals } from "./pages/Animals";
import { animalsLoader } from "./loaders/animalsLoader";
import About from "./pages/About";
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
                loader: animalsLoader,
            },
            {
                path: "/animal/:id",
                element: <Animal></Animal>,
            },
        ],
    },
]);