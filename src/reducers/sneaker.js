const initialState = [];
const sneaker = (state = initialState, action) => {
    switch (action.type) {
        case 'SNEAKER':
            state = action.sneaker
            return [...state];
        case 'ADDSNEAKER':
            state.push(action.sneaker)
            return [...state];
        case 'UPDATESNEAKER':
            for (var i = 0; i < state.length; i++) {
                if (state[i]._id === action.sneaker._id) {
                    state[i] = action.sneaker;
                }
            }
            return [...state];
        case 'DELETESNEAKER':
            for (var j = 0; j < state.length; j++) {
                if (state[j]._id === action.id) {
                    state.splice(j, 1)
                }
            }
            return [...state];
        default: return [...state];
    }
}
export default sneaker;