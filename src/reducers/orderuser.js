const initialState = [];
const orderuser = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDERBYUSER':
            state = action.orderbyuser
            return [...state];
        default: return [...state];
    }
}
export default orderuser;