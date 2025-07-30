import Home from "../../pages/Home.tsx";
import Auth from "../../pages/Auth.tsx";
import Statistics from "../../pages/Statistics.tsx";

export const PublicRouter = [
    {
        url: '/',
        component: Home
    },
    {
        url: '/auth',
        component: Auth
    },
    {
        url: '/statistics',
        component: Statistics
    },
]