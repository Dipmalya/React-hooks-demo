import { GET_PRODUCTS } from '../../config/actionTypes';

export const products = (state = [], {type, payload}) => {
    switch(type) {
        case GET_PRODUCTS: {
            return payload;
        };
        default: {
            return state;
        }
    }
}