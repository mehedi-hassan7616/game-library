import { createBrowserRouter } from "react-router";
import Homelayout from "../Layouts/Homelayouts";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GameDetails from "../component/GameDetails"
import AuthLayout from "../component/AuthLayout";
const router = createBrowserRouter(
    [
        {
            path: '/',
            loader: () => fetch("/game.json"),
            element: <Homelayout></Homelayout>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login></Login>,
                },
                {
                    path: '/auth/login',
                    element: <Login></Login>,
                },
            ],
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: '/*',
            element: <Error></Error>,
        },
        {
            path: "/gameDetails/:id",
            loader: () => fetch("/game.json"),
            element: <GameDetails></GameDetails>,
        }
    ]
);
export default router;