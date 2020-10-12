const initialState = [];
var findIndex = (order, id) => {
    var result = -1;
    order.forEach((item, index) => {
        if (item.id === id) {
            result = index;
        }
    });
    return result;
}
const order = (state = initialState, action) => {
    var index=-1;
    switch (action.type) {
        case 'ORDER':
            state = action.order
            return [...state];
        case 'ADDORDER':
            state.push(action.order)
            return [...state];
        case 'DELETEORDER':
            for (var i = 0; i < state.length; i++) {
                if (state[i]._id === action.id) {
                    state.splice(i,1);
                }
            }
            return [...state];
        case 'UPDATEORDER':
            for (var i = 0; i < state.length; i++) {
                if (state[i]._id === action.order._id) {
                    state[i] = action.order;
                }
            }
            return [...state];
        default: return [...state];
    }
}
export default order;