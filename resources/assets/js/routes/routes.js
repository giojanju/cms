import Home from '../containers/Home/home'
import Login from '../containers/Auth/login'
import Register from '../containers/Auth/register'
import ForgotPassword from '../containers/Auth/forgotPassword'
import ResetPassword from '../containers/Auth/resetPassword'
import Dashboard from '../containers/dashboard'
import NoMatch from '../containers/noMatch'

const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Home
    },
    {
        path: '/login/:social',
        exact: false,
        auth: false,
        component: Home
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        component: Login
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        component: Register
    },
    {
        path: '/forgot-password',
        exact: true,
        auth: false,
        component: ForgotPassword
    },
    {
        path: '/reset-password/:token/:email',
        exact: true,
        auth: false,
        component: ResetPassword
    },
    {
        path: '/dashboard',
        exact: true,
        auth: true,
        component: Dashboard
    },
    {
        path: '',
        exact: true,
        auth: false,
        component: NoMatch
    }
];

export default routes;