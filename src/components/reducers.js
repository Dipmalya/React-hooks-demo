import { combineReducers } from 'redux';
import { products } from './Home/reducer';

const rootReducer = combineReducers({
    products
});

export default rootReducer