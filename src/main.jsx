import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Start from "./pages/Start/Start";
import Login from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import Groups from "./pages/Groups/Groups";

import { UserProvider } from "./UserContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "/start",
        element: <Start />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/friends",
        element: <Friends />,
    },
    {
        path: "/groups",
        element: <Groups />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <RouterProvider router={router}/>
    </UserProvider>
);