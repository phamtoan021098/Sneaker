const initialState=[];
var findIndex = (cart, id) => {
    var result = -1;
    cart.forEach((item, index) => {
        if (item.id === id) {
            result = index;
        }
    });
    return result;
}

const cart = (state = initialState, action) => {
    var index=-1;
    switch (action.type) {
        case 'CART':
            state = action.cart
            return [...state];
        case  'DELETECART':
                index = findIndex(state, action.id);
                state.splice(index, 1);
                return [...state];
        case 'ADDCART':
                state.push(action.cart);
                return[...state];
        default: return [...state];
    }
}
export default cart;