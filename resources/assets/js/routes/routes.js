import Home from '../containers/Home/home'
import Login from '../containers/Auth/login'
import NoMatch from '../containers/noMatch'
import Register from '../containers/Auth/register'
import ForgotPassword from '../containers/Auth/forgotPassword'
import ResetPassword from '../containers/Auth/resetPassword'
import Dashboard from '../containers/Cp/Dashboard/dashboard'
import PostCreate from '../containers/Cp/Posts/Create/Create'
import PostIndex from '../containers/Cp/Posts/Index/Index'
import Settings from '../containers/Cp/Settings/Settings'

const routes = [
    {
        path: '/cp/Posts/Create',
        exact: false,
        auth: true,
        component: PostCreate,
        layout: true,
    },
    {
        path: '/cp/Posts',
        exact: false,
        auth: true,
        component: PostIndex,
        layout: true,
    },
    {
        path: '/cp/Settings',
        exact: true,
        auth: true,
        component: Settings,
        layout: true,
        title: 'Site settings',
    },
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
        exact: false,
        auth: false,
        component: Login,
        layout: false,
    },
    {
        path: '/register',
        exact: false,
        auth: false,
        component: Register,
        layout: true,
    },
    {
        path: '/forgot-password',
        exact: false,
        auth: false,
        component: ForgotPassword,
        layout: true,
    },
    {
        path: '/reset-password/:token/:email',
        exact: false,
        auth: false,
        component: ResetPassword,
        layout: true,
    },
    {
        path: '/cp',
        exact: false,
        auth: true,
        component: Dashboard,
        layout: true,
        title: 'Dashboard page',
    },
    {
        path: '/nomatch',
        exact: false,
        auth: false,
        component: NoMatch,
        layout: true,
    }
];

export default routes;