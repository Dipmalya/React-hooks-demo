import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Home from './index';

import { fetchProducts } from './action';

const mapStateToProps = ({ products }) => ({
    products
});

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: bindActionCreators(fetchProducts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);