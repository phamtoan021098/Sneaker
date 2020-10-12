const initialState={
    _id:'',
    name: '',
    price: 0,
    brand: '',
    img:'',
    img1:'',
    img2:'',
    quantity:0,
    code: '',
    material: '',
    color: '',
    discount:0
};
const sneaker = (state = initialState, action) => {
    switch (action.type) {
        case 'EDITINGSNEAKER':
            state=action.sneaker
            return state;
        default: return state;
    }
}
export default sneaker;