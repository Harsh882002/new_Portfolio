import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Layout from '../Layout/Layout';

export const AllRoute = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },

                {
                    path: "/about",
                    element: <About />
                },

                {
                    path: "/projects",
                    element: <Projects />
                },

                {
                    path: "/gallery",
                    element: <Gallery />
                },
                {
                    path: "/contact",
                    element: <Contact />
                }


            ]
        }

    ])


    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}