const initialState={
    id:''
};
const id = (state = initialState, action) => {
    switch (action.type) {
        case 'GIVEID':
            state=action.id
            return state;
        default: return state;
    }
}
export default id;