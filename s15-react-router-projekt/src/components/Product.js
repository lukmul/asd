import React from 'react';

const Product = (props) => {
    return (
        <article>
            <h1>Nazwa produktu</h1>
            <h3>{props.productName}</h3>
            <p>{props.productName} jeździ.</p>
        </article>

    );
}

export default Product;