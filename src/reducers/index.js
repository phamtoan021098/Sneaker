import sort from './sort';
import cart from './cart';
import sneaker from './sneaker';
import user from './user';
import id from './id';
import editing from './editing';
import order from './order';
import orderuser from './orderuser';
import sneakeradmin from './sneakeradmin'
import { combineReducers } from 'redux';
const myReducer=combineReducers({
    sort,
    cart,
    sneaker,
    user,
    id,
    editing,
    order,
    orderuser,
    sneakeradmin
});
export default myReducer;