import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Animal } from "./pages/Animal";
import { NotFound } from "./components/NotFound";
import { Animals } from "./pages/Animals";
import { animalLoader, animalsLoader } from "./loaders/animalsLoader";

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
                loader: animalLoader,
            },
        ],
    },
]);