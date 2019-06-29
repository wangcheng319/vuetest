
import App from "../App"
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Find from "../components/find/Find";
import Me from "../components/me/Me";
import Details from "../components/list/details/Details";
import TabBar from '../components/TabBar'

export default [
    {
        //默认到首页的home tab项
        path:"/",
        component:Home,
        children:[
            {
                path:"/home",
                component:Home,//这样会提前加载
            },
            {
                path:"/list",
                name:'list',
                component:() => import('../components/list/List'),//这种是按需加载
            },
            {
                path:"/find",
                component:Find,
            },
            {
                path:"/me",
                component:Me,
                name: 'me'
            },
            {
                path:'/login',
                component:Login,
                meta: {navShow: false}
            }
        ]
    },
    {
        path:"/details",
        component:Details,
        name:'Details',
        meta: { navShow: false},
    },

    {
        path:"/",
        redirect:"/home"
    }

    ]