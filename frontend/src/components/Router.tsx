import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Auth} from "../pages/Auth";
import Chat from "../pages/Chat";

const router = createBrowserRouter([
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: "/chat",
        element: <Chat />,
    },
    {
        path: "*",
        element: <p className="bg-gray-400 p-4 rounded-lg text-black">404: Page not found</p>
    }
]);

const Router = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
};

export default Router;