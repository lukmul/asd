import React from 'react';

const Product = (props) => {
    return (
        <article>
            <h3>{props.productName}</h3>
            <p>{props.productName} jezdzi.</p>
        </article>

    );
}

export default Product;