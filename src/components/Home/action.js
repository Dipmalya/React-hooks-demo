import axios from 'axios';
import { GET_PRODUCTS } from '../../config/actionTypes';
import { GET_PRODUCTS_API } from '../../config/endpoints';

/**
 * Method to fetch products
 */
export const fetchProducts = () => dispatch => {
    axios.get(GET_PRODUCTS_API)
        .then(res => dispatch(fetchProductSuccess(res.data)))
        .catch(err => console.error(err));
}

const fetchProductSuccess = data => ({
    type: GET_PRODUCTS,
    payload: data
});