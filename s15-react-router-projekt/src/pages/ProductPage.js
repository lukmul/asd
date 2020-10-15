import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'

const ProductPage = (props) => {
    console.log(props)

    return (
        <>
            <div>Strona produktu</div>
            <Product productName={props.match.params.name} />
            <Link to="/products">Powrot do listy produktow</Link>
        </>
    );
}

export default ProductPage;