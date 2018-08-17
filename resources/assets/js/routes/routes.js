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
        component: Home,
        layout: true,
    },
    {
        path: '/login/:social',
        exact: false,
        auth: false,
        component: Home,
        layout: true,
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        component: Login,
        layout: false,
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        component: Register,
        layout: true,
    },
    {
        path: '/forgot-password',
        exact: true,
        auth: false,
        component: ForgotPassword,
        layout: true,
    },
    {
        path: '/reset-password/:token/:email',
        exact: true,
        auth: false,
        component: ResetPassword,
        layout: true,
    },
    {
        path: '/cp',
        exact: true,
        auth: true,
        component: Dashboard,
        layout: true,
    },
    {
        path: '',
        exact: true,
        auth: false,
        component: NoMatch,
        layout: true,
    }
];

export default routes;