
import App from "../App"
import Home from "@/components/home/Home";
import List from "@/components/list/List";
import Find from "@/components/find/Find";
import Me from "@/components/me/Me";
import Details from "@/components/list/details/Details";

export default [
    {
        path:"/",
        component:App,
        children:[
            {
                path:"/home",
                component:Home,
            },
            {
                path:"/list",
                component:List,
            },
            {
                path:"/find",
                component:Find,
            },
            {
                path:"/me",
                component:Me,
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