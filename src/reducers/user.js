const initialState = [];
const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOWUSER':
            state = action.user
            return [...state];
        case 'DELETEUSER':
            for (var j = 0; j < state.length; j++) {
                if (state[j]._id === action.id) {
                    state.splice(j, 1)
                }
            }
            return [...state];
        case 'ADDUSER':
            state.push(action.user)
            return [...state];
        default: return [...state];
    }
}
export default user;