import React, { lazy, Suspense } from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// задержка для lazy-компонентов
const Start = lazy(() => import("./pages/Start/Start"));
const Login = lazy(() => import("./pages/LogIn/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Home = lazy(() => import("./pages/Home/Home"));
const Friends = lazy(() => import("./pages/Friends/Friends"));
const Groups = lazy(() => import("./pages/Groups/Groups"));

import { UserProvider } from "./UserContext";
import DiceLoader from "./components/DiceLoader/DiceLoader";

const loadingStyle: React.CSSProperties = {
    backgroundColor: "#28333f",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: (
                    <Suspense
                        fallback={
                            <div style={loadingStyle}>
                                <DiceLoader />
                            </div>
                        }
                    >
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "friends",
                element: (
                    <Suspense
                        fallback={
                            <div style={loadingStyle}>
                                <DiceLoader />
                            </div>
                        }
                    >
                        <Friends />
                    </Suspense>
                ),
            },
            {
                path: "groups",
                element: (
                    <Suspense
                        fallback={
                            <div style={loadingStyle}>
                                <DiceLoader />
                            </div>
                        }
                    >
                        <Groups />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "/start",
        element: (
            <Suspense
                fallback={
                    <div style={loadingStyle}>
                        <DiceLoader />
                    </div>
                }
            >
                <Start />
            </Suspense>
        ),
    },
    {
        path: "/login",
        element: (
            <Suspense
                fallback={
                    <div style={loadingStyle}>
                        <DiceLoader />
                    </div>
                }
            >
                <Login />
            </Suspense>
        ),
    },
    {
        path: "/signup",
        element: (
            <Suspense
                fallback={
                    <div style={loadingStyle}>
                        <DiceLoader />
                    </div>
                }
            >
                <SignUp />
            </Suspense>
        ),
    },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    );
} else {
    console.error("Root element not found");
}
