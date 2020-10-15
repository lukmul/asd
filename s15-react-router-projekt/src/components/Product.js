import React from 'react';

const Product = (props) => {
    return (
        <article>
            <h1>@Nazwa produktu:</h1>
            <h3>7{props.productName}</h3>
            <p>-Lorem ndi temporibus repellat veniam quisquam illum fugit maiores.</p>
            <p>{props.productName}ipsum jeździ.</p>
        </article>

    );
}

export default Product;
