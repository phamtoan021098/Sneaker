const initialState = [];
const sneakeradmin = (state = initialState, action) => {
    switch (action.type) {
        case 'SNEAKERADMIN':
            state = action.sneaker
            return [...state];
        case 'UPDATEQUANTITY':
            for (var i = 0; i < state.length; i++) {
                if (state[i]._id === action.sneaker._id) {
                    state[i] = action.sneaker;
                }
            }
            return [...state];
        default: return [...state];
    }
}
export default sneakeradmin;