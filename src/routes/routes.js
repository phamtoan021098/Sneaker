import React from 'react';
import Home from '../components/home/Home';
import View from '../components/shopbybrand/View';
import Itemdetail from '../components/detail/Itemdetail';
import Login from '../components/login/Login';
import Cart from '../components/cart/ListItem';
import Register from '../components/register/Register';
import Bestseller from '../components/bestseller/BestSeller';
import SaleOff from '../components/saleoff/SaleOff';
import Productlist from '../components/admin/ManagerProducts';
import Orderlist from '../components/admin/Orderlist';
import User from '../components/admin/User';
const routes=[
    {
        path:"/",
        exact:true,
        main:()=><Home />
    },
    {
        path:"/user",
        exact:false,
        main:()=><User/>
    },
    {
        path:"/sale",
        exact:false,
        main:()=><SaleOff />
    },
    {
        path:"/admin",
        exact:true,
        main:()=><Productlist />
    },
    {
        path:"/order",
        exact:true,
        main:()=><Orderlist />
    },
    {
        path:"/shop/:id",
        exact: false,
        main:({match})=><View match={match} />
    },
    {
        path:"/view/:id",
        exact:true,
        main:({match,history})=><Itemdetail match={match} history={history}/>
    },
    {
        path:"/login",
        exact:false,
        main:({history})=><Login history={history}/>
    },
    {
        path:"/register",
        exact:false,
        main:({history})=><Register history={history}/>
    },
    {
        path:"/cart",
        exact:true,
        main:()=><Cart />
    },
    {
        path:"/bestseller",
        exact: false,
        main:()=><Bestseller />
    }
]
export default routes;