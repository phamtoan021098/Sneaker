import axios from 'axios';
export const sort = (sort) => {
    return {
        type: 'SORT',
        sort
    }
}
export const updatecart = (cart) => {
    return {
        type: 'UPDATECART',
        cart
    }
}
export const deletecart = (id) => {
    return {
        type: 'DELETECART',
        id
    }
}
export const deleteorder = (id) => {
    return {
        type: 'DELETEORDER',
        id
    }
}
export const deleteuser = (id) => {
    return {
        type: 'DELETEUSER',
        id
    }
}
export const showcart = (cart) => {
    return {
        type: 'CART',
        cart
    }
}
export const showorderuser = (orderbyuser) => {
    return {
        type: 'ORDERBYUSER',
        orderbyuser
    }
}
export const showorderuserrequest = (user, datetime) => {
    return (dispatch) => {
        return axios.get(`http://localhost:4000/order/view/${user}/${datetime}`).then(res => {
            dispatch(showorderuser(res.data));
        });
    }
}
export const addcart = (cart) => {
    return {
        type: 'ADDCART',
        cart

    }
}
export const adduser = (user) => {
    return {
        type: 'ADDUSER',
        user
    }
}
export const showorder = (order) => {
    return {
        type: 'ORDER',
        order
    }
}
export const addorder = (order) => {
    return {
        type: 'ADDORDER',
        order
    }
}
export const addorderrequest = (order) => {
    return (dispatch) => {
        return axios.post('http://localhost:4000/order/add', order).then(req => {
            console.log(req);
            dispatch(addorder(order));
        });
    }
}
export const addsneaker = (sneaker) => {
    return {
        type: 'ADDSNEAKER',
        sneaker
    }
}
export const editingsneaker = (sneaker) => {
    return {
        type: 'EDITINGSNEAKER',
        sneaker
    }
}
export const updateorder = (order) => {
    return {
        type: 'UPDATEORDER',
        order
    }
}
export const updatesneaker = (sneaker) => {
    return {
        type: 'UPDATESNEAKER',
        sneaker
    }
}
export const updateorderrequest = (order) => {
    return (dispatch) => {
        return axios.put(`http://localhost:4000/order/update/${order._id}`, order).then(req => {
            //console.log(req.data);
            dispatch(updateorder(order));
        })
    }
}
export const updatesneakerrequest=(sneaker)=>{
    return(dispatch)=>{
        return axios.put(`http://localhost:4000/sneakers/update/${sneaker._id}`,sneaker).then(req=>{
            console.log(req.data);
            dispatch(updatesneaker(sneaker))
        })
    }
}
export const updatequantity = (sneaker) => {
    return {
        type: 'UPDATEQUANTITY',
        sneaker
    }
}
export const updatequantityrequest=(sneaker)=>{
    return(dispatch)=>{
        return axios.put(`http://localhost:4000/sneakers/updatequantity/${sneaker._id}`,sneaker).then(req=>{
            console.log(req.data);
            dispatch(updatequantity(sneaker))
        })
    }
}
export const showsneaker = (sneaker) => {
    return {
        type: 'SNEAKER',
        sneaker
    }
}
export const showsneakeradmin=(sneaker)=>{
    return{
        type:'SNEAKERADMIN',
        sneaker
    }
}
export const showsneakeradminrequest = () => {
    return (dispatch) => {
        return axios.get('http://localhost:4000/sneakers').then(res => {
            dispatch(showsneakeradmin(res.data))
        });
    }
}
export const deletesneaker = (id) => {
    return {
        type: 'DELETESNEAKER',
        id
    }
}
export const showuser = (user) => {
    return {
        type: 'SHOWUSER',
        user
    }
}
export const giveid = (id) => {
    return {
        type: 'GIVEID',
        id
    }
}

export const showcartrequest = (user) => {
    return (dispatch) => {
        return axios.get('http://localhost:4000/addcart/cart/' + user).then(res => {
            dispatch(showcart(res.data));
        });
    }
}
export const showorderrequest = () => {
    return (dispatch) => {
        return axios.get('http://localhost:4000/order/').then(res => {
            dispatch(showorder(res.data));
        });
    }
}
export const showuserrequest = () => {
    return (dispatch) => {
        return axios.get('http://localhost:4000/user/view').then(res => {
            dispatch(showuser(res.data));
        });
    }
}
export const showsneakerrequest = () => {
    return (dispatch) => {
        return axios.get('http://localhost:4000/sneakers').then(res => {
            dispatch(showsneaker(res.data))
        });
    }
}
export const deletecartrequest = (id) => {
    return (dispatch) => {
        return axios.get('http://localhost:4000/addcart/delete/' + id).then(res => {
            dispatch(deletecart(id))
        })
    }
}
export const deleteuserrequest = (id) => {
    return (dispatch) => {
        return axios.get('http://localhost:4000/user/delete/' + id).then(res => {
            dispatch(deleteuser(id))
        })
    }
}
export const deletesneakerrequest = (id) => {
    return (dispatch) => {
        return axios.get('http://localhost:4000/sneakers/delete/' + id).then(res => {
            dispatch(deletesneaker(id))
        })
    }
}
export const deleteorderrequest = (id) => {
    return (dispatch) => {
        return axios.get('http://localhost:4000/order/delete/' + id).then(res => {
            dispatch(deleteorder(id))
        })
    }
}
export const addcartrequest = (cart) => {
    return (dispatch) => {
        return axios.post('http://localhost:4000/addcart/add', cart).then(req => {
            dispatch(addcart(cart))
        });
    }
}
export const addsneakerequest = (sneaker) => {
    return (dispatch) => {
        return axios.post('http://localhost:4000/sneakers/add', sneaker).then(req => {
            dispatch(addsneaker(sneaker))
        });
    }
}
export const adduserrequest = (user) => {
    return (dispatch) => {
        return axios.put('http://localhost:4000/user/register', user).then(res => {
            //console.log(res.data);
            dispatch(adduser(user))
            //dispatch(showmessage(res.data))            
        });
    }
}