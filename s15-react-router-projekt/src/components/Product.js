import React from 'react';

const Product = (props) => {
    return (
        <article>
            <h1>@Nazwa produktu:</h1>
            <h3>00{props.productName}</h3>
            <h4>Jakas dziwna tresc</h4>
            <p>{props.productName}ipsum jeździ.</p>
        </article>

    );
}

export default Product;
